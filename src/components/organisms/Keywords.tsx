'use client';
import { GridContainer } from '@/components/atoms/GridContainer';
import { Typography } from '../atoms/Typography';
import {
  AnimatePresence,
  motion,
  MotionValue,
  useInView,
  useScroll,
  useTransform,
} from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { useWindowScroll, useWindowSize } from 'react-use';

export default function Keywords() {
  const inViewTrigger = useRef(null);
  const isInView = useInView(inViewTrigger);

  const keywords = ['Refreshing', 'Creamy', 'Flavorful'];
  const [wordIdx, setWordIdx] = useState(0);

  const { y } = useWindowScroll();
  const { height } = useWindowSize();

  useEffect(() => {
    // 200vh for greeting, 225vh for keywords (75vh each)
    if (y <= 1.5 * height) {
      setWordIdx(0);
    }

    if (y > 1.5 * height && y <= 2.25 * height) {
      setWordIdx(1);
    }

    if (y > 2.25 * height && y <= 3 * height) {
      setWordIdx(2);
    }
  }, [height, y]);

  return (
    <GridContainer className="sticky left-0 top-0 h-screen overflow-y-clip">
      <div className="col-span-full text-center">
        <motion.div
          animate={{
            opacity: isInView ? 1 : 0,
            translateY: isInView ? '10%' : 0,
          }}
        >
          <Typography variant="heading2" color="text-primary-200">
            it is
          </Typography>
        </motion.div>

        <AnimatePresence mode="wait">
          {keywords.map((keyword, idx) => (
            <motion.div
              className="h-0"
              key={keyword}
              initial={{ opacity: 0, translateY: 0 }}
              animate={{
                opacity: isInView && wordIdx === idx ? 1 : 0,
                translateY: isInView && wordIdx === idx ? 0 : '10vh',
              }}
              exit={{ opacity: 0, translateY: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <Typography variant="heading1" color="text-primary-300">
                {keyword}
              </Typography>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <motion.div
        ref={inViewTrigger}
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: '61.574vh' }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute left-1/2 top-0 h-[105vw] -translate-x-1/2 rotate-[85deg] bg-primary-100"
      ></motion.div>
    </GridContainer>
  );
}
