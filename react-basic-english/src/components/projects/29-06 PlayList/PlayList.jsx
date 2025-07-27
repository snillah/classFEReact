import React, { useState } from "react";

const initalSong = [
    {id:1,title:"song1",artist:"artost"}
];

function PlayList() {
  const [songs, setSongs] = useState(initalSong);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSong = songs.filter((song)=> song?.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="">
      <h3>My 90s PlayList</h3>
      <input type="input"
      placeholder="Seach ...."
      className="search-bar"
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}
      />
      <div className="song-list">
        <ul>
          {filteredSong.map((song) => {
            return (
              <li>
                <span>{song?.title}</span>
                <span>{song?.artist}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default PlayList;