import React from 'react';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
import SideBar from '../NavBar/SideBar/SideBar';
import styles from './Container.module.css';
// interface MyCodeParams {
//   sideBarShow: any
// }

const Container: React.FC = () => {
  const [sideBar, setSideBar] = React.useState(false)

   const sideBarShow =():void => {
    setSideBar(true)
}
  return(
  <div className={styles.Container} data-testid="Container">
    <NavBar sideBarShow={sideBarShow} />
  {sideBar&&<SideBar />}  
    <Home />
  </div>
)};

export default Container;
