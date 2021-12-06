import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

import locked from './images/locked.svg'
import unlocked from './images/unlocked.svg'
import key from './images/key.svg'


export default function Part2(){
    const[isUnlocked,setisUnlocked]=useState(false)
    let navigate = useNavigate()

    const onDragOver = (e) => {
        e.stopPropagation();
        e.preventDefault();
    }

    return(
        <div>
            <h3>Part 2</h3>
            <p>The below should take you to the final page after you drag and drop the key to the lock, and then click the unlocked lock.<p>
            {isUnlocked === false?
                <img src={locked} draggable={false} onDrop={()=>setisUnlocked(true)} onDragOver={(e)=>onDragOver(e)}/>
                :
                <img className="unlocked" src={unlocked} onClick={()=>navigate('/congrats')} />
            }
            {isUnlocked === false?
                <img src={key} className='key'/>
                :
                <></>
            }
        </div>
    )
}