import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faChartBar, faBell, faComment, faCreditCard, faLifeRing, faSignOutAlt, faTags, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/dashboard.module.css';

const Sidebar = ({ isVisible }) => {
  return (
    <div className={`${styles.sidebar} ${isVisible ? styles.sidebarVisible : ''}`}>
      <ul className={styles.menuList}>
        <div className={styles.categoryTitle}>General</div>
        <li>
          <Link href="/dashboard">
            <FontAwesomeIcon icon={faHome} className="fa-icon" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/account/profile">
            <FontAwesomeIcon icon={faUser} className="fa-icon" />
            <span>Account</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/statistics">
            <FontAwesomeIcon icon={faChartBar} className="fa-icon" />
            <span>Statistics</span>
          </Link>
        </li>

        <div className={styles.categoryTitle}>Feedback & Promotions</div>
        <li>
          <Link href="/dashboard/promotions">
            <FontAwesomeIcon icon={faTags} className="fa-icon" />
            <span>Promotions</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/notifications/view">
            <FontAwesomeIcon icon={faBell} className="fa-icon" />
            <span>Notifications</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/comments/view">
            <FontAwesomeIcon icon={faComment} className="fa-icon" />
            <span>Comments</span>
          </Link>
        </li>

        <div className={styles.categoryTitle}>Payments & Subscriptions</div>
        <li>
          <Link href="/dashboard/payments">
            <FontAwesomeIcon icon={faCreditCard} className="fa-icon" />
            <span>Payment History</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/subscription/plan">
            <FontAwesomeIcon icon={faFileInvoiceDollar} className="fa-icon" />
            <span>Subscription Plan</span>
          </Link>
        </li>

        <div className={styles.categoryTitle}>Support & Help</div>
        <li>
          <Link href="/dashboard/support/contact">
            <FontAwesomeIcon icon={faLifeRing} className="fa-icon" />
            <span>Support</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/logout">
            <FontAwesomeIcon icon={faSignOutAlt} className="fa-icon" />
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
