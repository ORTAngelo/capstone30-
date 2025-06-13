// import React, {useState} from 'react'
// import ItemCard from '../Components/ItemCard'
// import data from '../Data/data';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Products() {
//   const [favorites, setFavorites] = useState([]);

//   const handleFavoriteToggle = (item, isFavorited) => {
//     if (isFavorited) {
//       setFavorites((prevFavorites) => [...prevFavorites, item]);
//     } else {
//       setFavorites((prevFavorites) =>
//         prevFavorites.filter((favItem) => favItem.id !== item.id)
//       );
//     }
//   };

//   return (
//     <>
//      <h1 className='text-center mt-3'>All Item</h1>
//      <section className='py-4 container'>
//         <div className='row justify-content-center'>
//             {data.productData.map((item, index)=>{
//                const isFavorited = favorites.some((favItem) => favItem.id === item.id);
//                 return(
//                   <div className="col-12 col-sm-6 col-md-3" key={index}>
//                     <ItemCard 
//                       img={item.img} 
//                       title={item.title} 
//                       price={item.price} 
//                       item={item} 
//                       key={index}
//                       onFavoriteToggle={handleFavoriteToggle} // Pass function to toggle favorites
//                       isFavorited={isFavorited}
//                     />
//                      </div>
//                 )
//             })}
//         </div>
//      </section>
//     </>
//   );
// };

// export default Products;

import React from "react";
import ItemCard from "../Components/ItemCard";
import data from "../Data/data";
import "bootstrap/dist/css/bootstrap.min.css";

function Products({ handleFavoriteToggle, favorites }) {
  return (
    <>
      <h1 className="text-center mt-3">All Items</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.productData.map((item, index) => {
            const isFavorited = favorites.some((favItem) => favItem.id === item.id);
            return (
              <div className="col-12 col-sm-6 col-md-3" key={index}>
                <ItemCard
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  item={item}
                  onFavoriteToggle={handleFavoriteToggle}
                  isFavorited={isFavorited}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Products;
