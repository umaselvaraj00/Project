import { useState } from "react";
import useDisable from "./useDisable";

const Quantity =()=>{
    const [quantity,setQuantity]=useState(0);

    const QuantityMax =()=>{
        setQuantity(quantity+1);
     
    }
    const QuantityMin=()=>{
        setQuantity(quantity-1);
      
    };
    
    const disableMin=useDisable(quantity);
    return(
        <div className="app">
        <h3><lable>Product Quantity:</lable></h3>
        <button onClick={QuantityMax}>+</button>
        <input type ="text" className="qty" value ={quantity} size="1"></input>
        <button onClick={QuantityMin}  disabled={disableMin}>-</button><br></br><br></br>

       <h3> <lable className="prc">Price:</lable></h3>
      
        </div>
    )
    
}
export default Quantity;