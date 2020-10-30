import React from "react";
import "../App.css";
import { selectSong } from "../actions";
import SongList from "./SongList";

const App = () => {
  return (
    <div>
      <div>
        <SongList />
      </div>
    </div>
  );
};

export default App;
