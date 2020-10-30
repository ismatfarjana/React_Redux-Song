import React from "react";
import "../App.css";
import { selectSong } from "../actions";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div>
      <div>
        <SongList />
      </div>
      <div>
        <SongDetail />
      </div>
    </div>
  );
};

export default App;
