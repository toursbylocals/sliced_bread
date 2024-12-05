/* eslint-disable @typescript-eslint/no-magic-numbers */

'use client';

import { GridContainer } from '@/components/atoms/GridContainer';
import { Typography } from '../atoms/Typography';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { useWindowScroll, useWindowSize } from 'react-use';

export default function Keywords() {
  const inViewTrigger = useRef(null);
  const isInView = useInView(inViewTrigger);

  const keywords = ['Refreshing', 'Creamy', 'Flavorful'];
  const [wordIdx, setWordIdx] = useState(0);

  const { y } = useWindowScroll();
  const { height } = useWindowSize();

  enum ChangeWordBreakpoint {
    First = 2.5,
    Second = 3.5,
    Third = 4.5,
  }

  useEffect(() => {
    // 200vh for greeting, 250vh for keywords (100vh each, 25vh buffer)
    if (y <= ChangeWordBreakpoint.First * height) {
      setWordIdx(0);
    }

    if (
      y > ChangeWordBreakpoint.First * height &&
      y <= ChangeWordBreakpoint.Second * height
    ) {
      setWordIdx(1);
    }

    if (
      y > ChangeWordBreakpoint.Second * height &&
      y <= ChangeWordBreakpoint.Third * height
    ) {
      setWordIdx(2);
    }
  }, [height, y]);

  return (
    <GridContainer className="sticky left-0 top-0 h-screen overflow-y-clip">
      <div className="col-span-full text-center">
        <motion.div
          animate={{
            opacity: isInView ? 1 : 0,
            translateY: isInView ? 0 : '-10%',
          }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <Typography variant="heading2" color="text-primary-200">
            it is
          </Typography>
        </motion.div>

        <AnimatePresence>
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
              transition={{ delay: 0.2, duration: 0.3 }}
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
        initial={{ opacity: 0, height: 0 }}
        whileInView={{ opacity: 1, height: '61.57vh' }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none absolute bottom-0 left-1/2 w-[115vw] -translate-x-1/2 translate-y-1/4 -rotate-[5deg] bg-primary-100"
      ></motion.div>
    </GridContainer>
  );
}
