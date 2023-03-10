import React from 'react';
import styles from './Patrol.module.css';

function Patrol(){


    return <div>
        <div className={styles.PatrolSection}>
            <div>
                <div className={styles.PatrolVodSection}>동영상 재생될 부분</div>
                <div className={styles.PatrolInfoSection}>나올정보: 날짜, 마피아, 도로정보
                밑에서 부터 하나씩 출력
                </div>
            </div>
        </div>
    </div>
}

export default Patrol;