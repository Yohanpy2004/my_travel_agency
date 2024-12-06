// components/Dashboard.js
"use client";
import { useState } from 'react';
import dynamicContent from '../data/dynamicContent';

const Dashboard = ({ activeMenu }) => {
  return (
    <div className="dashboard-content">
      {dynamicContent[activeMenu] || <p>Welcome to the Dashboard!</p>}
    </div>
  );
};

export default Dashboard;
