import { Box, Typography } from '@mui/material';
import Picture from './Picture';

function Logo() {
  return (
    <Box className="logoWrap" aria-label="Circle Wash">
      <Picture name="logo" alt="Circle Wash neon sign" className="logoImg" />
    </Box>
  );
}

export default Logo;
