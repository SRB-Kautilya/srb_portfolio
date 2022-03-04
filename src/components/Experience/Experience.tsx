import React from 'react';
import styles from './Experience.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Experience: React.FC = () => {
  const exp = ['experience', 'content']
  const eachItem = [styles.timeLineItemInner,styles.outerShadow]
  return (
    <div className={styles.ExperienceContent} data-testid="Experience">
      <div className={styles.row}>
        <div className={exp.join(' ')}>
          <div className={styles.ExperienceTitle}>
            <h2 >My Experience</h2>
          </div>
          <div className={styles.row}>
            <div className={styles.timeLine}>
              <div className={styles.row}>
                <div className={styles.timeLineItem}>
                  <div className={eachItem.join(' ')}>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <span> Dec 28 - Present</span>
                  <h3> Full Stack Developer</h3>
                  <h4>StateFarm, IL</h4>
                  <p></p>
                  </div>
                </div>
                <div className={styles.timeLineItem}>
                  <div className={eachItem.join(' ')}>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <span> feb  2019- DEC 2019</span>
                  <h3> Ftont End Developer</h3>
                  <h4>Morgan Stanley, NY</h4>
                  <p></p>
                  </div>
                </div>
                <div className={styles.timeLineItem}>
                  <div className={eachItem.join(' ')}>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <span> Jan 2019 - June 2019</span>
                  <h3> FrontEnd Developer</h3>
                  <h4>StateFarm, IL</h4>
                  <p></p>
                  </div>
                </div>
                <div className={styles.timeLineItem}>
                  <div className={eachItem.join(' ')}>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <span> Dec 2015 - July 2018 </span>
                  <h3> Research Assistant</h3>
                  <h4>CUNY, NY</h4>
                  <p></p>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>

      </div>
    </div>
  )
};

export default Experience; 
