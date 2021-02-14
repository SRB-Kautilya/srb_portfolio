import React from 'react';
import styles from './SideBar.module.css';

const SideBar: React.FC = () => (
  <div className={styles.SideBar} data-testid="SideBar">
   <header className={styles.header}>
     <nav>
       <ul className={styles.nav_links}>
       <li><a href=''>Home</a></li>
       <li><a href=''>About</a></li>
       <li><a href=''>Experience</a></li>
       <li><a href=''>Contact</a></li>
       </ul>
     </nav>
     {/* <a className='cta'href=''><button>Contact</button></a> */}
   </header>
  </div>
);

export default SideBar;
