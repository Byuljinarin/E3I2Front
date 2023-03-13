import React from 'react';

const Td = ({item}) => {

    return (
        <>
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
        </tr>
        </>
    )
};

export default Td;