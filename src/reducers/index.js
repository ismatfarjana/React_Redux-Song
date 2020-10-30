//2 reducers - list of song, selected song
//return array of object of songs(static now)
//selected songreducers takes two arguments: 1. at the begining there will be no song selected, so the selectedsoong will be null, second argumnt action object have type and payload properties
//it scans : if the action type is === to SONG_SELECTED type from the index.js file of actions folder it will return the slected song. otherwise it will return the selected song which is null at the begining
import { combineReducers } from "redux"; // named import needs curly braces

const songsReducer = () => {
  return [
    { title: "song 1", durations: "4:00" },
    { title: "song 2", durations: "3:00" },
    { title: "song 3", durations: "5:00" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
//key to the combined reducer object are the key to the state object
