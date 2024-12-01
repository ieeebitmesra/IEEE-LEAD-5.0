// import React from 'react'

// const Card = ({data}) => {
//      console.log(data);

//      const readMore = (url) =>{
//         window.open(url)
//      }
     
//   return (
//     <div className='cardContainer'>
//     {data.map((curItem,index)=>{
//         if(!curItem.urlToImage){
//             return null
//         }else{
//             return(
//             <div className='card'>
//                 <img src={curItem.urlToImage}/>
//                 <div className='content'>
//                     <a className='title' onClick={()=>window.open(curItem.url)}>{curItem.title}</a>
//                     <p>{curItem.description}</p>
//                     <button onClick={()=>window.open(curItem.url)}>Read More</button>
//                 </div>
//             </div>
//         )
//         }
         
//     })}
//     </div>
//   )
// }

// export default Card


import React from 'react';

const Card = ({ data }) => {
    // Check if data exists and has articles
    if (!data || data.length === 0) {
        return <div>No news articles available. Try a different search.</div>;
    }

    return (
        <div className="cardContainer">
            {data.map((item, index) => (
                <div className="card" key={item.url || index}>
                    {/* Render Image */}
                    {item.image && (
                        <img
                            src={item.image}
                            alt={item.title || "News Image"}
                            className="newsImage"
                        />
                    )}
                    {/* Render Title */}
                    <h3 className="newsTitle">
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.title}
                        </a>
                    </h3>
                    {/* Render Description */}
                    <p className="newsDescription">{item.description}</p>
                    {/* Read More Button */}
                    <button className="readMoreBtn">
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Read More
                        </a>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Card;
