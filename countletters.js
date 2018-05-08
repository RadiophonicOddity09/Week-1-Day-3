
function countLetters(str) {
  var letters = str.split("");
  var objectCount = {};

  for (var i = 0; i < str.length; i++) {
    if(objectCount[str[i]] === undefined) {
      objectCount[str[i]] = 1;
    } else {
      objectCount[str[i]]++;
    }
  }
  delete objectCount[" "];
  return objectCount;
}

console.log(countLetters("lighthouse labs in the house"));