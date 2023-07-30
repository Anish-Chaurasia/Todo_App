import React, { useState } from "react";
import {  IoReloadOutline } from "react-icons/io5";
import { FiTrash2, FiPlus } from "react-icons/fi";

function App() {

    const [initialval, setInitialval] = useState("");
    const [listval, setListval] = useState([]);

    function addTask() {

        setListval((listval) => {
            const updated = [...listval, initialval];
            setInitialval("")
            return updated;
        })
    }

    function removeTask(x) {
        const newarry = listval.filter((val, id) => { return x != id; });
        setListval(newarry);

    }

    function clearall() {
        setListval([]);
    }


    return (

        <div>
            <h2 >{listval.length}  Task in "TODO LIST"</h2>
           

            < div className="container">

                <div className="item1">

                    <input id="text" className="item1-item" type="text" placeholder="Add New Task" title="Type New Task" value={initialval} onChange={(e) => setInitialval(e.target.value)} />
                    <div className="item1btn">
                        <button id="addbtn" className="item1-item" type="button" title="Add Task" onClick={addTask}> <FiPlus /> </button>
                        <button id="resetbtn" className="item1-item" type="button" title="Delete All Task" onClick={clearall} ><IoReloadOutline /></button>
                    </div>
                </div>

                {
                    listval.map((item, index) => {
                        return (<div className="item2">
                            <p className="item2-item" key={index}>{item} </p>
                            <button className="item2-item" type="button" id="removebtn" title="Delete Task" onClick={() => removeTask(index)}><FiTrash2 /></button>


                        </div>)


                    })
                }
            </div>



        </div>);

}


export default App;

