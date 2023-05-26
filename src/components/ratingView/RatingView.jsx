import React from "react";

const RatingView = () => {
  return (
    <div>
      <div className="sm:flex-row md:flex justify-evenly gap-14 bg-[#EBE6D6] m-7 p-24">
        <div className="">
          <h1 className="text-6xl font-bold text-[#9333EA]">140k+</h1>
          <p className="mt-2 font-semibold">Liked on Receipes</p>
        </div>
        <div>
          <h1 className="text-6xl font-bold text-[#9333EA]">250+</h1>
          <p className="mt-2 font-semibold">Our Registered Member</p>
        </div>
        <div>
          <h1 className="text-6xl font-bold text-[#9333EA]">100+</h1>
          <p className="mt-2 font-semibold">Chef Mentor</p>
        </div>
        <div>
          <h1 className="text-6xl font-bold text-[#9333EA]">230+</h1>
          <p className="mt-2 font-semibold">Different type of Recipes</p>
        </div>
      </div>
    </div>
  );
};

export default RatingView;
