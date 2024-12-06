import React, { useState } from 'react';
import { FaBars, FaSearch, FaUserCircle } from 'react-icons/fa';
import Sidebar from './Sidebar'; // Assurez-vous que Sidebar est importé
import styles from '../../styles/dashboard.module.css';

const Topbar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      <div className={styles.topbar}>
        <button className={styles.hamburger} onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>
        <h1>Mon Dashboard</h1>
        <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Rechercher..." 
            className={styles.searchInput} 
          />
        </div>
        <button className={styles.accountSwitch}>
          <FaUserCircle size={30} />
        </button>
      </div>

      {/* Affichez ou cachez la Sidebar en fonction de l'état */}
      <Sidebar isVisible={isSidebarVisible} />
    </div>
  );
};

export default Topbar;
