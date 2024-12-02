import Image from 'next/image';
import { GridContainer } from '../atoms/GridContainer';
import { Typography } from '../atoms/Typography';

export default function Description() {
  return (
    <GridContainer className="relative z-20 h-screen">
      <div className="col-span-full flex items-end justify-between gap-[72px] overflow-hidden">
        <div className="h-full w-[calc(562/1440*100vw)] flex-shrink-0 object-fill">
          <Image
            src="/assets/images/showcase.webp"
            width={599}
            height={799}
            alt="ChaBliss showcase"
          />
        </div>

        <div>
          <Typography variant="description" color="text-primary-200">
            Discover the perfect cup of milk tea with
          </Typography>
          <Typography variant="heading1" color="text-primary-300">
            ChaBliss
          </Typography>
          <Typography
            variant="description"
            color="text-primary-200"
            className="-mt-8"
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
        </div>
      </div>
    </GridContainer>
  );
}
