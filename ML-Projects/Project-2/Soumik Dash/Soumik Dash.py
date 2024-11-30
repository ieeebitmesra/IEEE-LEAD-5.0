import numpy as np
from tensorflow.keras.datasets import mnist
import matplotlib.pyplot as plt

# Load dataset
(X_train, Y_train), (X_test, Y_test) = mnist.load_data()

# Preprocess data
X_train = X_train.reshape(X_train.shape[0], -1).T / 255.0  # Flatten and normalize
X_test = X_test.reshape(X_test.shape[0], -1).T / 255.0

# One-hot encoding labels
def one_hot_encode(Y, num_classes=10):
    one_hot = np.zeros((num_classes, Y.size))
    one_hot[Y, np.arange(Y.size)] = 1
    return one_hot

Y_train = one_hot_encode(Y_train)
Y_test = one_hot_encode(Y_test)

# Initialize weights and biases
input_size = 784
hidden_size = 128
output_size = 10

np.random.seed(42)
W1 = np.random.randn(hidden_size, input_size) * 0.01
b1 = np.zeros((hidden_size, 1))
W2 = np.random.randn(output_size, hidden_size) * 0.01
b2 = np.zeros((output_size, 1))

# Activation functions
def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def sigmoid_derivative(x):
    return x * (1 - x)  # Assumes input is sigmoid(x)

def softmax(x):
    exp_x = np.exp(x - np.max(x, axis=0, keepdims=True))  # Stability fix
    return exp_x / exp_x.sum(axis=0, keepdims=True)

# Forward propagation
def forward_propagation(X):
    global W1, b1, W2, b2
    Z1 = np.dot(W1, X) + b1
    A1 = sigmoid(Z1)
    Z2 = np.dot(W2, A1) + b2
    A2 = softmax(Z2)
    return Z1, A1, Z2, A2

# Backward propagation
def backward_propagation(X, Y, Z1, A1, Z2, A2, learning_rate=0.01):
    global W1, b1, W2, b2
    m = X.shape[1]  # Number of examples

    # Gradients for output layer
    dZ2 = A2 - Y
    dW2 = (1 / m) * np.dot(dZ2, A1.T)
    db2 = (1 / m) * np.sum(dZ2, axis=1, keepdims=True)

    # Gradients for hidden layer
    dA1 = np.dot(W2.T, dZ2)
    dZ1 = dA1 * sigmoid_derivative(A1)
    dW1 = (1 / m) * np.dot(dZ1, X.T)
    db1 = (1 / m) * np.sum(dZ1, axis=1, keepdims=True)

    # Update parameters
    W1 -= learning_rate * dW1
    b1 -= learning_rate * db1
    W2 -= learning_rate * dW2
    b2 -= learning_rate * db2

# Training loop
def train(X, Y, epochs=10, batch_size=64, learning_rate=0.01):
    for epoch in range(epochs):
        # Shuffle data
        permutation = np.random.permutation(X.shape[1])
        X_shuffled = X[:, permutation]
        Y_shuffled = Y[:, permutation]

        for i in range(0, X.shape[1], batch_size):
            # Mini-batch
            X_batch = X_shuffled[:, i:i+batch_size]
            Y_batch = Y_shuffled[:, i:i+batch_size]

            # Forward and backward pass
            Z1, A1, Z2, A2 = forward_propagation(X_batch)
            backward_propagation(X_batch, Y_batch, Z1, A1, Z2, A2, learning_rate)

        # Compute loss for the epoch
        Z1, A1, Z2, A2 = forward_propagation(X)
        loss = -np.mean(Y * np.log(A2 + 1e-8))  # Cross-entropy loss
        print(f"Epoch {epoch+1}/{epochs}, Loss: {loss:.4f}")

# Evaluate the model
def evaluate(X, Y):
    Z1, A1, Z2, A2 = forward_propagation(X)
    predictions = np.argmax(A2, axis=0)
    labels = np.argmax(Y, axis=0)
    accuracy = np.mean(predictions == labels) * 100
    print(f"Test Accuracy: {accuracy:.2f}%")
    return accuracy

# Visualize misclassified examples
def plot_misclassified(X, Y):
    Z1, A1, Z2, A2 = forward_propagation(X)
    predictions = np.argmax(A2, axis=0)
    labels = np.argmax(Y, axis=0)
    misclassified = np.where(predictions != labels)[0]

    plt.figure(figsize=(10, 5))
    for i, idx in enumerate(misclassified[:10]):
        plt.subplot(2, 5, i+1)
        plt.imshow(X[:, idx].reshape(28, 28), cmap='gray')
        plt.title(f"Pred: {predictions[idx]}, True: {labels[idx]}")
        plt.axis('off')
    plt.show()

# Visualize correctly classified examples
def plot_classified(X, Y):
    Z1, A1, Z2, A2 = forward_propagation(X)
    predictions = np.argmax(A2, axis=0)
    labels = np.argmax(Y, axis=0)
    classified = np.where(predictions == labels)[0]

    plt.figure(figsize=(10, 5))
    for i, idx in enumerate(classified[:10]):
        plt.subplot(2, 5, i + 1)
        plt.imshow(X[:, idx].reshape(28, 28), cmap='gray')
        plt.title(f"Pred: {predictions[idx]}, True: {labels[idx]}")
        plt.axis('off')
    plt.show()

# Train the model
train(X_train, Y_train, epochs=500, batch_size=64, learning_rate=0.1)

# Evaluate the model
evaluate(X_test, Y_test)

# Plot correctly classified examples
print("Correct prediction")
plot_classified(X_test, Y_test)

# Plot misclassified examples
print("Incorrect prediction")
plot_misclassified(X_test, Y_test)
