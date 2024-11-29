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