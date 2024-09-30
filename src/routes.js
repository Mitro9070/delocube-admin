import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CapsuleManagement from './pages/CapsuleManagement';
import BookingMonitoring from './pages/BookingMonitoring';
import UserManagement from './pages/UserManagement';
import FinancialControl from './pages/FinancialControl';
import FeedbackSupport from './pages/FeedbackSupport';
import ServiceTasks from './pages/ServiceTasks';

const Routes = () => (
  <Switch>
    <Route path="/capsules" component={CapsuleManagement} />
    <Route path="/bookings" component={BookingMonitoring} />
    <Route path="/users" component={UserManagement} />
    <Route path="/financial" component={FinancialControl} />
    <Route path="/feedback" component={FeedbackSupport} />
    <Route path="/service-tasks" component={ServiceTasks} />
  </Switch>
);

export default Routes;