"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import Greeting from "./Greeting";
import Keywords from "./Keywords";

export default function HomeBanner() {
  const scrollTrigger = useRef(null);

  const { scrollYProgress: milkTeaProgress } = useScroll({
    target: scrollTrigger,
    offset: ["start start", "end end"],
  });

  const rotate = useTransform(milkTeaProgress, [0, 1], [8, 0]);
  const scale = useTransform(milkTeaProgress, [0, 1], [1, 1.5]);
  const translateX = useTransform(milkTeaProgress, [0, 1], ["0%", "-50%"]);
  const top = useTransform(milkTeaProgress, [0, 1], ["45.648148vh", "70vh"]);

  return (
    // 200vh for greeting, 225vh for keywords (75vh each)
    <section className="h-[425vh]" ref={scrollTrigger}>
      <Greeting />
      <Keywords />

      <motion.div
        style={{ rotate, scale, translateX, top }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
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
    </section>
  );
}
