import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded';

const address = '1101 E March Ln, Stockton, CA 95210';
const phoneNumber = '4158287006';
const email = 'support@circlewashstockton.com';
const encodedAddress = encodeURIComponent(address);
const mapEmbedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

function ContactPage() {
  return (
    <Box className="section contactPage">
      <Container maxWidth="xl">
        <Box sx={{ mt:6, mb: 10 }}>
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
                <Link
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  underline="none"
                  aria-label={`Get directions to ${address}`}
                >
                  <Typography>{address}</Typography>
                </Link>
              </Stack>
              <Stack direction="row" spacing={1.5}>
                <ScheduleRoundedIcon />
                <Typography>Monday to Sunday, 6 am to 9pm</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5}>
                <PhoneRoundedIcon />
                <Link href={`tel:${phoneNumber}`} color="inherit" underline="none">
                  <Typography>{phoneNumber}</Typography>
                </Link>
              </Stack>
              <Stack direction="row" spacing={1.5}>
                <EmailRoundedIcon />
                <Link href={`mailto:${email}`} color="inherit" underline="none">
                  <Typography>{email}</Typography>
                </Link>
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Link
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get directions to ${address}`}
              className="mapFrame contactMap"
            >
              <Box
                component="iframe"
                src={mapEmbedUrl}
                title="Circle Wash Stockton Google Map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="googleMap"
              />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactPage;
