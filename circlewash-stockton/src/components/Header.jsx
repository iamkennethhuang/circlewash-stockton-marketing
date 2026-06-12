import { useState } from 'react';
import { AppBar, Button, Link, Menu, MenuItem, Stack, Toolbar } from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { Link as RouterLink, NavLink, useLocation } from 'react-router-dom';
import { navItems } from '../data/siteContent';
import Logo from './Logo';

function Header({ transparent = false }) {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [openMenuKey, setOpenMenuKey] = useState(null);
  const location = useLocation();

  const handleMenuOpen = (event, key) => {
    setMenuAnchor(event.currentTarget);
    setOpenMenuKey(key);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
    setOpenMenuKey(null);
  };

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
          {navItems.map((item) => {
            const hasSubItems = Boolean(item.subItems?.length);
            const menuId = `${item.key}-menu`;
            const isMenuOpen = openMenuKey === item.key;
            const isActive = location.pathname === item.to || item.subItems?.some((subItem) => location.pathname === subItem.to);

            if (hasSubItems) {
              return (
                <div key={item.key}>
                  <Button
                    id={`${item.key}-button`}
                    color="inherit"
                    className={`navLink ${isActive ? 'active' : ''}`}
                    endIcon={<ExpandMoreRoundedIcon fontSize="small" />}
                    aria-controls={isMenuOpen ? menuId : undefined}
                    aria-expanded={isMenuOpen ? 'true' : undefined}
                    aria-haspopup="menu"
                    onClick={(event) => handleMenuOpen(event, item.key)}
                    sx={{
                      minWidth: 'auto',
                      p: 0,
                      font: 'inherit',
                      lineHeight: 'inherit',
                      textTransform: 'none',
                      '& .MuiButton-endIcon': {
                        ml: 0.4,
                        mr: 0,
                        transition: 'transform 160ms ease',
                        transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                  <Menu
                    id={menuId}
                    anchorEl={menuAnchor}
                    open={isMenuOpen}
                    onClose={handleMenuClose}
                    MenuListProps={{ 'aria-labelledby': `${item.key}-button` }}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    slotProps={{
                      paper: {
                        sx: {
                          mt: 1,
                          width: { xs: 240, sm: 320 },
                          bgcolor: transparent ? '#D7D5EA' : '#000000',
                          color: transparent ? '#000000' : '#ffffff',
                        },
                      },
                    }}
                  >
                    {item.subItems.map((subItem) => (
                      <MenuItem
                        key={subItem.key}
                        component={NavLink}
                        to={subItem.to}
                        onClick={handleMenuClose}
                        sx={{
                          fontWeight: 800,
                          '&:hover, &:focus': {
                            bgcolor: 'rgba(255, 255, 255, 0.12)',
                          },
                          '&.active': {
                            color: '#ff4c52',
                            bgcolor: 'rgba(255, 76, 82, 0.14)',
                          },
                        }}
                      >
                        {subItem.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              );
            }

            return (
              <Link
                key={item.key}
                component={NavLink}
                to={item.to}
                color="inherit"
                underline="none"
                className="navLink"
              >
                {item.label}
              </Link>
            );
          })}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
