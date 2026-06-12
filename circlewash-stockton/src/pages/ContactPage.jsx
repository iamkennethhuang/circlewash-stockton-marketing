import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded';
import Picture from '../components/Picture';

function ContactPage() {
  return (
    <Box className="section contactPage">
      <Container maxWidth="xl">
        <Box className="pageIntro">
          <Typography variant="h1">Visit Circle Wash</Typography>
          <Typography>
            Find us in Stockton for self-service laundry, wash and fold, and convenient everyday
            laundry support.
          </Typography>
        </Box>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3} className="contactStack">
              <Stack direction="row" spacing={1.5}>
                <PlaceRoundedIcon />
                <Typography>1101 E March Ln, Stockton, CA 95210</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5}>
                <ScheduleRoundedIcon />
                <Typography>Monday to Sunday, 6 am to 9pm</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5}>
                <PhoneRoundedIcon />
                <Typography>4158287006</Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box className="mapFrame contactMap">
              <Picture name="map" alt="Circle Wash Stockton map" className="mapImg" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactPage;
