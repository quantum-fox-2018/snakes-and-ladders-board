function snakesandladder(num) {
  var arr = []
  var counter = num * num

  if (num % 2 !== 0) {
    counter -= num-1
  }

  for (var i = 0; i < num; i++) {
    var temp = []
    if (num % 2 === 0) {
      for (var j = 0; j < num; j++) {
        if (i % 2 === 0) {
          temp.push(counter)
          if (j !== num-1) {
            counter--
          }
        } else if (i % 2 !== 0) {
          temp.push(counter)
          if (j !== num-1) {
            counter++
          }
        }
      }
    } else {
      for (var j = 0; j < num; j++) {
        if (i % 2 !== 0) {
          temp.push(counter)
          if (j !== num-1) {
            counter--
          }
        } else if (i % 2 === 0) {
          temp.push(counter)
          if (j !== num-1) {
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
