import { useEffect,useState } from "react";
//import Quantity from "./Quantity";
const useDisable=(Quantity)=>{
    const[disableMin,setDisableMin]=useState(false);
    useEffect(()=>{
        if(Quantity<=0){
            setDisableMin(true);
        }else{
            setDisableMin(false);
        }
    },[Quantity]);
    return disableMin;
}
export default useDisable;