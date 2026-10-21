export function getFirst(array) {
  return array[0];
}

export function getLast(array) {
  return array[array.length - 1];
}

export function getFirstLast(array) {
  if (array.length <= 1) {
    return array;
  }

  return [array[0], array[array.length - 1]];
}

export function sharesFirstLetter(str1, str2) {
  if (str1.length === 0 || str2.length === 0) {
    return false;
  }

  return str1[0] === str2[0];
}

export function quintuple(numbers) {
  const result = [];

  for (const number of numbers) {
    result.push(number * 5);
  }

  return result;
}

export function pluralize(words) {
  const plurals = [];

  for (const word of words) {
    if (word.endsWith("s")) {
      plurals.push(word + "es");
    } else {
      plurals.push(word + "s");
    }
  }

  return plurals;
}

export function countAttendance(attendance) {
  let count = 0;

  for (const present of attendance) {
    if (present === true) {
      count++;
    }
  }

  return count;
}

export function getLongestWord(sentence) {
  if (sentence.length === 0) {
    return null;
  }

  let longest = sentence[0];

  for (const word of sentence) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

export function findSong(playlist, song) {
  for (let i = 0; i < playlist.length; i++) {
    if (playlist[i] === song) {
      return i;
    }
  }

  return -1;
}

export function findSpy(map) {
  for (let row = 0; row < map.length; row++) {
    for (let column = 0; column < map[row].length; column++) {
      if (map[row][column] === "spy") {
        return [row, column];
      }
    }
  }

  return null;
}
