import React, { useState } from 'react';
import './NavBar.css';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HorizontalSplitOutlinedIcon from '@mui/icons-material/HorizontalSplitOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import { NavLink  } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import { faHouseFlag } from '@fortawesome/free-solid-svg-icons';










const NavBar = () => {
    const [state, setState] = useState({
        right: false,
    });

    //Search Logic
        
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?query=${searchTerm}`);
    setSearchTerm('')
  }
    //Search Logic


    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List component="nav">
            <li className="list-item">
                <ListItem disablePadding>
                    <ListItemButton
                    className="list-item-button"
                    component={NavLink}
                    to="/"
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                        >
                    <ListItemText primary="جميع القوالب" sx={{ textAlign: 'right' }} />
                    <ListItemIcon className="list-item-icon" sx={{ minWidth: 'auto', mr: 2 }}>
                        <HomeOutlinedIcon />
                    </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                </li>
                <li className="list-item">
                <ListItem disablePadding>
                    <ListItemButton
                    className="list-item-button"
                    component={NavLink}
                    to="/Landingpage"
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                        >
                    <ListItemText primary="صفحات الهبوط" sx={{ textAlign: 'right' }} />
                    <ListItemIcon className="list-item-icon" sx={{ minWidth: 'auto', mr: 2 }}>
                        <FlightLandIcon />
                    </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                </li>
                <li className="list-item">
                <ListItem disablePadding>
                    <ListItemButton
                    className="list-item-button"
                    component={NavLink}
                    to="/Personalwebsitepage"
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                        >
                    <ListItemText primary="موقع شخصي" sx={{ textAlign: 'right' }} />
                    <ListItemIcon className="list-item-icon" sx={{ minWidth: 'auto', mr: 2 }}>
                        <PersonOutlineIcon />
                    </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                </li>
                <li className="list-item">
                <ListItem disablePadding>
                    <ListItemButton
                    className="list-item-button"
                    component={NavLink}
                    to="/Companypage"
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                        >
                    <ListItemText primary="موقع لشركة" sx={{ textAlign: 'right' }} />
                    <ListItemIcon className="list-item-icon" sx={{ minWidth: 'auto', mr: 2 }}>
                        <ApartmentIcon />
                    </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                </li>
                <li className="list-item">
                <ListItem disablePadding>
                    <ListItemButton
                    className="list-item-button"
                    component={NavLink}
                    to="/HtmlCsspage"
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                        >
                    <ListItemText primary="Html & Css" sx={{ textAlign: 'right' }} />
                    <ListItemIcon className="list-item-icon" sx={{ minWidth: 'auto', mr: 2 }}>
                        <CodeOffIcon />
                    </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                </li>
                <li className="list-item">
                <ListItem disablePadding>
                    <ListItemButton
                    className="list-item-button"
                    component={NavLink}
                    to="/Reactpage"
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                        >
                    <ListItemText primary="React" sx={{ textAlign: 'right' }} />
                    <ListItemIcon className="list-item-icon" sx={{ minWidth: 'auto', mr: 2 }}>
                    <FontAwesomeIcon icon={faReact} />
                    </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                </li>
                <li className="list-item">
                <ListItem disablePadding>
                    <ListItemButton
                    className="list-item-button"
                    component={NavLink}
                    to="/Jspage"
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                        >
                    <ListItemText primary="JavaScript" sx={{ textAlign: 'right' }} />
                    <ListItemIcon className="list-item-icon" sx={{ minWidth: 'auto', mr: 2 }}>
                    <FontAwesomeIcon icon={faJs} />
                    </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                </li>
                <li className="list-item">
                <ListItem disablePadding>
                    <ListItemButton
                    className="list-item-button"
                    component={NavLink}
                    to="/Eshoppage"
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                        >
                    <ListItemText primary="متجر إلكتروني" sx={{ textAlign: 'right' }} />
                    <ListItemIcon className="list-item-icon" sx={{ minWidth: 'auto', mr: 2 }}>
                        <ShoppingBasketIcon />
                    </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                </li>
                <li className="list-item">
                <ListItem disablePadding>
                    <ListItemButton
                    className="list-item-button"
                    component={NavLink}
                    to="/Other"
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                        >
                    <ListItemText primary="قوالب أخرى" sx={{ textAlign: 'right' }} />
                    <ListItemIcon className="list-item-icon" sx={{ minWidth: 'auto', mr: 2 }}>
                    <FontAwesomeIcon icon={faHouseFlag} />
                    </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                </li>
            </List>
        </Box>
    );
    


    return (
        <div className='navbarreact' id='navbarid'>
            <CssBaseline />
            <Container fixed className='flexspacebetween'>
            <Link to={`/`}>
            <img className='logo' src={`${process.env.PUBLIC_URL}/images/logo white.png`} alt="قالب" />
            </Link>
            <div className='dNavbar'>
            <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="ابحث هنا..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
                </form>
                <div>
                    <Button onClick={toggleDrawer('right', true)}>
                        <HorizontalSplitOutlinedIcon className='navbar-bar' />
                    </Button>
                    <Drawer
                        anchor="right"
                        open={state.right}
                        onClose={toggleDrawer('right', false)}
                    >
                        {list('right')}
                    </Drawer>
                </div>
            </div>
            </Container>
        </div>
    );
}

export default NavBar;
