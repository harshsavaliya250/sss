import React, { useEffect, useState } from "react";
import axios from "axios";
import Header_admin from "./Header_admin";
import Side_menu from "./Side_menu";
import Footer from "./Footer";
import { Navigate } from "react-router-dom";

const Add_Product = () => {
  const [productName, setProductName] = useState("");
  const [productDiscription, setProductDiscription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [To, setTo] = useState("");
  // let userId = localStorage.getItem("userId");
  var productid = localStorage.getItem("productid");

  const addProduct = () => {
    axios
      .post("http://localhost:5000/createproduct", {
        product_name: productName,
        product_description: productDiscription,
        product_price: productPrice,
        product_image: productImage,
      })
      .then((response) => {
        let data = response.data;
        if (data._id != "") {
          console.log(response.data);
          // setProductName("");
          // setProductDiscription("");
          // setProductPrice("");
          // setProductImage("");
          setTo(true);
          // alert(data._id)
        }
      })
      .catch((error) => {
        console.log(error);
      });
    if (productImage == "" || productName == "" || productPrice == "") {
      alert("Fill total Fields To Add Product");
    }
    setProductName("");
    setProductDiscription("");
    setProductPrice("");
    setProductImage("");
    // localStorage.removeItem("productid");
  };

  useEffect(() => {
    axios
      .post(`http://localhost:5000/updateproduct/${productid}`)
      .then((response) => {
        console.log(response.data);
        var data = response.data;
        setProductImage(data.product_image);
        setProductName(data.product_name);
        setProductPrice(data.product_price);
        setProductDiscription(data.product_description);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const reset = () => {
    axios
      .post(`http://localhost:5000/updateproduct/${productid}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setProductName("");
    setProductDiscription("");
    setProductPrice("");
    setProductImage("");
    localStorage.removeItem("productid");
  };
  const update = () => {
    axios
      .post(`http://localhost:5000/updateproduct/${productid}`, {
        product_name: productName,
        product_description: productDiscription,
        product_price: productPrice,
        product_image: productImage,
      })
      .then((response) => {
        console.log(response);
        setTo(true);
        setProductName("");
        setProductDiscription("");
        setProductPrice("");
        setProductImage("");
        localStorage.removeItem("productid");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (To) {
    return <Navigate to="/viewproduct" />;
  } else {
    return (
      <>
        <div>
          <div className="wrapper bg-white">
            <Header_admin />
            <Side_menu />
            <div className="content-wrapper">
              <section className="content-header">
                <div className="container-fluid">
                  <div className="row mb-2">
                    <div className="col-sm-6 m-auto text-center">
                      <h1>Add Product</h1>
                    </div>
                  </div>
                </div>
              </section>
              <section className="content">
                <div className="row">
                  <div className="col-md-6 m-auto">
                    <div className="card card-primary">
                      <div className="card-header">
                        <h3 className="card-title">General</h3>
                        <div className="card-tools">
                          <button
                            type="button"
                            className="btn btn-tool"
                            data-card-widget="collapse"
                            title="Collapse"
                          >
                            <i className="fas fa-minus" />
                          </button>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="form-group">
                          <label htmlFor="inputimage">Product URL</label>
                          <input
                            type="text"
                            id="inputimage"
                            className="form-control"
                            value={productImage}
                            onChange={(e) => {
                              setProductImage(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputName">Product Name</label>
                          <input
                            type="text"
                            id="inputName"
                            className="form-control"
                            value={productName}
                            onChange={(e) => {
                              setProductName(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputDescription">
                            Product Description
                          </label>
                          <textarea
                            id="inputDescription"
                            className="form-control"
                            rows={4}
                            value={productDiscription}
                            onChange={(e) => {
                              setProductDiscription(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputStatus">Product Price</label>
                          <input
                            type="number"
                            id="inputStatus"
                            className="form-control"
                            value={productPrice}
                            onChange={(e) => {
                              setProductPrice(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {productid === null ? (
                    <div className="col-6 col-md-6 m-auto text-end">
                      <a className="btn btn-success mb-3" onClick={addProduct}>
                        Add Product
                      </a>
                    </div>
                  ) : (
                    <div className="col-6 col-md-6 m-auto text-end">
                      <a className="btn btn-success mb-3" onClick={update}>
                        Update Product
                      </a>
                    </div>
                  )}
                  <div className="col-6 col-md-6 m-auto text-start">
                    <a
                      className="btn btn-success mb-3 bg-danger"
                      onClick={reset}
                    >
                      Reset Product
                    </a>
                  </div>
                </div>
              </section>
            </div>
            <Footer />
          </div>
        </div>
      </>
    );
  }
};

export default Add_Product;
