import React, { useState } from "react";

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
        <>
            <div className="external">
                <div className="internal">
                    <h1>TODO </h1>


                    <input type="text" placeholder="Add New Task" className="taskinput" value={initialval} onChange={(e) => setInitialval(e.target.value)} />
                    <button type="button" className="addbutton" onClick={addTask}> Add </button>
                    <button type="button" className="clearbutton" onClick={clearall} >Reset</button>




                    {
                        listval.map((item, index) => {
                            return (<>
                                <p className="list" key={index}>{item}  <button type="button" className="removebutton" onClick={() => removeTask(index)}>Remove</button></p>

                            </>)


                        })
                    }



                </div>

            </div>
            <p className="name">&#9827; anish_chaurasia</p>


        </>



    );

}


export default App;

