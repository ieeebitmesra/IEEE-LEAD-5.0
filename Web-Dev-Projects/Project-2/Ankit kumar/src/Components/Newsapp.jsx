// import React, { useEffect, useState } from 'react'
// import Card from './Cards'

// const Newsapp = () => {
//     const [search, setSearch] = useState("india");
//     const [newsData, setNewsData] = useState(null)
//     //  const API_KEY = "6f31460ba46042acb3a53951ecb5e208";
//      const API_KEY = "e66d6380013d561152540294cc12841a";
//     const getData = async() =>{
//         //  const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
//         // const response = await fetch(`https://google-news-api1.p.rapidapi.com?q=${search}&apiKey=${API_KEY}`);
//         const response = await fetch(`https://gnews.io/api/v4/search?q=${search}&apikey=${API_KEY}`);

//         const jsonData = await response.json();
//         console.log(jsonData.articles);
//         let dt = jsonData.articles.slice(0,20)
//         setNewsData(dt)
        
//     }

//     useEffect(()=>{
//         getData()
//     },[])

//     const handleInput = (e) =>{
//         console.log(e.target.value);
//         setSearch(e.target.value)
        
//     }
//     const userInput = (event) =>{
//         setSearch(event.target.value)
//     }

//   return (
//     <div>
//         <nav>
            
//             <div className='Brand'><h1>News AajTak</h1></div>
//             <div className='searchBar'>
//                 <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
//                 <button onClick={getData}>Search</button>
//             </div>
//             <div className='categoryBtn'>
//             <button onClick={userInput} value="cricket and other games">Sports</button>
//             <button onClick={userInput} value="politics">Politics</button>
//             <button onClick={userInput} value="Latest Release Movies">Entertainment</button>
//             <button onClick={userInput} value="health">Health</button>
            
//             <button onClick={userInput} value="Education">Education</button>
//             <button onClick={userInput} value="IT JOB and Internship">IT</button>
//             <button onClick={userInput} value="Space News">Space</button>
//             <button onClick={userInput} value="Business News">Business</button>
//         </div>
//         </nav>
        
        

//         <div>
//         {newsData?  <Card data={newsData}/> : null}
            
//         </div>
//     </div>
//   )
// }

// export default Newsapp


import React, { useEffect, useState } from 'react';
import Card from './Cards';

const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false); // State for managing hamburger menu
    const API_KEY = "e66d6380013d561152540294cc12841a";

    const getData = async () => {
        try {
            const response = await fetch(`https://gnews.io/api/v4/search?q=${search}&apikey=${API_KEY}`);
            if (!response.ok) {
                const errorDetails = await response.text();
                throw new Error(`Error: ${response.status}, Details: ${errorDetails}`);
            }
            const jsonData = await response.json();
            let dt = jsonData.articles.slice(0, 30);
            setNewsData(dt);
        } catch (error) {
            console.error("Failed to fetch news:", error);
        }
    };

    useEffect(() => {
        getData();
    }, [search]);

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const userInput = (event) => {
        const value = event.target.value;
        setSearch(value);
        getData();
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <nav>
                <div className="Brand">
                    <h1>News AajTak</h1>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    ☰
                </div>
                <div className={`navLinks ${menuOpen ? "active" : ""}`}>
                    <div className="searchBar">
                        <input
                            type="text"
                            placeholder="Search News"
                            value={search}
                            onChange={handleInput}
                        />
                        <button onClick={getData}>Search</button>
                    </div>
                    <div className="categoryBtn">
                        <button onClick={userInput} value="cricket and other games">Sports</button>
                        <button onClick={userInput} value="politics">Politics</button>
                        <button onClick={userInput} value="Latest Release Movies">Entertainment</button>
                        <button onClick={userInput} value="health">Health</button>
                        <button onClick={userInput} value="Education">Education</button>
                        <button onClick={userInput} value="IT JOB and Internship">IT</button>
                        <button onClick={userInput} value="Space News">Space</button>
                        <button onClick={userInput} value="Business News">Business</button>
                    </div>
                </div>
            </nav>
            <div>
                {newsData ? <Card data={newsData} /> : null}
            </div>
        </div>
    );
};

export default Newsapp;
