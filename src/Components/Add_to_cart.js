import axios from "axios";
import React, { useEffect, useState } from "react";


const Add_to_cart = () => {
  const [cart, setcart] = useState([]);
  let product_id = localStorage.getItem("pro_id");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/userSelectProduct/${product_id}`)
      .then((response) => {
        console.log(response);
        setcart(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      alert(product_id);
  }, []);
  return (
    <>
      <div className="">
        <div className="container">
          <div className="mb-5">
            <h1 className="text-center text-bold">Your Order List</h1>
          </div>
        </div>
        <div className="container">
          <div className="row m-0 g-5 gallary">
            {cart.map((item, index) => {
              return (
                <div className="col-3 text-center cad p-0 containt">
                  <div className="single-product">
                    <img src={item.product_image}></img>
                  </div>
                  <div>
                    <h6>{item.product_name}</h6>
                    <p>{item.product_description}</p>
                    <h6>RS. {item.product_price}</h6>
                    <div className="order">
                      <button className="butn-l me-2">View</button>
                      <button
                        className="butn-r"
                      >
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Add_to_cart;
