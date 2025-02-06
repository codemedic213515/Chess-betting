import { useState } from 'react';
import plusIcon from '../assets/icons/plus.svg';
import minusIcon from '../assets/icons/minus.svg';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'How to Play Chess Dawgs?',
    answer:
      'The Chess Dawgs game employs NFT-based access control, requiring players to own a designated NFT to gain entry. This creates an exclusive community for verified members and enhances security. You need to connect your crypto wallet to the game platform, allowing the system to check for NFT ownership via smart contracts on a blockchain. Once verified, you can start playing the game.',
  },
  {
    question: 'Is Chess Dawgs a free game?',
    answer:
      'Chess Dawgs is a P2E game, meaning players can earn by playing the game. You need to have $DAWGS tokens in your wallet to play againts other players and tokens will be distributed to the winners of each game.',
  },
  {
    question: 'Is Chess Dawgs fully decentralized?',
    answer:
      'Chess Dawgs is a fully decentralized game, meaning it is not controlled by any central authority. The game is built on the blockchain, and all game data is stored on the blockchain. This ensures that the game is fair and transparent, and that no single entity can manipulate the game or the results.',
  },
];

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-7 px-4 border-b border-[#b7722d]" onClick={() => setIsOpen(!isOpen)}>
      <div className=" flex items-center ">
        <span className=" flex-1 text-lg sm:text-xl font-bold">{question}</span>{' '}
        <img src={isOpen ? minusIcon : plusIcon} alt="" />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
            className=" sm:text-lg"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQs = () => {
  return (
    <div className=" bg-black text-white bg-gradient-to-b from-[#b7722d] to-black py-[72px] sm:py-24">
      <div className=" container">
        <h2 className=" text-5xl sm:text-6xl sm:max-w-[648px] mx-auto text-center tracking-tighter font-bold">
          Frequently Asked Questions
        </h2>
        <div className=" mt-12 max-w-[648px]  mx-auto">
          {faqs.map(({ question, answer }) => (
            <AccordionItem key={question} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
