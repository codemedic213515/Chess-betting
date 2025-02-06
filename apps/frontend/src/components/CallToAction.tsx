import kingImage from '../../src/assets/images/king.png';
import bishopImage from '../../src/assets/images/bishop.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  return (
    <div className=" bg-black text-white py-[72px] text-center sm:py-24" ref={containerRef}>
      <div className=" container max-w-xl relative">
        <motion.div style={{ translateY }}>
          <img src={kingImage} alt="" className=" hidden md:block absolute  top-6 left-[calc(100%+36px)]" />
        </motion.div>
        <motion.div style={{ translateY }}>
          <img src={bishopImage} alt="" className=" hidden md:block absolute -top-[120px] right-[calc(100%+24px)] " />
        </motion.div>

        <h2 className=" text-5xl sm:text-6xl sm:max-w-[648px] mx-auto text-center tracking-tighter font-bold">
          Become a bonafide $DDawgs Wrangler
        </h2>
        <p className=" text-center text-xl text-white/70 mt-5  mx-auto">
          Ready to showcase your skills and earn rewards? Log in, place your bets, and may the best Chess Dawg win! 🏆
        </p>
      </div>
    </div>
  );
};

export default CallToAction;
