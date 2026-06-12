import { Box, Container, Typography } from '@mui/material';
import Picture from '../components/Picture';

function FreeDrying() {
  return (
    <Box component="section" className="dryingSection">
      <Picture name="drying" alt="Row of laundry dryers" className="dryingImg" />
      <Box className="dryingShade" />
      <Container maxWidth="xl" className="dryingContent">
        <Typography variant="h2">Free Drying</Typography>
        <Typography>
          Wash 20 pounds of laundry and earn 20 minutes of FREE drying time. No limits on dryer
          size. Choose the dryer that works best for you.
        </Typography>
      </Container>
    </Box>
  );
}

export default FreeDrying;
