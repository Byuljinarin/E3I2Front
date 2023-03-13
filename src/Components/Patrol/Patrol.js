import React from 'react';
import styles from './Patrol.module.css';

function Patrol(){
    return <div>
        <div className={styles.LineSection}>
            <div className={styles.PatrolSection}>
                <div className={styles.PatrolVodSection}>동영상 재생될 부분</div>
                <div className={styles.PatrolInfoSection}><h3>나올 정보 시간, 마피아, 도로정보</h3></div>
            </div>
        </div>
    </div>
}

export default Patrol;