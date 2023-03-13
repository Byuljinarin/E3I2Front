import React, { useEffect, useState} from "react";
import axios from 'axios';
import Tr from './Tr';

const Board = () => {
  const [info, setInfo] = useState([]);


//더미 데이터 호출
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setInfo(res.data))
      .catch(err => console.log(err));
  }, []);


  return (
    <div>
      <div>고객 정보 리스트</div>
      <table>
        <thead>
          <tr>
            <th>Id.</th>
            <th>시간</th>
            <th>마피아</th>
            <th>도로 상태</th>
          </tr>
        </thead>
        <Tr info={info}/>
      </table>
    </div>
  );
};

export default Board;