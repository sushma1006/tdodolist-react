import React, {useState} from 'react';
import './App.css'
import Modal from './modal/modal';
import View from './view/view';
import Table from './table/table'

function App() {
  const [showModal, setShowModal] = useState(false);
  const [toDoListDetail, setToDoListDetail] = useState([]);
  const [showGrid, setShowGrid] = useState(true);
  const [showTable, setShowTable] = useState(false);
  
  const addListDetails = (information) => {
    setToDoListDetail([...toDoListDetail, information]);
  }
  console.log(toDoListDetail) 

  const deleteRow = (id) => {
    const row = [...toDoListDetail];
    row.splice(id,1);
    setToDoListDetail(row);
  }
   
  const gridView = () => {
    setShowGrid(true);
    setShowTable(false);
  }

  const tableView = () => {
    setShowGrid(false);
    setShowTable(true);
  }

  return (
    <div className='todo'>
      <div className='container'>
        <h1 className='Heading'>Todo list</h1>
        <div className='buttons'>
          <button className="todobutton" onClick={() => setShowModal(true)}>Create</button>
          <button className="todobutton" onClick={gridView}>Grid</button>
          <button className="todobutton" onClick={tableView}>Table</button>
        </div>
        <Modal showModal={showModal} addListDetails={addListDetails} hideModal={() => setShowModal(false)}/>
        <View toDoListDetail={toDoListDetail} showGrid={showGrid}/>
        <Table deleteRow={deleteRow} showTable={showTable} toDoListDetail={toDoListDetail} setToDoListDetail={setToDoListDetail}/>
      </div>
    </div>  
  );
}

export default App;
