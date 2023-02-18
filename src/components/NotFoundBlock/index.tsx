import React from 'react'; 

import styles from './NotFoundBlock.module.scss';

const  NotFoundBlock:React.FC  = () => {
  return (
    <div className={styles.root}>
      <h1>Нічого не знайдено</h1>
      <span className={styles.smile}>😕</span>
    </div>
  );
}

export default NotFoundBlock;
