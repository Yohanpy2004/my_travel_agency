// app/components/DashboardLayout.tsx

import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import styles from '../../styles/dashboard.module.css';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.dashboardLayout}>
      <div className={styles.mainContent}>
        <Topbar />
        <div className={styles.contentArea}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
