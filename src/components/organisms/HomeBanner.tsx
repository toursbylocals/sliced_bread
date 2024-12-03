'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import Greeting from './Greeting';
import Keywords from './Keywords';
import useBreakpoint from '@/lib/hooks/use-breakpoints';

export default function HomeBanner() {
  // tackle for hydration problem
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const breakpoint = useBreakpoint();
  const scrollTrigger = useRef(null);

  const { scrollYProgress: milkTeaProgress } = useScroll({
    target: scrollTrigger,
    offset: ['start start', 'end end'],
  });

  const rotate = useTransform(milkTeaProgress, [0, 1], [8, 0]);
  const scale = useTransform(
    milkTeaProgress,
    [0, 1],
    [1, breakpoint.isGreater('sm') ? 1.5 : 2],
  );
  const translateX = useTransform(milkTeaProgress, [0, 1], ['0%', '-50%']);
  const top = useTransform(
    milkTeaProgress,
    [0, 1],
    ['45.64815vh', breakpoint.isGreater('lg') ? '490vh' : '465vh'],
  );
  const left = useTransform(
    milkTeaProgress,
    [0, 1],
    [breakpoint.isGreater('md') ? '35%' : '0', '50%'],
  );

  return (
    // 200vh for greeting, 250vh for keywords (100vh each, 25vh buffer)
    <section className="relative h-[525vh] overflow-clip" ref={scrollTrigger}>
      <Greeting />
      <Keywords />

      {isClient && (
        <motion.div
          style={{
            rotate,
            scale,
            translateX,
            top,
            ...(breakpoint.isSmaller('xl') && { left }),
            ...(breakpoint.isGreaterOrEqual('xl') && { left: '50%' }),
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="absolute z-10 xl:left-1/2"
        >
          <Image
            className="max-xl:w-[650px]"
            src="/assets/images/milktea.webp"
            width={693}
            height={1004}
            alt="ChaBliss Milk Tea"
            draggable={false}
          />
        </motion.div>
      )}
    </section>
  );
}
