import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Picture from './Picture';

function MarketingSplitHero({ title, image, imageAlt, cta }) {
  return (
    <Box component="section" className="marketingSplitHero">
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, md: 5 }} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 4 }} className="marketingSplitHeroCopyCol">
            <Typography variant="h2" className="marketingSplitHeroTitle">
              {title.map((line) => (
                <Box key={line} component="span">
                  {line}
                </Box>
              ))}
            </Typography>
            {cta && (
              <Button
                component={RouterLink}
                to={cta.to}
                variant="contained"
                color="primary"
                className="marketingSplitHeroButton"
                sx={{ mt: 3 }}
              >
                {cta.label}
              </Button>
            )}
          </Grid>
          <Grid size={{ xs: 12, md: 7 }} className="marketingSplitHeroMediaCol">
            <Picture name={image} alt={imageAlt} className="marketingSplitHeroImg" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default MarketingSplitHero;
