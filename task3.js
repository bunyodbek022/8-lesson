function swapNum(text) {
  return text
    .split("")
    .map(item => (!isNaN(Number(item)) ? "*" : item))
    .join("");
}

alert(swapNum(prompt("Enter the word:")));
