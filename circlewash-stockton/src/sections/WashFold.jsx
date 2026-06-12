import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { steps } from '../data/siteContent';
import Picture from '../components/Picture';

function WashFold() {
  return (
    <Box component="section" className="washFoldSection">
      <Container maxWidth="xl" className="stepsWrap">
        <Typography variant="h3" className="stepsTitle">
          How wash & fold works
        </Typography>
        <Grid container spacing={{ xs: 3, md: 7 }}>
          {steps.map((step) => (
            <Grid key={step.title} size={{ xs: 12, md: 4 }}>
              <Stack spacing={2} className="stepCard">
                <Box className="stepImageFrame">
                  <Picture name={step.image} alt={step.title} className="stepImg" />
                </Box>
                <Typography variant="h3">{step.title}</Typography>
                <Typography>{step.body}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default WashFold;
