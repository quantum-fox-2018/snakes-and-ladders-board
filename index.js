function generateSnakeBoard(jmlGrid) {
  let result = [];
  let number = jmlGrid * jmlGrid;

  for (var i = 0; i < jmlGrid; i++) {
    if (typeof result[i] === 'undefined') {
      result[i] = [];
    }
    if ((i+1)%2 === 0) {
      for (var x = 0; x < jmlGrid; x++) {
        result[i].push(number);
        number--;
      }
    } else {
      var numberBarisGanjil = (number - jmlGrid) + 1;
      for (var x = 0; x < jmlGrid; x++) {
        result[i].push(numberBarisGanjil);
        number--;
        numberBarisGanjil++;
      }
    }
  }

  return result;
}

console.log(generateSnakeBoard(15));
