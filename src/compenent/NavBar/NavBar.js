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
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PhotoCameraBackOutlinedIcon from '@mui/icons-material/PhotoCameraBackOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import { NavLink  } from 'react-router-dom'


const NavBar = () => {
    const [state, setState] = useState({
        right: false,
    });

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
                    <ListItemText primary="الصفحة الرئسية" sx={{ textAlign: 'right' }} />
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
                    to="/resume"
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                        >
                    <ListItemText primary="السيرة الذاتية" sx={{ textAlign: 'right' }} />
                    <ListItemIcon className="list-item-icon" sx={{ minWidth: 'auto', mr: 2 }}>
                        <DescriptionOutlinedIcon />
                    </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                </li>
                <li className="list-item">
                  <ListItem disablePadding>
                        <ListItemButton className="list-item-button" component="a" href="#skills" sx={{ display: 'flex', justifyContent: 'space-between' }} disabled>
                            <ListItemText primary="قالب الأعمال" sx={{ textAlign: 'right' }} />
                            <ListItemIcon className="list-item-icon" sx={{ minWidth: 'auto', mr: 2 }}>
                                <PhotoCameraBackOutlinedIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </li>
                <li className="list-item">
                  <ListItem disablePadding>
                        <ListItemButton className="list-item-button" component="a" href="#skills" sx={{ display: 'flex', justifyContent: 'space-between'  }} disabled>
                            <ListItemText primary="المهارات التقنية" sx={{ textAlign: 'right' }} />
                            <ListItemIcon className="list-item-icon" sx={{ minWidth: 'auto', mr: 2 }}>
                                <ConstructionOutlinedIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </li>
                <li className="list-item">
                    <ListItem disablePadding>
                        <ListItemButton className="list-item-button" component="a" href="#general-skills" sx={{ display: 'flex', justifyContent: 'space-between' }} disabled>
                            <ListItemText primary="المهارات الأخرى" sx={{ textAlign: 'right' }} />
                            <ListItemIcon className="list-item-icon" sx={{ minWidth: 'auto', mr: 2 }}>
                                <EngineeringOutlinedIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </li>
                <li className="list-item">
                    <ListItem disablePadding>
                        <ListItemButton className="list-item-button" component="a" href="#template" sx={{ display: 'flex', justifyContent: 'space-between' }} disabled>
                            <ListItemText primary="المدونة التقنية" sx={{ textAlign: 'right' }} />
                            <ListItemIcon className="list-item-icon" sx={{ minWidth: 'auto', mr: 2 }}>
                                <RateReviewOutlinedIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </li>
                <li className="list-item">
                  <ListItem disablePadding>
                        <ListItemButton className="list-item-button" component="a" href="#skills" sx={{ display: 'flex', justifyContent: 'space-between' }} disabled>
                            <ListItemText primary="المدونة العامة" sx={{ textAlign: 'right' }} />
                            <ListItemIcon className="list-item-icon" sx={{ minWidth: 'auto', mr: 2 }}>
                                <AutoFixHighOutlinedIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </li>
                <li className="list-item">
                  <ListItem disablePadding>
                        <ListItemButton className="list-item-button" component="a" href="#skills" sx={{ display: 'flex', justifyContent: 'space-between' }} disabled>
                            <ListItemText primary="المؤلفات" sx={{ textAlign: 'right' }} />
                            <ListItemIcon className="list-item-icon" sx={{ minWidth: 'auto', mr: 2 }}>
                                <ImportContactsOutlinedIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </li>
                <li className="list-item">
                  <ListItem disablePadding>
                        <ListItemButton className="list-item-button" component="a" href="#skills" sx={{ display: 'flex', justifyContent: 'space-between' }} disabled>
                            <ListItemText primary="المكتبة" sx={{ textAlign: 'right' }} />
                            <ListItemIcon className="list-item-icon" sx={{ minWidth: 'auto', mr: 2 }}>
                                <ClassOutlinedIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </li>
                <li className="list-item">
                  <ListItem disablePadding>
                        <ListItemButton className="list-item-button" component="a" href="#skills" sx={{ display: 'flex', justifyContent: 'space-between' }} disabled>
                            <ListItemText primary="تواصل معي" sx={{ textAlign: 'right' }} />
                            <ListItemIcon className="list-item-icon" sx={{ minWidth: 'auto', mr: 2 }}>
                                <CallOutlinedIcon />
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
            <img className='logo' src={`${process.env.PUBLIC_URL}/images/logo white.png`} alt="قالب" />
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
            </Container>
        </div>
    );
}

export default NavBar;
