import {useEffect, useState} from "react";
import "./Order.css";
const Order=()=>{
    const [name, setName] = useState();
    const [tasks, setTasks] = useState([])

 function readTask(){
    console.log(tasks)
    fetch("http://localhost:4000/todotask")
    .then((response)=>response.json())
    .then((data)=> setTasks(data.filter((task)=>task.task.includes(name))));
 }
 useEffect(()=>{readTask(tasks)},[name]);
    console.log(tasks);
return(
    <div className="odr">
        <h2>Order Page</h2>
       <h4> <label>Search:</label></h4><input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <h3>{name}</h3>
        <ul className="qty">{tasks.map(
            (tasks)=>(<li key={tasks.id}><input type="text" value={tasks.task}></input></li>))}
        
        </ul>
        </div>)
}


export default Order;
