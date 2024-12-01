import React from 'react';
import Image from 'next/image';
import { GridContainer } from '@/components/atoms/GridContainer';
import { Typography } from '@/components/atoms/Typography';

export default function Home() {
  return (
    <GridContainer className="relative">
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

      <Image
        className="absolute right-[calc(35/1080*100vw)] top-[calc(493/1080*100vh)] z-10 rotate-[8deg] min-[1441px]:right-[calc(0.396*100vw-535.24px)]"
        src="/assets/images/milktea.webp"
        width={693}
        height={1004}
        alt="ChaBliss Milk Tea"
        draggable={false}
      />
    </GridContainer>
  );
}
