function generateBoard(num){
    var max = num * num;
    var result = [];
    for(var i =num; i >0;i--){
      var tmp = [];
      if(i%2 === 0 && i === num){
        for(var j =0; j<num; j++){
          tmp.push(max);
          max --;
        }  
      }else if(i%2 === 1){
        max = max - (num - 1);
        for(var k =0; k<num; k++){
          tmp.push(max);
          max ++;
        }
      }else if(i%2 === 0 && i!== num){
        max = max - (num+1);
        for(var l =0; l<num; l++){
          tmp.push(max);
          max --;
        }
      }
     result.push(tmp); 
    }
    return result;
  }
  
  console.log(generateBoard(10));
  
  console.log(generateBoard(15));

  console.log(generateBoard(8));