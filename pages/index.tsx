import React from 'react';
import H1 from 'components/Typography/H1';
import { getDashboardLayout } from 'layouts/DashboardLayout';

function Dashboard() {
  return <H1>Main page</H1>;
}

Dashboard.getLayout = getDashboardLayout;

export default Dashboard;
