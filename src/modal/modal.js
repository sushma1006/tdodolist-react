import React, { useState } from 'react';
import './modal.css';
import { closeImage } from '../assets';

function Modal({showModal, addListDetails, hideModal}) {
    const [listDetails, setListDetails] = useState({
        listName : "",
        description : "",
    })

    const handleChangeName = (event) => {
        setListDetails({...listDetails, [event.target.name] : event.target.value})
    }

    const onSubmit = (event) => {
        console.log(listDetails);
        event.preventDefault();
        addListDetails(listDetails);
        setListDetails({listName : "", description : ""})
    }
    
    if (!showModal) {
        return null;
    }
    return (
        <div className="modal">
            <div className="modalContent">
                <div className="modalHeader">
                    <h1 className="modalTitle">Todo list</h1>
                    <img className="closeImage" src={closeImage} alt='close' onClick={hideModal}/>
                </div>
                <div className='line'></div>
                
                <form onSubmit={onSubmit}>
                    <div className='listName'>
                        <label className='lable'>Name:</label><br/>
                        <input className='input' name="listName" type="text" value={listDetails.listName} onChange={handleChangeName}/><br/>
                    </div>
                    <div className='description'>
                        <label className='lable'>Description:</label><br/>
                        <input className='input' name="description" type="text" value={listDetails.description} onChange={handleChangeName}/><br/>
                    </div>
                    <div className="modalFooter">
                        <button className="button">Save</button>
                    </div>
                </form>
                
            </div>
        </div>
    );
}

export default Modal;