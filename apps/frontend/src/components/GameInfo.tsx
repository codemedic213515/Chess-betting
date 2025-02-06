import React from 'react';

const GameInfo = () => {
  return (
    <div className=" border-2 mt-16 border-spacing-2 rounded-lg  md:mx-60   flex flex-col items-center justify-center  md:pt-16 md:px-40 text-center md:text-start ">
      <h1 className=" text-4xl  md:text-6xl font-bold font-pricedown underline">
        G<span className=" text-amber-500">A</span>ME
      </h1>
      <div className=" grid md:grid-cols-2 ">
        <div className=" md:px-32 flex flex-col px-8 justify-center mt-4">
          <h1 className=" text-2xl md:text-3xl mb-4 font-semibold">Crypto chess is here</h1>
          <p className=" md:text-xl ">
            Chess is one of the oldest strategic board games, with a history spanning over 1500 years. In contrast,
            blockchain technology is one of the youngest innovations in the modern era.
            <br />
            <br />
            By merging these two realms, we have introduced ChessNode, a unique chess crypto game that enables players
            to monetize their intelligence by utilizing chess as a cryptocurrency mining tool.
          </p>
          <h1 className=" text-2xl w-36 rounded-md p-2 text-center mt-4 bg-amber-500 font-semibold">More Info</h1>
        </div>

        <div className=" p-8 md:p-32">
          <img src="landing.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
