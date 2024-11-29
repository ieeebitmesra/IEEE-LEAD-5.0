document.getElementById('blogForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const title = document.getElementById('blogTitle').value;
    const content = document.getElementById('blogContent').value;
    const imageInput = document.getElementById('blogImage');
    const imageFile = imageInput.files[0];
    const blogPost = document.createElement('div');
    blogPost.classList.add('blog-post', 'col-md-4');

    const reader = new FileReader();
    reader.onload = function (e) {
        blogPost.innerHTML = `
            <div class="card">
                <img src="${e.target.result}" class="card-img-top" alt="Blog image">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${content}</p>
                    <small class="text-muted">Posted on: ${new Date().toLocaleDateString()}</small>
                </div>
            </div>
        `;

        document.getElementById('blogPosts').appendChild(blogPost);
        document.getElementById('blogForm').reset();
    };

    if (imageFile) {
        reader.readAsDataURL(imageFile);
    }
});

const redirect = (search,type) => {
    sessionStorage.setItem("query", search);
    sessionStorage.setItem("type", type);
    window.location.href = "browse.html";
};

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