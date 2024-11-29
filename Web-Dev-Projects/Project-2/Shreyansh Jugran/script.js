let currentQuery;
let currentPage = 1;
let query;
let maxPage = 0;
let total = 0;
const fetchNews = async (page, q) => {
    var url = `https://newsapi.org/v2/everything?q=${q}&page=${page}&pageSize=18&language=en&apiKey=ebdb6b2adf024aae8e9cbae76759d2dd`;

    var req = new Request(url);
    let response;
    try {
        let a = await fetch(req)
        response = await a.json();
        console.log((response));
    }
    catch (err) {
        console.log("Error fetching news ", err);
    }
    console.log(response);
    currentQuery = q;
    let str = "";
    document.querySelector("#resultCount").innerHTML = response.totalResults;
    total = parseInt(response.totalResults);
    for (let item of response.articles) {
        if (item.urlToImage !== null && item.title !== "[Removed]") {
            str = str + `<div class="card my-4 mx-2" style="width: 20rem;">
            <img height="185" class="card-img-top" src="${item.urlToImage}" alt="Card image cap">
            <div class="card-body d-flex  flex-column">
              <h6 class="card-title libre-baskerville-bold mb-4">${item.title.toUpperCase()}</h6>
              <p class="card-text">${item.description.slice(0, 100)}...</p>
              
            </div>
            <div class="mt-auto my-3 mx-auto" style="width:90%;"><button type="button" class="btn btn-read-more btn-primary mt-auto btn-block w-100 " onclick="loadArticle('${item.urlToImage}', '${item.title.replace(/'/g, "\\'")}', '${item.description.replace(/'/g, "\\'")}', '${item.url}')">Read More</button></div>
          </div>`

        }
    }
    document.querySelector(".content").innerHTML = str;
    window.scrollTo(0, 0);
}

const loadArticle = (imageURL, title, description, URL) => {
    localStorage.setItem("articleImageURL", imageURL);
    localStorage.setItem("articleTitle", title);
    localStorage.setItem("articleDescription", description);
    localStorage.setItem("articleURL", URL);
    window.location.href = "article.html";
};

const checkReferrer = () => {
    const referrer = document.referrer;

    if (referrer === "") {
        currentQuery = "international";
        returnToBrowse();
        fetchNews(1, currentQuery);
    } else {
        const searchTerm = sessionStorage.getItem("query");
        const type = sessionStorage.getItem("type");

        if (searchTerm) {
            currentQuery = searchTerm;

            if (type === "country") {
                let typeValue = searchTerm.toUpperCase();
                changeCountry(typeValue);
            }
            else if (type === "category") {
                let typeValue = searchTerm.toUpperCase();
                changeCategory(typeValue);
            }
            else if (type === "searchBox") {
                let typeValue = searchTerm;
                changeBox(typeValue);
            }
            else if (type === "normal") {
                returnToBrowse();
            }
        } else {
            currentQuery = "international";
            returnToBrowse();
        }

        fetchNews(1, currentQuery);
    }
};


const returnToBrowse = () => {
    document.querySelector("h1").innerHTML = `BROWSE LATEST HEADLINES`;
}

const changeCountry = (countryName) => {
    document.querySelector("h1").innerHTML = `BROWSE LATEST HEADLINES OF ${countryName}`;
}

const changeCategory = (categoryName) => {
    document.querySelector("h1").innerHTML = `BROWSE LATEST ${categoryName} HEADLINES`;
}

const changeBox = (searchValue) => {
    document.querySelector("h1").innerHTML = `RESULTS FOR "${searchValue}"`;
}

let search = document.querySelector("#search");
let input = document.querySelector('input');
search.addEventListener('click', (e) => {
    e.preventDefault();
    query = input.value;
    currentQuery = query;
    if (query !== "") {
        currentPage = 1
        fetchNews(currentPage, query);
        document.querySelector("h1").innerHTML = `RESULTS FOR "${input.value}"`;
        input.value = "";

    }
    else {
        alert("Enter a keyword to search");
    }
})
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
prev.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage > 1) {
        currentPage = currentPage - 1;
        fetchNews(currentPage, currentQuery);
    }
    else {
        alert("This is the first page!");
    }
});
next.addEventListener('click', (e) => {
    let maxPage = Math.ceil(total / 18);
    if (currentPage < maxPage) {
        e.preventDefault();
        currentPage = currentPage + 1;
        fetchNews(currentPage, currentQuery);
    }
    else {
        alert("This is the last page!");
    }
});

checkReferrer();





// const openArticle = (imageURL, title, description, URL) => {
//     const newWindow = window.open("", "_blank");
//     newWindow.document.write(`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
// </head>
// <body class="d-flex flex-column min-vh-100">

//     <nav class="navbar bg-body-secondary">
//         <div class="container">
//             <a class="navbar-brand mx-auto" href="#">
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqf-Kqyd8dSvhhufDguf9CsTZStGVsoSQ5dg&s" alt="Bootstrap" width="30" height="24">
//             </a>
//         </div>
//     </nav>

//     <main class="flex-grow-1">
//         <div class="card mx-auto my-5" style="width: 18rem;">
//             <img src="${imageURL}" class="card-img-top" alt="...">
//             <div class="card-body text-center">
//                 <h5 class="card-title">${title}</h5>
//                 <div class="dropdown-divider"></div>
//                 <p class="card-text">${description}</p>
//                 <a href="${URL}" class="btn btn-primary" target="_blank">Read On Website</a>
//             </div>
//         </div>
//     </main>

//     <!-- Footer -->
//     <footer class="bg-dark text-light pt-4">
//         <div class="container">
//             <div class="row">
//                 <div class="col-md-4">
//                     <h5>About Us</h5>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis.</p>
//                 </div>

//                 <div class="col-md-4">
//                     <h5>Quick Links</h5>
//                     <ul class="list-unstyled">
//                         <li><a href="#" class="text-light">Home</a></li>
//                         <li><a href="#" class="text-light">About</a></li>
//                         <li><a href="#" class="text-light">Services</a></li>
//                         <li><a href="#" class="text-light">Contact</a></li>
//                     </ul>
//                 </div>

//                 <div class="col-md-4">
//                     <h5>Follow Us</h5>
//                     <ul class="list-unstyled d-flex">
//                         <li><a href="#" class="text-light me-3"><i class="fab fa-facebook"></i></a></li>
//                         <li><a href="#" class="text-light me-3"><i class="fab fa-twitter"></i></a></li>
//                         <li><a href="#" class="text-light me-3"><i class="fab fa-instagram"></i></a></li>
//                         <li><a href="#" class="text-light me-3"><i class="fab fa-linkedin"></i></a></li>
//                     </ul>
//                 </div>
//             </div>
//         </div>

//         <div class="text-center py-3">
//             <small>&copy; 2024 Your Company Name. All rights reserved.</small>
//         </div>
//     </footer>

//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
// </body>
// </html>
// `);
//     newWindow.document.title = "Hello World Page";
// }