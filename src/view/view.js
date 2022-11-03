import React from "react";
import './view.css'
import format from "date-fns/format";

function View({toDoListDetail, showGrid}) {
    if (!showGrid) {
        return null;
    }
    return (
        <div className="cards">
            {toDoListDetail.map((list, id) => (
                <table className="listContent" key={id}>
                    <tbody>
                        <tr>
                            <td scope="row"><span>List Name</span></td>
                            <td>: {list.listName}</td> 
                        </tr>
                        <tr>
                            <td scope="row"><span>Description</span></td>
                            <td>: {list.description}</td> 
                        </tr>
                        <tr>
                            <td scope="row"><span>Created Date</span></td>
                            <td>: {format ( new Date(), 'dd/MM/yyyy')}</td> 
                        </tr>
                    </tbody>
                </table>
            ))}
        </div>
    );
}

export default View;