// data/dynamicContent.js
import Link from 'next/link';

const dynamicContent = {
  home: <p>Welcome to the Home Page!</p>,
  account: (
    <div>
      <p>Account Section</p>
      <Link href="/dashboard/account/profile">Profile</Link>
      <Link href="/dashboard/account/edit">Edit Profile</Link>
    </div>
  ),
  statistics: <p>Here are your statistics.</p>,
  notifications: <p>Notification settings and history here.</p>,
  // Ajoutez d'autres sections ici selon les pages
};

export default dynamicContent;
