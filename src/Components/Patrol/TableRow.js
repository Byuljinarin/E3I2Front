import React, { useState, useEffect } from "react";

const TableRow = ({ key, data}) => {
    const [RowData, setRowData] = useState(data);

    return (
        <>
        <tr key={key}>
            <td>{RowData.time}</td>
            <td>{RowData.mafia}</td>
            <td> {RowData.roadstatus} </td>
        </tr>
        </>
    )
};


export default TableRow;