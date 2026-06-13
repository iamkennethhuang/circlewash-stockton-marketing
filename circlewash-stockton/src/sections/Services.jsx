import { Avatar, Box, Container, Grid, IconButton, Stack, Typography } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { Link as RouterLink } from 'react-router-dom';
import { services, features } from '../data/siteContent';
import Picture from '../components/Picture';

function Services() {
  return (
    <Box component="section" id="services" className="section servicesSection">
      <Container maxWidth="xl">
        <Typography variant="h2" sx={{ mb: { xs: 3, md: 5 } }}>
          Services
        </Typography>
        <Grid container spacing={1.5} className="serviceGrid">
          {services.map((service) => (
            <Grid key={service.title} size={{ xs: 12, md: 4 }}>
              <Box className="serviceTile">
                <Picture name={service.image} alt={service.title} className="tileImg" />
                <Box className="tileShade" />
                <Typography variant="h3" className="tileTitle">
                  {service.title}
                </Typography>
                <IconButton
                  component={RouterLink}
                  to={service.to}
                  className="tileButton"
                  aria-label={`View ${service.title}`}
                  sx={{
                    position: 'absolute',
                    right: 28,
                    bottom: 28,
                    zIndex: 3,
                    color: '#ffffff',
                    backgroundColor: '#D71920',
                    '&:hover': {
                      backgroundColor: '#b91319',
                    },
                  }}
                >
                  <ArrowForwardRoundedIcon />
                </IconButton>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={3} className="featureGrid">
          {features.map((feature) => (
            <Grid key={feature.label} size={{ xs: 6, md: 3 }}>
              <Stack direction="row" spacing={1.5} alignItems="center" className="featureItem">
                <Avatar src={feature.image} alt={feature.label} className="featureIcon" sx={{ width: 100, height: 100 }}/>
                <Typography>{feature.label}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Services;
