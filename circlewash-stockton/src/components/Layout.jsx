import { Box } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from '../sections/Footer';

function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <Box>
      <Header transparent={isHome} />
      <Box component="main" className={isHome ? undefined : 'siteMain'}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;
