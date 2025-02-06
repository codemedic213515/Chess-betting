import dawg1 from '../assets/images/dawg1.png';
import dawg2 from '../assets/images/dawg2.png';
import dawg3 from '../assets/images/dawg3.png';
import dawg4 from '../assets/images/dawg4.png';
import dawg5 from '../assets/images/dawg5.png';
import dawg6 from '../assets/images/dawg6.png';
import dawg7 from '../assets/images/dawg7.png';
import dawg8 from '../assets/images/dawg8.png';
import dawg9 from '../assets/images/dawg9.png';
import dawg10 from '../assets/images/dawg10.png';
import dawg11 from '../assets/images/dawg11.png';
import dawg12 from '../assets/images/dawg12.png';
import { motion } from 'framer-motion';

//To replace with minted nfts api
const images = [
  { src: dawg1, alt: 'dawg1' },
  { src: dawg2, alt: 'dawg2' },
  { src: dawg3, alt: 'dawg3' },
  { src: dawg4, alt: 'dawg4' },
  { src: dawg5, alt: 'dawg5' },
  { src: dawg6, alt: 'dawg6' },
  { src: dawg7, alt: 'dawg7' },
  { src: dawg8, alt: 'dawg8' },
  { src: dawg9, alt: 'dawg9' },
  { src: dawg10, alt: 'dawg10' },
  { src: dawg11, alt: 'dawg11' },
  { src: dawg12, alt: 'dawg12' },
];

const DawgsTicker = () => {
  return (
    <div className=" bg-black text-white py-[72px] sm:py-24 ">
      <div className=" container">
        <h2 className=" text-4xl text-center tracking-tight font-bold sm:mb-24">Step into the Deputy Dawgs corral</h2>
        <div className=" flex overflow-hidden mt-9 before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-20 after:w-20  relative  after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgba(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgba(0,0,0,0))]">
          <motion.div
            initial={{ translateX: 0 }}
            animate={{ translateX: '-50%' }}
            transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
            className=" flex float-none gap-16 pr-12"
          >
            {images.map((image, index) => (
              <img src={image.src} alt={image.alt} key={index} className=" flex-none h-52 w-auto rounded-lg" />
            ))}
            {images.map((image, index) => (
              <img src={image.src} alt={image.alt} key={index} className=" flex-none h-52 w-auto rounded-lg" />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DawgsTicker;
