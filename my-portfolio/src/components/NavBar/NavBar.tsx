import React from 'react';
import styles from './NavBar.module.css';
import SideBarButton from './SideBar/SideBarButton'

interface navBarProps{
  sideBarShow:any 
}

const NavBar: React.FC = (sideBarShow) => {


  return(
  <div className={styles.NavBar} data-testid="NavBar">
   <header className={styles.header}>
     <h1 className={styles.logo}>SRBPortfolio</h1>
     <nav>
       <ul className={styles.nav_links}>
       <li><a href=''>Home</a></li>
       <li><a href=''>About</a></li>
       <li><a href=''>Experience</a></li>
       <li><a href=''>Contact</a></li>
       </ul>
     </nav>
     {/* <a className='cta'href=''><button>Contact</button></a> */}
     <div>
       <SideBarButton sideBarShow={sideBarShow} />
     </div>
   </header>
  </div>

  )};

export default NavBar;
