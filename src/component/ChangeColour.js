import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../feature/theme';

function ChangeColour(props) {
    const [color,setColor] = useState("");
    const dispatch = useDispatch();
    return (
        <div>
            <input
            type ="text"
            onChange={(event)=>setColor(event.target.value)}
            ></input>
        <button onClick={()=>dispatch(changeColor(color))} >Change Color</button>
        </div>
    );
}

export default ChangeColour;