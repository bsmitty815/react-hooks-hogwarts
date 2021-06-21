import React, {useState} from "react";
import Nav from "./Nav";
import HogsDisplay from "./HogsDisplay";
import hogs from "../porkers_data";

function App() {
  const [hogsInfo, setHogsInfo] = useState(hogs)

  function showGreasedHogsOnly() {
    //if clicked only show greased hogs
    const newArray = [...hogsInfo]
    setHogsInfo(newArray.filter((hogs) => {
      return hogs.greased === true
      //? {"display" : "block"} : {"display" : "none"}
    }))
  }

  function showAllHogs() {
    setHogsInfo(hogs)
  }

  function sortByName() {
    //if clicked sort hogs by name
    const newArray = [...hogsInfo]
    setHogsInfo(newArray.sort((hogOne, hogTwo) => {
      return hogOne.name > hogTwo.name ? 1 : -1
    }))
  }

  function sortByWeight() {
    const newArray = [...hogsInfo]
    setHogsInfo(newArray.sort((hogOne, hogTwo) => {
      return hogOne.weight > hogTwo.weight ? 1 : -1
    }))
    }

  return (
    <div className="App">
      <Nav />
      <button onClick={showAllHogs}>ShowAllHogs</button>
      <button onClick={showGreasedHogsOnly}>Greased Hogs</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByWeight}>Sort By Weight</button>
      <p>

      </p>
      <div className="ui grid container">
      {hogsInfo.map((hogData) => (
        <HogsDisplay
        key={hogData.name}
        hogImage={hogData.image}
        hogName={hogData.name}
        hogSpecialty={hogData["specialty"]}
        hogGreased={hogData.greased}
        hogWeight={hogData.weight}
        hogMedal={hogData["highest medal achieved"]} 
        
        />
      ))}
      </div>
    </div>
  );
}

export default App;
