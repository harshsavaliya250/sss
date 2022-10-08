import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";

const Product = () => {
  const [product, setproduct] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5000/getallproduct")
      .then((response) => {
        console.log(response);
        setproduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addtocart = (id) => {
    navigate("/addtocart");
    localStorage.setItem("pro_id", id);
  };

  return (
    <>
      <div className="spacer">
        <div className="container">
          <div className="mb-5">
            <h1 className="text-center text-bold">Shop By Category</h1>
          </div>
          <div className="text-center">
            <button className="me-4 butn">Featured items</button>
            <button className="me-4 butn">Best Seller</button>
            <button className="butn">Top Rated</button>
          </div>
        </div>
        <div className="container">
          <div className="row m-0 g-5 gallary">
            {product.map((item, index) => {
              return (
                <div className="col-3 text-center cad p-0 containt" key={index}>
                  <div className="single-product">
                    <img src={item.product_image}></img>
                  </div>
                  <div>
                    <h4 className="text-truncate p-1">{item.product_name}</h4>
                    <h6 className="fontcolor fs-5">Rs. {item.product_price}</h6>
                    <p className="p-2 scroll_controll text-start">
                      <Scrollbars>{item.product_description}</Scrollbars>
                    </p>
                    <div className="order">
                      <button className="butn-l me-2">View</button>
                      <button
                        className="butn-r"
                        onClick={() => {
                          addtocart(item._id);
                        }}
                      >
                        Add to cart
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

export default Product;
