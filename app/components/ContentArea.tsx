// app/components/ContentArea.tsx

import React from 'react';
import styles from '../../styles/dashboard.module.css';

const ContentArea = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.contentArea}>{children}</div>;
};

export default ContentArea;
