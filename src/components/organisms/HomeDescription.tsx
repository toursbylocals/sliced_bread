'use client';

import Image from 'next/image';
import { GridContainer } from '../atoms/GridContainer';
import { Typography } from '../atoms/Typography';
import { motion } from 'motion/react';

export default function HomeDescription() {
  return (
    <GridContainer className="relative z-20 py-16 xl:h-screen">
      <div className="col-span-full flex justify-between gap-8 max-xl:flex-col xl:items-end xl:gap-[72px] xl:overflow-hidden">
        <motion.div
          className="flex h-[50vh] w-full flex-shrink-0 items-center overflow-hidden object-fill xl:h-full xl:w-[calc(562/1440*100vw)]"
          initial={{ opacity: 0, translateY: '-10%' }}
          whileInView={{
            opacity: 1,
            translateY: 0,
          }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <Image
            className="w-full"
            src="/assets/images/showcase.webp"
            width={599}
            height={799}
            alt="ChaBliss showcase"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: '10%' }}
          whileInView={{
            opacity: 1,
            translateY: 0,
          }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <Typography variant="heading4" color="text-primary-200">
            Discover the perfect cup of milk tea with
          </Typography>
          <Typography variant="heading1" color="text-primary-300">
            ChaBliss
          </Typography>
          <Typography
            variant="heading4"
            color="text-primary-200"
            className="-mt-4 md:-mt-8"
          >
            a delightful blend of rich, creamy flavors that will elevate your
            tea experience.
            <br />
            <br />
            Made from high-quality ingredients, our milk tea offers a smooth and
            refreshing taste that’s perfect for any time of day.
            <br />
            <br />
            Enjoy the classic comfort of milk tea without the boba, just pure,
            unadulterated bliss in every sip. Treat yourself to a moment of joy
            with ChaBliss!
          </Typography>
        </motion.div>
      </div>
    </GridContainer>
  );
}
