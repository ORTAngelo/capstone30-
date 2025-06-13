import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselPage from "../Components/CarouselPage";
import ItemCard from "../Components/ItemCard";
import data from '../Data/data';
import { Link } from 'react-router-dom';
import img2 from '../Assets/images.jpeg';
import img3 from '../Assets/s-l1200.jpg';
import img4 from '../Assets/rg362-hi-lo-twin-shocks.jpg';
import img5 from '../Assets/SCT-001.jpg';
import img6 from '../Assets/108mm_calipers_black_front_back.jpg';
import img7 from '../Assets/Keri_45_double.webp';

const Home = ({ favorites, handleFavoriteToggle }) => {

  const [selectedCategory] = useState('All');
  // const categories = ['All', ...new Set(data.productData.map(item => item.category))];
  const categories = [
      // Default category for all products
    { name: 'Performance', img: img3 },
    { name: 'Oil,Coolants and Fluids', img: img2 },
    { name: 'Suspension', img: img4 },
    { name: 'Wheel & Tires', img: img5 },
    { name: 'Brakes', img: img6 },
    { name: 'Lights', img: img7 },
  ];
  const filteredItems = selectedCategory === 'All' 
  ? data.productData 
  : data.productData.filter(item => item.category === selectedCategory);

  const limitedItems = data.productData.slice(0, 6);

  return (
    <div>
        <CarouselPage/>

        {/* Category Filter Section with Images */}
        <div className="category-filter py-3">
          <h4>Select Category:</h4>
          <div className="d-flex flex-wrap justify-content-between">
            {categories.map((category, index) => (
              <div
                key={index}
                className="category-card m-2"
                style={{
                  cursor: 'pointer',
                  textAlign: 'center',
                  width: '150px',
                }}
              >
                <Link to={`/category/${category.name}`} style={{ textDecoration: 'none' }}>
                <img 
                  src={category.img} 
                  alt={category.name} 
                  className="img-fluid rounded"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
                </Link>
                <div>{category.name}</div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-start py-3">Best Selling Item</h2>
        <section className='py-4 container'>
        <div className='row justify-content-center'>
        {limitedItems.map((item, index) => {
          const isFavorited = favorites.some((favItem) => favItem.id === item.id);
                return(
                  <div className="col-12 col-sm-6 col-md-2" key={index}>
                    <ItemCard 
                      img={item.img} 
                      title={item.title} 
                      price={item.price} 
                      item={item} 
                      key={index}
                       onFavoriteToggle={handleFavoriteToggle}
                  isFavorited={isFavorited}
                    />
                     </div>
                )
            })}
        </div>
     </section>
    </div>
  );
};

export default Home;
