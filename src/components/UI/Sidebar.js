import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Collapse, Toolbar, Box, Divider } from '@mui/material';
import { ExpandLess, ExpandMore, ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';
import homeIcon from '../../assets/home.png';
import bookingsIcon from '../../assets/bookings.png';
import usersIcon from '../../assets/users.png';
import financialIcon from '../../assets/financial.png';
import feedbackIcon from '../../assets/feedback.png';
import serviceIcon from '../../assets/service.png';

const drawerWidth = 240;

const Sidebar = ({ open, handleDrawerToggle }) => {
  const [menuOpen, setMenuOpen] = useState(true);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar>
          <IconButton onClick={handleDrawerToggle}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          <ListItem button component={Link} to="/capsules">
            <ListItemIcon>
              <img src={homeIcon} alt="Home" style={{ width: 24, height: 24 }} />
            </ListItemIcon>
            <ListItemText primary="Капсулы" />
          </ListItem>
          <ListItem button component={Link} to="/bookings">
            <ListItemIcon>
              <img src={bookingsIcon} alt="Bookings" style={{ width: 24, height: 24 }} />
            </ListItemIcon>
            <ListItemText primary="Бронирования" />
          </ListItem>
          <ListItem button component={Link} to="/users">
            <ListItemIcon>
              <img src={usersIcon} alt="Users" style={{ width: 24, height: 24 }} />
            </ListItemIcon>
            <ListItemText primary="Пользователи" />
          </ListItem>
          <ListItem button onClick={handleMenuClick}>
            <ListItemIcon>
              <img src={financialIcon} alt="Financial" style={{ width: 24, height: 24 }} />
            </ListItemIcon>
            <ListItemText primary="Финансы" />
            {menuOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={menuOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/financial">
                <ListItemText inset primary="Финансовый контроль" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button component={Link} to="/feedback">
            <ListItemIcon>
              <img src={feedbackIcon} alt="Feedback" style={{ width: 24, height: 24 }} />
            </ListItemIcon>
            <ListItemText primary="Обратная связь" />
          </ListItem>
          <ListItem button component={Link} to="/service-tasks">
            <ListItemIcon>
              <img src={serviceIcon} alt="Service" style={{ width: 24, height: 24 }} />
            </ListItemIcon>
            <ListItemText primary="Задачи сервиса" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;