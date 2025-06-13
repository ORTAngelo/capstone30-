import React from 'react';
import ItemCard from '../Components/ItemCard'; // Assuming ItemCard is reusable
import 'bootstrap/dist/css/bootstrap.min.css';

function Favorite({ favorites, handleFavoriteToggle }) {
  return (
    <>
      <h1 className="text-center mt-3">Your Favorite Items</h1>
      {favorites.length === 0 ? (
        <p className="text-center">You have no favorite items yet.</p>
      ) : (
        <section className="py-4 container">
          <div className="row justify-content-center">
            {favorites.map((item, index) => (
              <div className="col-12 col-sm-6 col-md-3" key={index}>
                <ItemCard
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  item={item}
                  isFavorited={true} // Always marked as favorited here
                  onFavoriteToggle={handleFavoriteToggle} // Allow toggling on this page too
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default Favorite;
