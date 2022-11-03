import React from "react";

function Edit({editTableDetails, id}) {
    return(
        <tr key={id}>
        <td><input type="text" name="listName" value={editTableDetails.listName} onChange={changeValue}/></td>
        <td><input type="text" name="description" value={editTableDetails.description} onChange={changeValue}/></td>
        <td>{format ( new Date(), 'dd/MM/yyyy')}</td>
        <td><button className="tableButton" onClick={saving}>Save</button></td>
        <td><button className="tableButton" onClick={() => deleting(id)}>Delete</button></td>
    </tr>
    )
}

export default Edit;