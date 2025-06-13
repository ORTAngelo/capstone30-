import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../Data/data'; // Assuming you have this data
import ItemCard from '../Components/ItemCard';

const CategoryPage = () => {
  const { categoryName } = useParams(); // Get category name from the URL
  
  const filteredItems = categoryName === 'All'
    ? data.productData
    : data.productData.filter(item => item.category === categoryName);

  return (
    <div>
      <h2>{categoryName} Products</h2>
      <div className="row">
        {filteredItems.map(item => (
          <div className="col-12 col-sm-6 col-md-3" key={item.id}>
            <ItemCard 
              img={item.img} 
              title={item.title} 
              price={item.price} 
              item={item} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
