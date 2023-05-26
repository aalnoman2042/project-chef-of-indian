import React from 'react';
import "./Foodie.css"
const Foodie = () => {
    return (
        <div>
            

    <h1  className='text-center text-6xl  text-[#9333EA] font-semibold my-8'>BE Hungry for  Your Healthy Food </h1>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-7 my-5">
    <div>
        <img className="h-auto max-w-full rounded-lg scale-100 hover:scale-125 duration-700" src="https://img.freepik.com/free-photo/grilled-chicken-legs-flaming-grill-with-grilled-vegetables-with-tomatoes-potatoes-pepper-seeds-salt_1150-37782.jpg?w=900&t=st=1683205328~exp=1683205928~hmac=a00ed575beadadf8c5d6932e1095ddbeaf8b5be691ffeb6c64ecddc830a8919c" alt=""/>
    </div>
    <div className='bg-[#EBE6D6] h-auto max-w-full rounded-lg flex justify-items-center  items-center'>
    <h1 className=' font-semibold text-3xl p-7 w-96 mx-auto scale-100 hover:scale-125 duration-700' >"Let food be thy medicine and medicine be thy food." - <span className='text-gray-700'>Hippocrates</span></h1>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg scale-100 hover:scale-125 duration-700" src="https://img.freepik.com/free-photo/delicious-indian-food-tray_23-2148723505.jpg?w=740&t=st=1683202266~exp=1683202866~hmac=29234be077affe31667ccc505c9fc2de76843caaf7c4a81cfae5b8eef08eaece" alt=""/>
    </div>
    <div className='bg-[#EBE6D6] h-auto max-w-full rounded-lg flex justify-items-center  items-center'>
    <h1 className=' font-semibold text-3xl p-7 w-96 mx-auto scale-100 hover:scale-125 duration-700'>"The food you eat can be either the safest and most powerful form of medicine or the slowest form of poison." - <span className='text-gray-700'>Ann Wigmore </span></h1>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg scale-100 hover:scale-125 duration-700" src="https://img.freepik.com/free-photo/side-view-baked-sea-bass-served-with-fresh-herbs-sauces-table_140725-11835.jpg?w=740&t=st=1683202370~exp=1683202970~hmac=f61d5d746ef439c325c6fa2e90f319c98a872436115acbe639053317426986d6" alt=""/>
    </div>
    <div className='bg-[#EBE6D6] h-auto max-w-full rounded-lg flex justify-items-center  items-center'>
    <h1 className=' font-semibold text-3xl p-7 w-96 mx-auto scale-100 hover:scale-125 duration-700'>"Take care of your body. It's the only place you have to live." - <span className='text-gray-700'>Jim Rohn </span></h1>
    </div>
    
</div>

        </div>
    );
};

export default Foodie;