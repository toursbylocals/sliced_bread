"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { GridContainer } from "@/components/atoms/GridContainer";
import { Typography } from "@/components/atoms/Typography";
import { motion, useScroll, useTransform } from "motion/react";
import { useWindowSize } from "react-use";

export default function Home() {
  const { width } = useWindowSize();

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const translateX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const top = useTransform(scrollYProgress, [0, 1], ["45.648148vh", "65vh"]);

  useLayoutEffect(() => {}, []);

  return (
    <GridContainer className="relative h-[200vh]" ref={container}>
      <div className="relative z-30 col-span-12">
        <Typography
          variant="display1"
          className="mb-[46px] pr-[16px] text-center"
        >
          ChaBliss
        </Typography>

        <div className="rotate-[5deg] min-[1441px]:pl-[calc(0.521*100vw-750.24px)]">
          <Typography variant="heading2" color="text-primary-200">
            Best
          </Typography>
          <Typography
            variant="heading1"
            color="text-primary-300"
            className="-mt-[1.5rem]"
          >
            Milk Tea
          </Typography>
          <Typography
            variant="heading2"
            color="text-primary-200"
            className="-mt-[3.5rem]"
          >
            in the world
          </Typography>
        </div>
      </div>

      <Image
        className="absolute -right-[calc(125/1440*100vw)] top-[calc(125/1080*100vh)] z-0 rotate-[20.15deg] min-[1441px]:right-[calc(0.469*100vw-800.36px)]"
        src="/assets/images/pouring_milk.webp"
        width={411}
        height={748}
        alt="Pouring Milk"
        draggable={false}
      />

      <motion.div
        style={{ rotate, scale, translateX, top }}
        className="fixed left-1/2 z-10"
      >
        <Image
          src="/assets/images/milktea.webp"
          width={693}
          height={1004}
          alt="ChaBliss Milk Tea"
          draggable={false}
        />
      </motion.div>
    </GridContainer>
  );
}
