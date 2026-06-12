import { AppBar, Link, Stack, Toolbar } from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import { navItems } from '../data/siteContent';
import Logo from './Logo';

function Header({ transparent = false }) {
  return (
    <AppBar
      position="absolute"
      elevation={0}
      sx={{ bgcolor: transparent ? 'transparent' : '#000000' }}
    >
      <Toolbar className="toolbar">
        {!transparent && <Link component={RouterLink} to="/" color="inherit" underline="none" className="headerLogoLink">
          <Logo />
        </Link>}
        <Stack direction="row" spacing={{ xs: 1.5, sm: 4 }} alignItems="center" className="headerNav">
          {navItems.map((item) => (
            <Link
              key={item.to}
              component={NavLink}
              to={item.to}
              color="inherit"
              underline="none"
              className="navLink"
            >
              {item.label}
            </Link>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
