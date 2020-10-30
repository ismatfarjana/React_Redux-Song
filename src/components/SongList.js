import React, { Component } from "react";
import { connect } from "react-redux";
//just to get all the songs in to the song list and console.log .. to do so,-> create connect component here -> pass some configeration that gets back to provider and tell it that we ned the entire list of song here
class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="floted_content">
            <button className="button">Select Song</button>
          </div>

          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    // console.log(this.props);
    return (
      <div>
        <div>{this.renderList()}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
//connect() function is returning the function invoked by SongList
