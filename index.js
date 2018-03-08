function snakeLaddersBoard(dimensi){
  var papan = []
  var counter = dimensi*dimensi

  let JmlDimensi = []
  for(let i=counter; i>0; i--){
    JmlDimensi.push(i)
  }
  // console.log(JmlDimensi)

  var counter = 0
  for(let j=0; j<dimensi; j++){
    if(j%2!==0){
      debugger
      // console.log(true)
      let rows = []
      for(let k=0; k<dimensi; k++){
        let angkaDimensi = JmlDimensi[counter]
        rows.push(angkaDimensi)
        counter++
      }
      papan.push(rows)
    }
    else if(j%2===0){
      debugger
      let rows = []
      for(let k=0; k<dimensi; k++){
        let angkaDimensi = JmlDimensi[counter]
        rows.push(angkaDimensi)
        counter++
      }
      // console.log(rows)
      // reverseArr(rows)
      debugger
      papan.push(reverseArr(rows))
    }
  }

  return papan
}
console.log(snakeLaddersBoard(11))

function reverseArr(input) {
    var ret = []
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

// console.log(reverseArr([2,1]))
