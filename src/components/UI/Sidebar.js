import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Collapse, Toolbar, Box, Divider } from '@mui/material';
import { ExpandLess, ExpandMore, Menu as MenuIcon, ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FeedbackIcon from '@mui/icons-material/Feedback';
import BuildIcon from '@mui/icons-material/Build';

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
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Капсулы" />
          </ListItem>
          <ListItem button component={Link} to="/bookings">
            <ListItemIcon><BookIcon /></ListItemIcon>
            <ListItemText primary="Бронирования" />
          </ListItem>
          <ListItem button component={Link} to="/users">
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Пользователи" />
          </ListItem>
          <ListItem button onClick={handleMenuClick}>
            <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
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
            <ListItemIcon><FeedbackIcon /></ListItemIcon>
            <ListItemText primary="Обратная связь" />
          </ListItem>
          <ListItem button component={Link} to="/service-tasks">
            <ListItemIcon><BuildIcon /></ListItemIcon>
            <ListItemText primary="Задачи сервиса" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;