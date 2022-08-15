import { useState } from "react";
// import useDisable from "./useDisable";

function Price(){
    
        const [price,setPrice]=useState([]);

        useEffect(()=>{
        fetch("http://localhost:4000/todotask")
        .then(response=>{
            setPrice(response.price)
        })
    },[]);
    
        console.log(Price);
 

    return(
    <div className="app">
    {Price.map((price)=>{
        return{price}
    })}
    <input type="text" value={Price} onChange={(e)=>setPrice(e.target.value)}/>
    </div>
)
};
export default Price;