import React from 'react';
import styles from './SideBar.module.css';

interface sideBarProps{
  sideBar:Boolean; 
}

const SideBar: React.FC<sideBarProps> = ({sideBar}) => { 

  let drawerClasses= [styles.SideBar]
  if(sideBar){
  drawerClasses= [styles.SideBar,styles.open]

  }

  return(
  <div className={drawerClasses.join(' ')} data-testid="SideBar">
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
)};

export default SideBar;
