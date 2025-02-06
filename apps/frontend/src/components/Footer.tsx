import { GitHubLogoIcon, VideoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import XLogo from '../../src/assets/icons/x.svg';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className=" py-5 bg-black text-white/60 border-t border-[#b7722d]">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className=" text-center">© 2024 Chess Dawgs, Inc. All rights reserved.</div>
          <div>
            <div className="flex justify-center gap-3 mt-4 sm:mt-0">
              <a href="https://x.com/chessdawgs" target="_blank">
                <img src={XLogo} alt="x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
