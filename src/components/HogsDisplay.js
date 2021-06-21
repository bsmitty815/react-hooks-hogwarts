import React, {useState} from "react";


function HogsDisplay({hogImage, hogName, hogSpecialty, hogGreased, hogWeight, hogMedal}) {
    const [showHogInfo, setShowHogInfo] = useState(true)


    function handleClick() {
        setShowHogInfo((showHogInfo) => !showHogInfo) //used to show and hide the information
    }


    return (

            <div className="ui four wide column" id={hogName} onClick={handleClick}>
               <p><img style={{width:"100%"}} src={hogImage} alt={hogImage} /></p> // sets the width so that it can fit int he column
               <p>{hogName}</p>
                <div style={ showHogInfo ? {"display" : "none"} : {"display" : "block"}}>
                    <p>{hogSpecialty}</p>
                    <p>{hogGreased.toString()}</p>
                    <p>{hogWeight}</p>
                    <p>{hogMedal}</p>
                </div>
            </div>
            


    )
}

export default HogsDisplay;