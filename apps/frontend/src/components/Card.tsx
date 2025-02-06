import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

import GameModeComponent from './GameModeComponent';
import { cn } from '@/lib/utils';

export function PlayCard({ className }: { className?: string }) {
  const gameModeData = [
    {
      icon: (
        <img
          src="https://www.chess.com/bundles/web/images/color-icons/playwhite.cea685ba.svg"
          className="inline-block mt-1 h-[4.5rem] w-[4.5rem]"
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
          className="inline-block mt-1 h-[4.5rem] w-[4.5rem]"
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

  const navigate = useNavigate();
  return (
    <Card className={cn('bg-transparent border-none text-white', className)}>
      <div className="flex flex-col gap-5 text-lg px-8 md:p-0 text-center md:text-start">
        <p className="text-amber-500 font-bold text-xl">Play and earn</p>
        <h1 className=" text-3xl md:lg:text-6xl font-extrabold">
          CHESS IS NOW <span className=" text-amber-500">CRYPTO</span>{' '}
        </h1>
        <p className=" font-semibold text-amber-100">
          We combined classic chess with the modern world of cryptocurrencies to create chess crypto game and allow
          everyone to monetize their intellectual abilities.
        </p>
      </div>
      <div className=" flex flex-col justify-center items-center mt-20">
        <p className=" text-xl font-bold mb-10">Play Now On</p>

        <CardContent className="grid md:grid-cols-2 gap-2 cursor-pointer mt-1 ">
          {gameModeData.map((data) => {
            return <GameModeComponent {...data} key={data.title} />;
          })}
        </CardContent>
      </div>
    </Card>
  );
}
