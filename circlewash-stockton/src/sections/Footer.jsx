import { Box, Container, Divider, Grid, Link, Stack, Typography } from '@mui/material';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded';
import { Link as RouterLink } from 'react-router-dom';
import { footerColumns } from '../data/siteContent';
import Logo from '../components/Logo';

const address = '1101 E March Ln, Stockton, CA 95210';
const encodedAddress = encodeURIComponent(address);
const mapEmbedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

function Footer() {
  return (
    <Box component="footer" className="footer">
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="stretch">
          <Grid container size={{ xs: 6 }}>   
            <Grid size={{ xs: 12 }}>
              <Logo />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Typography variant="h3">
                Circle Wash
              </Typography>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <Typography className="footerText" variant="paragraph">
                At Circle Wash, we combine large capacity washers with modern technology to make
                laundry faster, easier, and more affordable. Get more done in less time without
                paying premium prices.
              </Typography>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1.5}>
                  <PlaceRoundedIcon />
                  <Typography>1101 E March Ln, Stockton, CA 95210</Typography>
                </Stack>
              </Stack>

            </Grid>
            <Grid size={{ xs: 6 }}>
              <Stack spacing={1.2} mt={3}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <PhoneRoundedIcon fontSize="small" />
                  <Typography>4158287006</Typography>
                </Stack>
                <Typography fontWeight={800}>circlewashstockton.com</Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <Stack direction="row" spacing={1.5}>
                <ScheduleRoundedIcon />
                <Typography>Monday to Sunday, 6 am to 9pm</Typography>
              </Stack>
            </Grid>
          </Grid>
          <Grid size={{ xs: 6 }} className="mapGrid">
            <Link
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get directions to ${address}`}
              className="mapFrame"
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
        <Divider className="footerDivider" sx={{ pt: 4, pb: 4 }} />
        <Grid container spacing={4}>
          {footerColumns.map(([heading, links]) => (
            <Grid key={heading} size={{ xs: 12, sm: 4 }}>
              <Typography fontWeight={900} mb={2}>
                {heading}
              </Typography>
              <Stack spacing={1.5}>
                {links.map((item) => (
                  <Link key={item} component={RouterLink} color="inherit" underline="none" to="#">
                    {item}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
