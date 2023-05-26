import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/footer';
import Chefs from '../components/chefs/Chefs';
import Home from '../components/home/Home';
import { ToastContainer } from 'react-toastify';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
           <Footer></Footer>
           <ToastContainer />
        </div>
    );
};

export default Main;