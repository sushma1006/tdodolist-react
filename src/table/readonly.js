import React from "react";

function Readonly() {
    return(
        <tr key={id}>
        <td>{list.listName}</td> 
        <td>{list.description}</td> 
        <td>{format ( new Date(), 'dd/MM/yyyy')}</td>
        <td><button className="tableButton" onClick={editing}>edit</button></td>
        <td><button className="tableButton" onClick={() => deleting(id)}>Delete</button></td>
    </tr>
    )
}

export default Readonly;