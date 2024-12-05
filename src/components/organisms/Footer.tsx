import { GridContainer } from '../atoms/GridContainer';
import { Typography } from '../atoms/Typography';

export default function Footer() {
  return (
    <footer className="bg-primary-400">
      <GridContainer className="bg-primary-400 !py-4">
        <div className="col-span-full flex items-center justify-between">
          <Typography variant="description2" color="text-white">
            This website is exclusively for demo purposes and not for actual
            use.
          </Typography>

          <Typography variant="description2" color="text-white">
            created by{' '}
            <a
              href="https://github.com/yuekalong/"
              target="_blank"
              className="underline"
            >
              Marco Yue
            </a>
            , 2024
          </Typography>
        </div>
      </GridContainer>
    </footer>
  );
}
