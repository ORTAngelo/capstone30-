// src/Pages/Categories.js

import React from "react";
import { Link } from "react-router-dom";
import img2 from '../Assets/images.jpeg';
import img3 from '../Assets/s-l1200.jpg';
import img4 from '../Assets/rg362-hi-lo-twin-shocks.jpg';
import img5 from '../Assets/SCT-001.jpg';
import img6 from '../Assets/108mm_calipers_black_front_back.jpg';
import img7 from '../Assets/Keri_45_double.webp';

const Categories = () => {
  const categories = [
    { name: 'Performance', img: img3 },
    { name: 'Oil,Coolants and Fluids', img: img2 },
    { name: 'Suspension', img: img4 },
    { name: 'Wheel & Tires', img: img5 },
    { name: 'Brakes', img: img6 },
    { name: 'Lights', img: img7 },
  ];

  return (
    <div>
      <h2 className="text-start py-3">Select a Category</h2>
      <div className="category-filter py-3">
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
    </div>
  );
};

export default Categories;
