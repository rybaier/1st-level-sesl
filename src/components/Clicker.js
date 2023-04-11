import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { FcPlus, FcMinus } from "react-icons/fc";


const Clicker = () => {
    const [clickCount, SetClickCount] = useState(0)
    const [totalClicks, SetTotalClicks] = useState(0)
//    console.log(clickCount,totalClicks)
    const storedClickCount = JSON.parse(localStorage.getItem("clicks"))
    
    console.log(storedClickCount)
    useEffect(() => {
        if (totalClicks === 0 && storedClickCount) {
            SetTotalClicks(storedClickCount) 
        }
        
    },[storedClickCount, totalClicks])
    
    const changeClickCount = (buttonType) => {
        SetTotalClicks(totalClicks +1)
        localStorage.setItem("clicks", JSON.stringify(totalClicks+1))
        // the +1 accounts for the fact that the computer starts counting at 0 from null at localStorage
        if (buttonType === "minus") {SetClickCount(clickCount-1) }
        if (buttonType === 'plus')  {SetClickCount(clickCount+1) }

    }

    const clearClicks = () =>{
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div className="clicker-div">
            <h1>{clickCount}</h1>
        <div className="clicker-buttons">
            <Button size="lg" onClick={() => changeClickCount("minus")} ><FcMinus size={"50px"}/></Button>
            <Button size="lg" onClick={() => changeClickCount("plus")} ><FcPlus size={"50px"}/></Button>
        </div>
            <h1>Total Clicks</h1>
            <h1>{totalClicks}</h1>
            <Button onClick={() => clearClicks()}>Clear Total Clicks Caution Erases Local Storage!</Button>
        </div>
    )
}


export default Clicker
