import React, { useEffect, useState } from "react";
import "../Components/Viewproduct.css";
import Header_admin from "../Components/Header_admin";
import Side_menu from "./Side_menu";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";

const View_Product = () => {
  const [product, setProduct] = useState([]);
  const [first, setfirst] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/getallproduct")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [product]);

  const edit = (id) => {
    setfirst(true);
    localStorage.setItem("productid", id);
  };

  const del = (id) => {
    axios
      .delete(`http://localhost:5000/deleteproduct/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    //     alert(id)
    alert("You Confirm Delete Product");
  };
  if (first) {
    return <Navigate to="/addproduct" />;
  } else {
    return (
      <>
        <div className="wrapper">
          <Header_admin />
          <Side_menu />
          <div className="content-wrapper">
            <div className="container">
              <div className="row g-4 m-0">
                {product.map((item, index) => {
                  return (
                    <>
                      <div
                        className="col-4 col-sm-8 col-md-6 col-lg-4"
                        key={index}
                      >
                        <div className="card">
                          <img
                            src={item.product_image}
                            className="card_img"
                          ></img>
                          <div className="card-body">
                            <h2 className="card-title ms-2">{item.product_name}</h2>
                            <p className="p-2 scroll_controll text-start">
                              <Scrollbars>
                                {item.product_description}
                              </Scrollbars>
                            </p>
                            <div className="options d-flex flex-fill">
                              <select className="custom-select mr-1">
                                <option selected>Color</option>
                                <option value={1}>Green</option>
                                <option value={2}>Blue</option>
                                <option value={3}>Red</option>
                              </select>
                              <select className="custom-select ml-1">
                                <option selected>Size</option>
                                <option value={1}>L</option>
                                <option value={2}>M</option>
                                <option value={3}>XL</option>
                              </select>
                            </div>
                            <div className="buy d-flex justify-content-between align-items-center">
                              <div className="price text-success">
                                <h5 className="mt-4">
                                  Rs.{item.product_price}
                                </h5>
                              </div>
                              <div className="d-flex">
                                <div className="me-3">
                                  <button
                                    className="btn btn-success mt-3 edit_btn"
                                    onClick={() => {
                                      edit(item._id);
                                    }}
                                  >
                                    Edit
                                  </button>
                                </div>
                                <div>
                                  <button
                                    className="btn btn-danger mt-3 del_btn"
                                    onClick={() => {
                                      del(item._id);
                                    }}
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default View_Product;
