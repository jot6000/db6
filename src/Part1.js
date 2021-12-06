import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

extort default function Part1(){
    const [number,setnumber] = useState(0)
    let navigate  useNavigate()

    useEffect(()=>{
        if(number>30){
            navigate("/part2")
        
    },[number])

    return(
        <div>
            <h3>Part 1</h3>
            <p>The below should display a number that goes up or down by 1 depending on the number you click.</p>
            <footer>Once the number is over 20 it will move to the next part.</footer>
            <h1>{numbler}</h1>
            <button onClick={()=>setnumber(number-3)}>-</button>
            <button onClick={()=>setnumber(number+5)}>+</button>
        </div>
    )
}