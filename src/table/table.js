import React,{useState} from "react";
import './table.css'
import format from "date-fns/format";

function Table({toDoListDetail, showTable, deleteRow, setToDoListDetail}) {
    const [editId, setEditId] = useState(null);
    const [editTableDetails, setEditTableDetails] = useState({
        listName : "",
        description : "",
    })

    const handleChangeValue = (e) => {
        setEditTableDetails({...editTableDetails, [e.target.name] : e.target.value})
    };

    const editTableValue = (id, list) => {
        setEditId(id);
        const listValues = {
            listName: list.listName,
            description: list.description,
        };
        setEditTableDetails(listValues);
    }

    const saveTableValue = (id) => {
        const editedValues = {
            listName: editTableDetails.listName,
            description: editTableDetails.description, 
        }
        const editedData = [...toDoListDetail];
        const index = toDoListDetail.findIndex(( editedValues, index) => index === id);
        editedData[index] = editedValues;
        setToDoListDetail(editedData);
        setEditId(null);
    }

    if (!showTable) {
        return null;
    }
    return (
        <div className="tableItems">
            <table className="listTable">
                <thead>
                    <tr>
                        <th>List Name</th>
                        <th>Description</th>
                        <th>Created Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {toDoListDetail.map((list, id) => {
                        return (
                            <>
                                {editId == id ? (
                                    <tr key={id}>
                                        <td><input type="text" name="listName" value={editTableDetails.listName} onChange={handleChangeValue}/></td>
                                        <td><input type="text" name="description" value={editTableDetails.description} onChange={handleChangeValue}/></td>
                                        <td>{format ( new Date(), 'dd/MM/yyyy')}</td>
                                        <td><button className="tableButton" onClick={() => saveTableValue(id)}>Save</button></td>
                                        <td><button className="tableButton" onClick={() => deleteRow(id)}>Delete</button></td>
                                    </tr>
                                ) : (
                                    <tr key={id}>
                                        <td>{list.listName}</td> 
                                        <td>{list.description}</td> 
                                        <td>{format ( new Date(), 'dd/MM/yyyy')}</td>
                                        <td><button className="tableButton" onClick={() => editTableValue(id,list)}>Edit</button></td>
                                        <td><button className="tableButton" onClick={() => deleteRow(id)}>Delete</button></td>
                                    </tr>
                                )}
                            </>
                        );
                    })}
                </tbody>  
            </table>
        </div>
    );
}

export default Table;



