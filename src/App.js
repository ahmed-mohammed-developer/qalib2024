import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createTheme, ThemeProvider   } from '@mui/material/styles';
import NavBar from './compenent/NavBar/NavBar';
import { FaWhatsapp } from 'react-icons/fa';
import { HashRouter,  Routes, Route } from 'react-router-dom'
import Home from './compenent/Home/Home.js'
/*import NotFoundPage from './component/NotFoundPage/NotFoundPage.js';*/





const theme = createTheme({
  typography: {
    fontFamily: [
      'Cairo',
      'Tajawal',
    ].join(','),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
      {/*<Route path="*" element={<NotFoundPage />} />*/}
      </Routes>
      </HashRouter>
      <a href="https://wa.me/966506353350" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={40} />
      </a>
    </ThemeProvider>
  );
}

export default App;
