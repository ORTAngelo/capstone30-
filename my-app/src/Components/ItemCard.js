import React from "react";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function ItemCard(props) {
  
   // Handle the click event for favoriting/unfavoriting an item
   const handleFavoriteClick = (event) => {
    event.stopPropagation();
    const newFavoriteStatus = !props.isFavorited;
    props.onFavoriteToggle(props.item, newFavoriteStatus); // Pass the item and its new favorite status to the parent
  };

  return (
    <>
      <style>
        {`
          @media (min-width: 992px) {
            .col-lg-3 {
              flex: 0 0 auto;
              width: 100%;
            }
          }
        `}
      </style>

      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        <div class="card p-0 overflow-hidden h-100 shadow">
          <FontAwesomeIcon
            icon={props.isFavorited ? faHeart : faHeartBroken}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              fontSize: "1.5rem",
              color: props.isFavorited ? "red" : "gray",
              cursor: "pointer",
            }}
            onClick={handleFavoriteClick} // Add click handler
          />
          {/* Clickable Area - Wrapped with Link */}
          <Link
            to={`/product/${props.item.id}`}
            style={{ textDecoration: "none",  color: "black" }}
          >
            <img src={props.img} class="card-img-top img-fluid" alt="text" />
            <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              <h5 class="card-title"> ${props.price}</h5>
              <p class="card-text">{props.desc}</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
