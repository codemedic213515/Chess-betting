import { useEffect, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

interface FeatureProps {
  title: string;
  description: string;
  icon?: string; // Make icon optional
}

const Feature = ({ title, description, icon = '/default-icon.svg' }: FeatureProps) => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
  const borderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!borderRef.current) return;
      const borderRect = borderRef.current.getBoundingClientRect();
      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="border border-[#b7722d] px-5 py-10 text-center rounded-xl sm:flex-1 relative">
      <motion.div
        className="absolute inset-0 border-4 border-[#ffa245] rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
        ref={borderRef}
      ></motion.div>
      <div className="inline-flex h-14 w-14 bg-white justify-center items-center rounded-xl">
        <img src={icon} alt={title} className="w-10 h-10" />
      </div>
      <h3 className="text-xl font-bold mt-6">{title}</h3>
      <p className="text-white/70 sm:text-lg mt-2">{description}</p>
    </div>
  );
};

export default Feature;
