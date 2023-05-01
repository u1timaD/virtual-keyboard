function changeToUpperCaseWord(str) {
  const words = str.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length <= 1) {
      words[i] = words[i].toUpperCase();
    }
  }
  return words.join(' ');
}

function changeToLowerCaseWord(str) {
  const words = str.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length <= 1) {
      words[i] = words[i].toLowerCase();
    }
  }
  return words.join(' ');
}

export { changeToUpperCaseWord, changeToLowerCaseWord };
