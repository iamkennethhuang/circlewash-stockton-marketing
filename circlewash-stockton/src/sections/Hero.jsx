import { Box, Container, Typography } from '@mui/material';
import Picture from '../components/Picture';

function Hero() {
  return (
    <Box className="hero">
      <Picture name="hero" alt="Circle Wash neon laundromat interior" className="heroImg" />
      <Container maxWidth="xl" className="heroContent">
        <Typography variant="h1" className="heroTitle">
          Coming
          <br />
          Winter 2026
        </Typography>
        <Typography className="heroCopy">
          Circle Wash is coming back in Winter 2026 with improved services and upgraded convenience.
          Our new payment system will support Epay, making laundry day easier than ever.
        </Typography>
      </Container>
    </Box>
  );
}

export default Hero;
