import React from 'react';
import Pdf from '../pdf/Pdf';


const Blog = () => {
    return (
        <div className='text-center'>
            <p> hh<Pdf></Pdf></p>
            <h1 className='text-3xl font-semibold text-purple-400 my-7'>Tell us the differences between uncontrolled and controlled components?</h1>
            <p className='text-xl'>Uncontrolled components use the DOM to manage state, while controlled components use the component's state to manage state.</p>
            <h1 className='text-3xl font-semibold text-purple-400'>How to validate React props using PropTypes?</h1>
            <p className='text-xl'>The prop should be an array, data type,Boolean, number,string,function.</p>
            <h1 className='text-3xl font-semibold text-purple-400 my-7'>Tell us the difference between nodejs and express js.</h1>
            <p className='text-xl' >node js is a platform built on Chrome's JavaScript runtime for easily building fast applications,Express.js is a framework built on top of Node.js.</p>
            <h1 className='text-3xl font-semibold text-purple-400 my-7' >What is a custom hook, and why will you create a custom hook?</h1>
            <p className='text-xl'>custom hook is for optimise code and save times,when a code repeat many times then we make a custom hook for it and use it whenever we want</p>
        </div>
    );
};

export default Blog;