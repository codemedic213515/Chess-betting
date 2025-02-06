import logoImg from '../public/logo.png';
import burger from '../src/assets/icons/menu.svg';
import { useAppKit } from '@reown/appkit/react';
import { useAccount, useDisconnect } from 'wagmi';

const NavBar = () => {
  const { open, close } = useAppKit();
  const account = useAccount();
  const { disconnect } = useDisconnect();

  // Format address to show first 6 and last 4 characters
  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const handleWalletAction = () => {
    if (account.address) {
      // If already connected, disconnect the wallet
      disconnect();
    } else {
      // If not connected, open the connection modal
      open({ view: 'Connect' });
    }
  };

  return (
    <div className="bg-black">
      <div className="container">
        <div className="py-4 flex justify-between items-center">
          <img src={logoImg} alt="Logo" className="h-12 w-12 sm:h-14 sm:w-14 relative" />
          <div className="border border-white border-opacity-30 h-12 w-12 inline-flex justify-center items-center rounded-lg sm:hidden">
            <img src={burger} alt="Menu" />
          </div>
          <nav className="text-white text-sm gap-6 sm:flex hidden items-center">
            <button
              onClick={handleWalletAction}
              className={`font-semibold px-4 py-2 rounded-lg ${
                account.address ? 'bg-[#b7722d] text-white' : 'bg-white text-black'
              }`}
            >
              {account.address ? formatAddress(account.address) : 'Connect Wallet'}
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
