import { motion, useScroll, useTransform } from 'framer-motion';
import appScreen from '../assets/images/app-screen.png';
import { useRef } from 'react';

const Showcase = () => {
  const image = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: image,
    offset: ['start end', 'start start'],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <div className=" bg-black text-white bg-gradient-to-b from-black to-[#b7722d] py-[72px] sm:py-24">
      <div className=" container flex flex-col items-center">
        <h2 className=" text-5xl sm:text-6xl text-center tracking-tighter font-bold">Intuitive interface</h2>
        <div className=" max-w-xl mx-auto">
          <p className=" text-center mt-5 text-xl text-white/70">
            Designed to be intuitive and user-friendly, ensuring a smooth and enjoyable gameplay experience for all
            players.
          </p>
        </div>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: '800px',
          }}
        >
          <img src={appScreen} alt="app screenshot" className=" mt-14" ref={image} />
        </motion.div>
      </div>
    </div>
  );
};

export default Showcase;
