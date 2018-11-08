function bubbleSort(originArray){
  let array = new Array(...originArray)
  for(let i = 0;i < array.length;i++){
    for(let j = 0; j < array.length - i; j++){
      if(array[j] > array[j+1]){
        [array[j],array[j + 1]] = [array[j + 1],array[j]]
      }
    }
    console.log(`第${i+1}趟排序 => [${array}]`)
  }
  return array
}

function optimizeBubbleSort(originArray){
  let array = new Array(...originArray)
  let last = array.length
  for(let i = 0;i < last;i++){
    for(let j = 0; j < array.length - i; j++){
      if(array[j] > array[j+1]){
        last = j;
        [array[j],array[j + 1]] = [array[j + 1],array[j]]
      }
    }
    console.log(`第${i+1}趟排序 => [${array}]`)
  }
  return array
}

module.exports = {
  bubbleSort,
  optimizeBubbleSort
}
