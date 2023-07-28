import { useState, useEffect } from "react";
import Header from "../components/Text/Header";
import List from "../components/List/List";
import ListElement from "../components/List/ListElement";
import Loading from "../components/Loading/Loading";
import toggleSongInArray from "../utils/toggleSongInArray";
import isSongInArray from "../utils/isSongInArray";

function Hidden() {
  const [loading, setLoading] = useState(true);
  const [likedSongs, setLikedSongs] = useState([]);
  const [hiddenSongs, setHiddenSongs] = useState([]);

  function likeSong(song) {
    const newLikedSongs = toggleSongInArray(song, likedSongs);
    setLikedSongs(newLikedSongs);
    localStorage.setItem("likedSongs", JSON.stringify(newLikedSongs));
  }

  function hideSong(song) {
    const newHiddenSongs = toggleSongInArray(song, hiddenSongs);
    setHiddenSongs(newHiddenSongs);
    localStorage.setItem("hiddenSongs", JSON.stringify(newHiddenSongs));
  }

  useEffect(() => {
    const likedSongs = JSON.parse(localStorage.getItem("likedSongs"));
    const hiddenSongs = JSON.parse(localStorage.getItem("hiddenSongs"));
    if (likedSongs) {
      setLikedSongs(likedSongs);
    }
    if (hiddenSongs) {
      setHiddenSongs(hiddenSongs);
    }
    setLoading(false);
  }, []);

  return (
    <>
      <Header>Your hidden songs:</Header>
      {loading ? <Loading /> : null}
      <List>
        {hiddenSongs.map((song) => (
          <ListElement
            hiddenPage
            isLiked={isSongInArray(song, likedSongs)}
            isHidden={isSongInArray(song, hiddenSongs)}
            likeSong={likeSong}
            hideSong={hideSong}
            light={likedSongs.length > 10000}
            key={song.id}
            song={song}
          />
        ))}
      </List>
    </>
  );
}

export default Hidden;
