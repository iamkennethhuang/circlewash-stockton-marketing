import { Box, Button, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function NotFoundPage() {
  return (
    <Box className="section">
      <Container maxWidth="xl">
        <Box className="pageIntro">
          <Typography variant="h1">Page Not Found</Typography>
          <Typography>The page you are looking for is not part of the Circle Wash site.</Typography>
        </Box>
        <Button component={RouterLink} to="/" variant="contained">
          Back to home
        </Button>
      </Container>
    </Box>
  );
}

export default NotFoundPage;
