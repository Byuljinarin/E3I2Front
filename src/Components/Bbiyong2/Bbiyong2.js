import React from 'react';
import styles from './Bbiyong2.module.css';
import SearchButton from './search.png';

function Vod(){


    return <div>
        <div className={styles.SearchSection}>
        <button className={styles.SearchButton}><img src={SearchButton} className={styles.SearchButton} alt="SearchButton"></img></button>
        <input className={styles.VodSearch} placeholder="키워드 검색"></input>
        
        </div>
        <div className={styles.BodySection}>
            <div className={styles.BodySectionTitle}>23.03.03 (금) 대전 서구 한밭대로 733, 오후 8시 순찰 일지 (타이틀 예시)</div>
            <div className={styles.BodySectionVod}>동영상 나올 부분</div>
        </div>
        <div className={styles.BodyEndSection}>
            <div className={styles.BodySearchResult}>23.03.03 (금) 대전 서구 한밭대로 733, 오후 5시 순찰 일지 (검색결과 예시)</div>
            <div className={styles.BodySearchResult2}>23.03.03 (금) 대전 서구 한밭대로 733, 오후 2시 순찰 일지 (검색결과 예시)</div>
            <div className={styles.BodySearchResult}>23.03.03 (금) 대전 서구 한밭대로 733, 오후 5시 순찰 일지 (검색결과 예시)</div>
            <div className={styles.BodySearchResult2}>23.03.03 (금) 대전 서구 한밭대로 733, 오후 2시 순찰 일지 (검색결과 예시)</div>
        </div>

        

    </div>
};

export default Vod;