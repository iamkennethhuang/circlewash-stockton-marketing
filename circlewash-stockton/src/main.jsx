import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.jsx';
import theme from './theme';
import { getImageSrc } from './data/images';
import './styles.css';

const faviconHref = getImageSrc('favicon');
const openGraphImageHref = getImageSrc('hero');

if (faviconHref) {
  const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link');
  favicon.rel = 'icon';
  favicon.href = faviconHref;
  document.head.appendChild(favicon);
}

if (openGraphImageHref) {
  const openGraphImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
  openGraphImage.setAttribute('property', 'og:image');
  openGraphImage.setAttribute('content', openGraphImageHref);
  document.head.appendChild(openGraphImage);
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
