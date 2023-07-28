function isSongInArray(song, array = []) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === song.id) {
      return true;
    }
  }
  return false;
}

export default isSongInArray;
