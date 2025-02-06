import whitePawn from '../../public/wp.png';
import Whitenight from '../../public/wn.png';
import whiteBishop from '../../public/wb.png';
import Feature from './Feature';
const features = [
  {
    title: 'GAMING NFTs',
    description:
      'Deputy Dawgs ($DDawgs) is revolutionizing its gaming ecosystem with a unique blend of traditional and innovative NFTs, reshaping the player experience in Web3 gaming.',
    icon: whitePawn,
  },
  {
    title: 'Play & Earn',
    description:
      " By integrating NFTs for authentication and a Play-to-Burn mechanism for rewards, Chess Dawgs offers a unique and rewarding experience for chess enthusiasts. Whether you're here to compete, earn, or simply enjoy the game, Chess Dawgs provides the platform to elevate your chess journey.",
    icon: Whitenight,
  },
  {
    title: 'Fully decentralized',
    description:
      'Deputy Dawgs stands as a beacon of innovation in Web3 gaming, where AI-enhanced NFTs, advanced security measures, and a player-centric approach redefine what it means to game in the blockchain era.',
    icon: whiteBishop,
  },
];

const Features = () => {
  return (
    <div className=" bg-black text-white py-[72px] sm:py-24">
      <div className=" container">
        <h2 className=" text-5xl sm:text-6xl text-center tracking-tight font-bold">Everything you need</h2>
        <div className=" max-w-xl mx-auto">
          <p className=" text-center mt-5 text-xl text-white/70">
            Deputy Dawgs ($DDawgs) emerges as a vanguard in the Web3 gaming sphere, operating on the Ethereum network
            (ERC20) and pushing the boundaries of NFT gaming, AI integration, and enhanced security.
          </p>
        </div>
        <div className=" mt-16 flex flex-col sm:flex-row gap-4">
          {features.map((feature) => (
            <Feature key={feature.title} title={feature.title} description={feature.description} icon={feature.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
