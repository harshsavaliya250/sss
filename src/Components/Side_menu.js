import React, { useState } from "react";
import { Link } from "react-router-dom";

const Side_menu = () => {
  let name = null;
  name = localStorage.getItem("Username");
  // let userName = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="index3.html" className="brand-link">
        <img
          src="dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              // src=""
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a className="d-block">{name}</a>
          </div>
        </div>
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <a className="nav-link">
                <i className="nav-icon fa-solid fa-pen-to-square mr-2" />
                <p>
                  <Link to="/generalelement">General Element</Link>
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <i className="nav-icon fa-solid fa-table mr-2" />
                <p>
                  <Link to="/datatable">Data Tables</Link>
                </p>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link">
                <i className="nav-icon fa-solid fa-user mr-2" />
                <p>
                  Admin
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a className="nav-link">
                    <i className="fa-solid fa-user-plus nav-icon mr-2" />
                    <a>
                      <p>Add Admin</p>
                    </a>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <i className="fa-solid fa-eye nav-icon mr-2" />
                    <p>View Admin</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <i className="nav-icon fa-solid fa-bag-shopping mr-2" />
                <p>
                Product
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a className="nav-link">
                    <i className="fa-solid fa-user-plus nav-icon mr-2" />
                    <a>
                    <Link to="/addproduct">Add Product</Link>
                    </a>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <i className="fa-solid fa-eye nav-icon mr-2" />
                    <Link to="/viewProduct">View Product</Link>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <i className="nav-icon fa-solid fa-right-from-bracket mr-2" />
                <p>
                  <Link to="/">Logout</Link>
                </p>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Side_menu;
