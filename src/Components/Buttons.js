import React from "react";

export default function Buttons(props) {



  return (
    <div className="buttons">
      <button 
     onClick = {setInterval(()=>props.setpercentage(props.percentage+1),1000)}
        className="start">
        Start
      </button>
      <button type="button" className="pause" onClick={props.setpercentage(props.percentage)}>
        Pause
      </button>
    </div>
  );
}
