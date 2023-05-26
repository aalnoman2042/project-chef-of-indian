import React from 'react';
import Chefs from '../chefs/Chefs';
import { FaPhoneAlt } from 'react-icons/fa';
import RatingView from '../ratingView/RatingView';
import Foodie from '../foodie/Foodie';


const Home = () => {
    const imgURL = 'https://res.cloudinary.com/dqesb4lwh/image/upload/v1683186290/chef_hhi43o.png'
    return (
        <div>
            <div className="container items-center justify-center px-4 py-12 mx-auto mt-12  
            lg:flex bg-[#EBE6D6]">
            <div className="mx-auto space-y-6">
                <h1 className="text-6xl font-semibold uppercase"> <span className=""> THE <br/> CHEF</span>
                    <br/><span className='text-[#9333EA]'>
                    OF
                    INDIAN FOOD
                    </span>
                     </h1>
              
                <button
                    className=" py-4 px-8 rounded-lg text-white uppercase font-semibold bg-gradient-to-r flex gap-2 items-center from-[#9333EA] to-[#7d13df]">
                    <FaPhoneAlt></FaPhoneAlt>
                    contact us</button>
            </div>
            <div>
                <img className="w-full mx-auto text-center md:w-full" src={imgURL} alt=""/>
            </div>
        </div>
   

<RatingView></RatingView>
        <Chefs></Chefs>
        <Foodie></Foodie>
       
        </div>
    );
};

export default Home;


