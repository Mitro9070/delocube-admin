import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Делокуб Админка
        </Typography>
        <Button color="inherit" component={Link} to="/capsules">Капсулы</Button>
        <Button color="inherit" component={Link} to="/bookings">Бронирования</Button>
        <Button color="inherit" component={Link} to="/users">Пользователи</Button>
        <Button color="inherit" component={Link} to="/financial">Финансы</Button>
        <Button color="inherit" component={Link} to="/feedback">Обратная связь</Button>
        <Button color="inherit" component={Link} to="/service-tasks">Задачи сервиса</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;