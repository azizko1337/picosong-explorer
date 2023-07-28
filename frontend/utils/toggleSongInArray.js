function toggleSongInArray(song, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === song.id) {
      array.splice(i, 1);
      return array;
    }
  }
  array.push(song);
  return array;
}

export default toggleSongInArray;
