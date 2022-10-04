import React, { useState } from "react";
import Buttons from "./Components/Buttons";
import Loader from "./Components/Loader";
function App() {
  const [percentage, setPercentage]=useState(0);

 

  return (  
   <div>
    <Loader strokeWidth="10"
            sqSize="200"
            percentage={percentage}/>
      <Buttons setpercentage={setPercentage} 
      percentage={percentage}/>
   </div>
  
  );
}

export default App;
