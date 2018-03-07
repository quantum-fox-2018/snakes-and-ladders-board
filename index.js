function snakesandladder(num) {
  var arr = []
  var counter = num * num

  if (num % 2 !== 0) {
    counter -= num-1
  }

  for (var i = 0; i < num; i++) {
    var temp = []
    for (var j = 0; j < num; j++) {
      if (i % 2 === 0) {
        temp.push(counter)
        if (j !== num-1) {
          if (num % 2 !== 0) {
            counter++
          } else {
            counter--
          }
        }
      } else if (i % 2 !== 0) {
        temp.push(counter)
        if (j !== num-1) {
          if (num % 2 !== 0) {
            counter--
          } else {
            counter++
          }
        }
      }
    }
    counter -= num
    arr.push(temp)
  }
  return arr
}

console.log(snakesandladder(10));
console.log(snakesandladder(5));
console.log(snakesandladder(15));
console.log(snakesandladder(3));
