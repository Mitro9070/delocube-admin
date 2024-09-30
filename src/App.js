import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CapsuleManagement from './pages/CapsuleManagement';
import BookingMonitoring from './pages/BookingMonitoring';
import UserManagement from './pages/UserManagement';
import FinancialControl from './pages/FinancialControl';
import FeedbackSupport from './pages/FeedbackSupport';
import ServiceTasks from './pages/ServiceTasks';
import Navbar from './components/UI/Navbar';
import Sidebar from './components/UI/Sidebar';
import { CssBaseline, Toolbar, Box, AppBar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

function App() {
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Router>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DeloCube
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex' }}>
        <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar />
          <Routes>
            <Route path="/capsules" element={<CapsuleManagement />} />
            <Route path="/bookings" element={<BookingMonitoring />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/financial" element={<FinancialControl />} />
            <Route path="/feedback" element={<FeedbackSupport />} />
            <Route path="/service-tasks" element={<ServiceTasks />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;