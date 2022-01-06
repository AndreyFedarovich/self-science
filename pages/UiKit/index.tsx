import React from 'react';
import { getDashboardLayout } from 'layouts/DashboardLayout';
import UiKit from 'screens/UiKit';

function PageUiKit() {
  return <UiKit />;
}

PageUiKit.getLayout = getDashboardLayout;

export default PageUiKit;
