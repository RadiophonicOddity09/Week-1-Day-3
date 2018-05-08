
function countLetters(str) {
  var letters = str.split("");
  var objectCount = {};

  for (var i = 0; i < str.length; i++) {
    if(objectCount[str[i]] === undefined) {
      objectCount[str[i]] = i;
    } else {
      objectCount[str[i]] = objectCount[str[i]] + ", " + i;
    }
  }
  delete objectCount[" "];
  return objectCount;
}
  console.log(countLetters("lighthouse in the house"));