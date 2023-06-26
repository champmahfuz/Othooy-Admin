import React from 'react';
import styles from './Loading.module.css';
import logo1 from '../../../assests/img/logo1.png';
const Loading = () => {
    return (
        <div className={`${styles.mainBody}`}>
            <div className={`${styles.container}`}>
                <div className={`${styles.ring}`}></div>
                <div className={`${styles.ring}`}></div>
                <div className={`${styles.ring}`}></div>
                {/* <span className={`${styles.loading}`}>Loading...</span> */}
                <img className={`${styles.icon}`} src={logo1} alt="" />
            </div>
        </div>
    );
};

export default Loading;