import { CardContent } from './ui/card';
import GameModeComponent from './GameModeComponent';
import { useNavigate } from 'react-router-dom';
import InteractiveGrid from './interactive-grid';

export function HeroSection() {
  const navigate = useNavigate();

  const gameModeData = [
    {
      icon: (
        <img
          src="https://www.chess.com/bundles/web/images/color-icons/playwhite.cea685ba.svg"
          className="inline-block mt-1 h-[2rem] w-[2rem]"
          alt="online"
        />
      ),
      title: '1 vs 1',
      description: 'Play with someone at your level',
      onClick: () => {
        navigate('/login');
      },
      disabled: false,
    },
    {
      icon: (
        <img
          src="https://www.chess.com/bundles/web/images/color-icons/playwhite.cea685ba.svg"
          className="inline-block  h-[2rem] w-[2rem]"
          alt="online"
        />
      ),
      title: 'Tournerment',
      description: '',
      // onClick: () => {
      //   navigate('/login');
      // },
      disabled: true,
    },
  ];
  return (
    <InteractiveGrid className=" text-center  z-10 w-screen  flex flex-col items-center justify-center pt-52 overflow-hidden ">
      <span className="font-pricedown  pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-100 to-gray-300/80 bg-clip-text text-center text-[4rem] lg:text-[10rem] font-semibold  text-transparent">
        <p className=" z-10 text-center  text-3xl font-semiboll tracking-widest capitalize font-comic text-amber-500 ">
          DEPUTY DAWGS
        </p>
        <span className=" text-amber-500 tracking-normal">
          {' '}
          <span className=" text-white"> Decentralize</span> Chess
        </span>
      </span>
      <div className="flex flex-col items-center justify-center gap-8">
        <p className=" z-10 text-center  text-2xl font-semibold text-slate-200 capitalize font-comic ">
          Unleash the power of the blockchain, one move at a time.
        </p>
        <CardContent className="grid md:grid-cols-2 gap-2 cursor-pointer  ">
          {gameModeData.map((data) => {
            return <GameModeComponent {...data} key={data.title} />;
          })}
        </CardContent>
      </div>
    </InteractiveGrid>
  );
}
