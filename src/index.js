import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Admin_Panel from './Components/Admin_Panel';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import GeneralElem from './Components/GeneralEelm';
import DataTable from './Components/DataTable';
import Add_Product from './Components/Add _Product';
import App from './App';
import View_Product from './Components/View_Product';
import Add_to_cart from './Components/Add_to_cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/adminpanel' element={<Admin_Panel/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<App/>}/>
        <Route path='/generalelement' element={<GeneralElem/>}/>
        <Route path='/datatable' element={<DataTable/>}/>
        <Route path='/addproduct' element={<Add_Product/>}/>
        <Route path='/viewproduct' element={<View_Product/>}/>
        <Route path='/addtocart' element={<Add_to_cart/>}/>
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
