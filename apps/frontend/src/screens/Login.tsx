import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userAtom } from '@repo/store/userAtom';
import { useAccount, useReadContract } from 'wagmi';
import officer from '../assets/images/dawg2.png';
import authOfficer from '../assets/images/dawg11.png';
import authUser from '../assets/images/user-cowboy 1.png';

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000';

const NFT_CONTRACT_ADDRESS = '0xaf6EE06602879a8beEbA7aB7FF03CFf612666cCb';
const NFT_CONTRACT_ABI = [
  {
    name: 'balanceOf',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ name: 'owner', type: 'address' }],
    outputs: [{ name: 'balance', type: 'uint256' }],
  },
] as const;

const Login = () => {
  const navigate = useNavigate();
  const guestName = useRef<HTMLInputElement>(null);
  const [_, setUser] = useRecoilState(userAtom);
  const [error, setError] = useState('');
  const { address } = useAccount();

  const { data: nftBalance } = useReadContract({
    address: NFT_CONTRACT_ADDRESS,
    abi: NFT_CONTRACT_ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    query: {
      enabled: Boolean(address),
    },
  });

  console.log(nftBalance);

  const hasNFT = nftBalance && nftBalance > 0n;

  const loginAsGuest = async () => {
    try {
      if (!hasNFT) {
        setError('You need to own our NFT to access the game');
        return;
      }

      const response = await fetch(`${BACKEND_URL}/auth/guest`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          address: address,
          name: (guestName.current && guestName.current.value) || '',
        }),
      });

      if (!response.ok) {
        throw new Error('Login request failed');
      }

      const user = await response.json();
      setUser(user);
      navigate('/game/random');
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please try again.');
    }
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-textMain bg-black text-white bg-gradient-to-b from-[#b7722d] to-black py-[72px] sm:py-24">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#b7722d] drop-shadow-lg">
        {hasNFT ? 'Enter Username' : 'NFT Required'}
      </h1>
      <div className="bg-bgAuxiliary2 rounded-lg shadow-lg p-8 flex flex-col md:flex-row">
        <div className="flex flex-col items-center ">
          {hasNFT ? (
            <>
              <div className="flex items-center justify-between gap-10">
                <img src={authOfficer} alt="" width={225} className=" rounded-sm" />
                <div className=" flex flex-col items-center justify-between gap-5">
                  <div className=" border p-2 rounded-md border-[#383838]">
                    <img src={authUser} alt="" width={25} className=" rounded-sm" />
                  </div>
                  <input
                    type="text"
                    ref={guestName}
                    placeholder="Username"
                    className="border px-4 py-2 text-black rounded-md mb-4 w-full md:w-64"
                  />
                  <button
                    className="bg-[#b7722d] text-white px-4 py-2 rounded-md hover:bg-[#99622a] transition-colors duration-300"
                    onClick={loginAsGuest}
                  >
                    Jump In
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className=" flex items-center justify-between gap-10">
                <img src={officer} alt="" width={225} className=" rounded-sm" />
                <div>
                  <p className="mb-4 max-w-40 text-xl font-semibold">
                    Ooop! YOU NEED TO OWN OUR DDWGS NFT TO GO THROUH HERE
                  </p>

                  <button
                    className="bg-[#b7722d] text-white px-4 py-2 rounded-md hover:bg-[#99622a] transition-colors duration-300"
                    onClick={goHome}
                  >
                    Return Home
                  </button>
                </div>
              </div>
            </div>
          )}

          {error && <h1>ERRR</h1>}
        </div>
      </div>
    </div>
  );
};

export default Login;
