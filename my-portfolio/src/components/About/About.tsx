import React from 'react';
import styles from './About.module.css';
import image from '../../assets/cut-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faFacebookSquare, faInstagram, faLinkedin, faTwitter, } from '@fortawesome/free-brands-svg-icons';

const About: React.FC = () => {
  let about = [styles.aboutSection, styles.section]
  let imgDiv = [styles.imgBoxDiv, styles.innerShadow]
  let img = [styles.imgBox, styles.outerShadow]
  let socialLinkIcons = [styles.outerShadow, styles.hoverInShadow, styles.socialIcon]

  return (
    <div className={about.join(' ')} data-testid="About">
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.sectionTitle}>
            <h2 data-heading='main info'>About Me</h2>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.aboutImage}>
            <div className={imgDiv.join(' ')}>
              <img className={img.join(' ')} src={image} alt='profile-pic'></img>
            </div>
            <div className={styles.socialLinks}>
              <a href='#' className={socialLinkIcons.join(' ')}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href='#' className={socialLinkIcons.join(' ')}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href='#' className={socialLinkIcons.join(' ')}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href='#' className={socialLinkIcons.join(' ')}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <div className={styles.aboutInfo}>
            <p><span>Hi! My Name is Shashank</span>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century
           who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
         </p>
         <ul>
            <div className={styles.skillContainer}>
                <li className={styles.skillContainerItem}> Javascript(Es6+)</li>
                <li className={styles.skillContainerItem}> HTML & CSS</li>
                <li className={styles.skillContainerItem}>Angular </li>
                <li className={styles.skillContainerItem}>React </li>
                <li className={styles.skillContainerItem}>Typescript</li>
                <li className={styles.skillContainerItem}>Node.js</li>
            </div>
        </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
