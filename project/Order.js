//import {Link} from 'react-router-dom';
import {useEffect, useState} from "react";
import Quantity from "./Quantity";
import Price from "./Price";


//import Quantity from "./Quantity";
//import useDisable from "./useDisable";
const Order=()=>{
    const [name, setName] = useState();
    const [tasks, setTasks] = useState([]);
    const[price, setPrice]  =useState();
    
 function readTask(){
    console.log(tasks)
    fetch("http://localhost:4000/todotask")
    .then((response)=>response.json())
    .then((data)=> setTasks(data.filter((task)=>task.task.includes(name))));
 }
    useEffect(()=>{readTask(tasks)},[name]);
    console.log(tasks);
return(
        <div className="app">
            <h2>Order Page</h2>
            <h3><label>Search:</label></h3><input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <h3>{name}</h3>
            <ul className="nty">{tasks.map(
                (tasks)=>(<li key={tasks.id}><input type="text" value={tasks.task}></input></li>))}
                
                <Quantity></Quantity>
                <Price></Price>
               
             
                </ul>
        </div>
)
};

export default Order;