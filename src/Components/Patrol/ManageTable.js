import React, { useState, useEffect } from "react";
import { getManageApplication } from "./api";
import TableRow from "./TableRow";

const ManageTable = (props) => {
    const headerMeta = [
        "탐지 시간",
        "찾은 마피아",
        "도로의 상태",
    ];

    const [tableData, setTableData] = useState([getManageApplication(1)]);

    return (
        <>
        <h3>Manage Table</h3>
        <div>
            {tableData.length !== 0 && (
            <table>
                <thead>
                <tr>
                   {headerMeta.map(i=><th>{i}</th>)}
                </tr>
                </thead>
                <tbody>
                {tableData.map((d, i) => {
                    return (<TableRow key={i} data={d}/>);
                }
                )}
                </tbody>
            </table>
            )}
        </div>
        </>
    );
}

export default ManageTable;