import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './compenent/NavBar/NavBar';
import { FaWhatsapp } from 'react-icons/fa';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './compenent/Home/Home.js';
import Search from './compenent/Search/Search.js';
import Details from "./compenent/Details/Details.js";
import Landingpage from './compenent/Landingpage/Landingpage.js';
import Personalwebsitepage from './compenent/Personalwebsitepage/Personalwebsitepage.js';
import Companypage from './compenent/Companypage/Companypage.js';
import Eshoppage from './compenent/Eshoppage/Eshoppage.js';
import HtmlCsspage from './compenent/HtmlCsspage/HtmlCsspage.js'
import Jspage from './compenent/Jspage/Jspage.js'
import Reactpage from './compenent/Reactpage/Reactpage.js';
import Footer from './compenent/Footer/Footer.js'

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
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/Details/:id" element={<Details />} />
          <Route path="/Landingpage" element={<Landingpage />} />
          <Route path="/Personalwebsitepage" element={<Personalwebsitepage />} />
          <Route path="/Companypage" element={<Companypage />} />
          <Route path="/Eshoppage" element={<Eshoppage />} />
          <Route path="/HtmlCsspage" element={<HtmlCsspage />} />
          <Route path="/Jspage" element={<Jspage />} />
          <Route path="/Reactpage" element={<Reactpage />} />
          {/*<Route path="*" element={<NotFoundPage />} />*/}
        </Routes>
        <Footer />
      </Router>
      <a href="https://wa.me/966506353350" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={40} />
      </a>
    </ThemeProvider>
  );
}

export default App;
