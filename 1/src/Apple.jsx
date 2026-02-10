import React from "react";
import TestComp from "./TestComp";
function Apple() {
    const Mango=()=>{
        return(
            <h1>Welcome to React</h1>
        );
    }
    const Grpaes=()=>{
        return(
            <div>
            <h1>Gapres created</h1>

        </div>
        );
    }
    return (
        <div>
            <h2>Hello World</h2>
            <Mango />
            <Grpaes />
            <TestComp />
        </div> 
    );
}
export default Apple;