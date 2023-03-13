import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import Tr from './Tr';

const Board = () => {
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState('');
  const [modalOn, setModalOn] = useState(false);

  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기
  const nextId = useRef(11);

//더미 데이터 호출
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setInfo(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleSave = (data) => {
    //데이터 수정하기
    if (data.id) { //수정 데이터에는 id가 존재
      setInfo(
        info.map(row => data.id === row.id ? {
          id: data.id,
          name: data.name,
          email: data.email,
          phone: data.phone,
          website: data.website,
        } : row))

    } else { //바로 추가하기
      // 데이터 추가하기 방법1
      // setInfo((prev) => {
      //   return [ ...prev, {
      //     id: nextId.current,
      //     name: data.name,
      //     email: data.email,
      //     phone: data.phone,
      //     website: data.website
      //   }]
      // });

      //데이터 추가하기 방법2
      setInfo(info => info.concat(
        {
          id: nextId.current,
          name: data.name,
          email: data.email,
          phone: data.phone,
          website: data.website
        }
      ))
      nextId.current += 1;
    }
  }

  const handleRemove = (id) => {
    setInfo(info => info.filter(item => item.id !== id));
  }

  const handleEdit = (item) => {
    setModalOn(true);
    const selectedData = {
      id: item.id,
      name: item.name,
      email: item.email,
      phone: item.phone,
      website: item.website
    };
    console.log(selectedData);
    setSelected(selectedData);
  };

  const handleCancel = () => {
    setModalOn(false);
  }

  const handleEditSubmit = (item) => {
    console.log(item);
    handleSave(item);
    setModalOn(false);
  }

  return (
    <div>
      <div>고객 정보 리스트</div>
      <table>
        <thead>
          <tr>
            <th>Id.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Website</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit} />
      </table>
    </div>
  );
};

export default Board;