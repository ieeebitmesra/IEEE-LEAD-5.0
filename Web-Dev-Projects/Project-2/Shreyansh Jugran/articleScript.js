window.addEventListener("DOMContentLoaded", () => {
    const imageURL = localStorage.getItem("articleImageURL");
    const title = localStorage.getItem("articleTitle");
    const description = localStorage.getItem("articleDescription");
    const URL = localStorage.getItem("articleURL");

    document.getElementById("img").src = imageURL;
    document.getElementById("heading").textContent = title;
    document.getElementById("desc").textContent = description;
    document.getElementById("link").href = URL;
});

function addComment(event) {
    event.preventDefault();

    const username = document.getElementById("exampleInputEmail1").value;
    const commentText = document.getElementById("exampleComment").value;

    if (!username || !commentText) {
        alert("Please enter both your username and comment.");
        return;
    }

    const newComment = document.createElement("div");
    newComment.classList.add("list-group-item");

    const userNameElement = document.createElement("h5");
    userNameElement.classList.add("mb-2", "mt-1");
    userNameElement.textContent = username;

    const commentTextElement = document.createElement("p");
    commentTextElement.classList.add("mb-2");
    commentTextElement.textContent = commentText;

    const timestampElement = document.createElement("small");
    timestampElement.classList.add("text-muted");
    const now = new Date();
    timestampElement.textContent = `Posted on: ${now.toLocaleDateString()}`;

    newComment.appendChild(userNameElement);
    newComment.appendChild(commentTextElement);
    newComment.appendChild(timestampElement);

    document.getElementById("commentsSection").appendChild(newComment);

    document.getElementById("exampleInputEmail1").value = "";
    document.getElementById("exampleComment").value = "";
}

const redirect = (search, type) => {
    sessionStorage.setItem("query", search);
    sessionStorage.setItem("type", type);
    window.location.href = "browse.html";
}

let query;
let search = document.querySelector("#search");
let input = document.querySelector('input');
search.addEventListener('click', (e) => {
    e.preventDefault();
    query = input.value;
    if (query !== "") {
        redirect(query, "searchBox");
    }
    else {
        alert("Enter a keyword to search");
    }
});