const Banner = () => {
  return (
    <div className="py-3 text-center bg-black border-b border-[#b7722d]">
      <div className="container">
        <p className=" font-medium text-white">
          <span className=" flex items-center justify-center gap-2">
            Chess Dawgs is under development <div className=" w-2 h-2 rounded-full animate-ping bg-green-500"></div>{' '}
          </span>
          <a href="https://x.com/chessdawgs" target="_blank" className="  underline underline-offset-4 font-medium ">
            Follow us on X for updates.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Banner;
