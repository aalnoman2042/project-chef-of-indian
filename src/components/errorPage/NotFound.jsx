import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
            <img  src="../../../src/assets/notFound (2).jpg" alt="" />
            </div>
           <div className='flex justify-center items-center'>
           <button className=" px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"><Link to="/"> Go To Homepage</Link></button>
           </div>
        </div>
    );
};

export default NotFound;