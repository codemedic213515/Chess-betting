import React from 'react';

const DesktopNav = () => {
  return (
    <nav className="pt-4 w-full z-50">
      <div className=" md:mx-32 flex justify-between items-center">
        <div className="flex items-center space-x-2 gap-2 ">
          <img src="/wn.png" alt="" className=" w-14" />
          <span className="text-4xl font-pricedown tracking-widest  ">CHESS DAWGS</span>
        </div>
        <div className="hidden md:flex space-x-8  text-lg font-semibold">
          <a href="#features" className="hover:text-amber-300 transition ">
            FEATURES
          </a>
          <a href="#gameplay" className="hover:text-amber-300 transition">
            GAMEPLAY
          </a>
          <a href="#rewards" className="hover:text-amber-300 transition">
            REWARDS
          </a>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
