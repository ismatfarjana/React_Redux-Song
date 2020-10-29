// Action creator
//return an action
// named export of funcion

export const selectSong = song => {
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
