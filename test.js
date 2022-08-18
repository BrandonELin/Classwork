function order(words){
    // 
    let order1 = words.split(" ")
    let newOrder = order1.slice()
    let newWord = ""

    for(let i = 0; i<order1.length; i++){
      console.log(order1[i])
      console.log(order1)
      for(let j = 0; j<order1[i].length;j++){
        if(/\d/.test(order1[i][j])){
          newOrder[(order1[i][j]-1)] = order1[i]
          break;
        }
      }
      console.log(newOrder)
    }
    for(let i = 0; i<newOrder.length; i++){
        if (i!==(newOrder.length-1)){
            newWord += (newOrder[i]+" ");
        } else {
            newWord += newOrder[i];
        }
    }
    return newWord
  }
  console.log(order("is2 Thi1s T4est 3a"))