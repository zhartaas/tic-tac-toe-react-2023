import { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import Winner from "./components/Winner.jsx";
import Grid from "./components/Grid";

function App() {
  const [grid, setGrid] = useState([
    { id: 1, text: "" },
    { id: 2, text: "" },
    { id: 3, text: "" },
    { id: 4, text: "" },
    { id: 5, text: "" },
    { id: 6, text: "" },
    { id: 7, text: "" },
    { id: 8, text: "" },
    { id: 9, text: "" },
  ]);
  const [user, setUser] = useState(true);
  const [winner,setWinner] = useState(false);
  function handlePlay(elementID) {
    //NO NO push splice pop shift unshift
    //OK map forEach slice  filter find some
    const newGrid = grid.map((item) => {
      if (item.id === elementID && !item.text) {
        return { ...item, text: user ? "X" : "O" };
      } else return item;
    });
    setUser(!user);
    setGrid(newGrid);

    if(newGrid[0].text && newGrid[0].text===newGrid[4].text && newGrid[4].text===newGrid[8].text ) {
      console.log("winner: " + newGrid[elementID-1].text);
      setWinner(true);
      return;
    }
    if(newGrid[0].text && newGrid[0].text===newGrid[1].text && newGrid[1].text===newGrid[2].text ) {
      console.log("winner: " + newGrid[elementID-1].text);
      setWinner(true);

      return;
    }
    if(newGrid[0].text && newGrid[0].text===newGrid[3].text && newGrid[3].text===newGrid[6].text ) {
      console.log("winner: " + newGrid[elementID-1].text);
      setWinner(true);

      return;

    }

    if(newGrid[1].text && newGrid[1].text===newGrid[4].text && newGrid[4].text===newGrid[7].text ) {
      console.log("winner: " + newGrid[elementID-1].text);
      setWinner(true);

      return;

    }

    if(newGrid[2].text && newGrid[2].text===newGrid[4].text && newGrid[4].text===newGrid[6].text ) {
      console.log("winner: " + newGrid[elementID-1].text);
      setWinner(true);

      return;

    }

    if(newGrid[2].text && newGrid[2].text===newGrid[5 ].text && newGrid[5].text===newGrid[8].text ) {
      console.log("winner: " + newGrid[elementID-1].text);
      setWinner(true);

      return;

    }

    if(newGrid[3].text && newGrid[3].text===newGrid[4].text && newGrid[4].text===newGrid[5].text ) {
      console.log("winner: " + newGrid[elementID-1].text);
      setWinner(true);

      return;

    }

    if(newGrid[6].text && newGrid[6].text===newGrid[7].text && newGrid[7].text===newGrid[8].text ) {
      console.log("winner: " + newGrid[elementID-1].text);
      setWinner(true);

      return;

    }

    console.log(newGrid);
    console.log(elementID-1);




  }

  if (winner) {
    let winner = "";
    if(!user) {
      winner = "X";
    }else {
      winner = "O"
    }
    return (
        <MainLayout>
          <Winner user={winner} />
        </MainLayout>
    );
  }

  return (
      <MainLayout>
        <Grid grid={grid} handlePlay={handlePlay} />
      </MainLayout>
  );
}

export default App;