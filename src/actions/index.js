// Action creator
//return an action
// named export of funcion
//anytime toupdate data with redux we have to call action creator

export const selectSong = song => {
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
