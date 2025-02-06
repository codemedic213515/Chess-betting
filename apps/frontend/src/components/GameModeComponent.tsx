import { ReactNode, MouseEventHandler } from 'react';

interface GameModeComponent {
  icon: ReactNode;
  title: string;
  description: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  disabled: boolean;
}

const GameModeComponent = ({ icon, title, description, onClick, disabled }: GameModeComponent) => (
  <div
    onClick={onClick}
    className=" text-center inline-flex items-center justify-center   border-2 px-4 py-2 rounded-lg  ${disabled ? 'bg-red-500' : ''} "
  >
    {icon}

    <div className="">
      <p className="text-xl pt-1 font-bold leading-none">{title}</p>
      {/* <p className="text-s font-semibold pt-2 ">{description}</p>
      {disabled && <p className="text-xs text-amber-500 font-semibold">Coming Soon ...</p>} */}
    </div>
  </div>
);

export default GameModeComponent;
