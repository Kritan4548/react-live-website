import React from "react";
import { useState } from "react/cjs/react.development";
import ToDoLists from "./ToDoLists";
const App = () => {
  const [inputList,setInputList]=useState("");
  const[item,setItem]=useState([]);
  const itemEvent = (event) =>{
    setInputList(event.target.value);

  };
  const listOfItems = () => {
    setItem((oldItems) => {
return[...oldItems,inputList];
  })
  setInputList("");
};
  
  return(
<>
<div className="main-box">
  <div className="center-box">
    <br />
    <h1>TODO List</h1>
    <br />

    <input type="text" value={inputList} placeholder="Enter the fruit" onChange={itemEvent}/>
    <button onClick={listOfItems}>+</button>
    <ol>
     {/*<li>{inputList}</li>*/}
     
  {item.map((itemval) => {
  return <ToDoLists text={itemval} />;
  })
     }
    </ol>
  </div>
</div>
</>
  );
}
export default App;