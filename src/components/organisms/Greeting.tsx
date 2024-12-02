import React, { useRef } from "react";
import Image from "next/image";
import { GridContainer } from "@/components/atoms/GridContainer";
import { Typography } from "@/components/atoms/Typography";
import { motion, useScroll, useTransform } from "motion/react";

export default function Greeting() {
  const title = "ChaBliss";

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end 0.7"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [20.15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <GridContainer className="h-screen" ref={container}>
      <div className="relative z-30 col-span-12">
        <Typography
          variant="display1"
          className="mb-[46px] pr-[16px] mx-auto flex justify-center"
        >
          {title.split("").map((char, idx) => (
            <motion.span
              initial={{ opacity: 0, x: "-10%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.02 * idx, duration: 0.6 }}
              key={`title-${idx}`}
              className="relative"
            >
              {char}
            </motion.span>
          ))}
        </Typography>

        <div className="rotate-[5deg] min-[1441px]:pl-[calc(0.521*100vw-750.24px)]">
          <motion.div
            initial={{ opacity: 0, x: "-5%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <Typography variant="heading2" color="text-primary-200">
              Best
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "-5%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            <Typography
              variant="heading1"
              color="text-primary-300"
              className="-mt-[1.5rem]"
            >
              Milk Tea
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "-5%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.3 }}
          >
            <Typography
              variant="heading2"
              color="text-primary-200"
              className="-mt-[3.5rem]"
            >
              in the world
            </Typography>
          </motion.div>
        </div>
      </div>

      <motion.div
        style={{ rotate, opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="absolute -right-[calc(125/1440*100vw)] top-[calc(125/1080*100vh)] z-0  min-[1441px]:right-[calc(0.469*100vw-800.36px)]"
      >
        <Image
          src="/assets/images/pouring_milk.webp"
          width={411}
          height={748}
          alt="Pouring Milk"
          draggable={false}
        />
      </motion.div>
    </GridContainer>
  );
}
