import React from "react";
import recipes from "../recipes"; // Adjust the import path as per your project structure
import Swal from "sweetalert2";

const Menu = () => {
  const handleOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, order it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Ordered!",
          text: "Your order has been placed.",
          icon: "success"
        });
      }
    });
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This week's specials</h2>
        <button className="btnReceive">Order Menu</button>
      </div>
      <div className="cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipe.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipe.title}</h5>
                <p>{recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button className="orderbtn" onClick={() => handleOrder(recipe.id)}>
                Order now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
