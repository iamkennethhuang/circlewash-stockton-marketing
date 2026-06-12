import { Box, Container, Typography } from '@mui/material';
import Picture from '../components/Picture';

function Hero({
  image = 'hero',
  imageAlt,
  title,
  copy,
  titleVariant = 'h1',
  sectionClassName = 'hero',
  imageClassName = 'heroImg',
  contentClassName = 'heroContent',
  titleClassName = 'heroTitle',
  copyClassName = 'heroCopy',
}) {
  return (
    <Box className={sectionClassName}>
      <Picture name={image} alt={imageAlt} className={imageClassName} />
      <Container maxWidth="xl" className={contentClassName}>
        <Typography variant={titleVariant} className={titleClassName}>
          {title}
        </Typography>
        {copy && (
          <Typography className={copyClassName}>
            {copy}
          </Typography>
        )}
      </Container>
    </Box>
  );
}

export default Hero;
