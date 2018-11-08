function bubbleSort(originArray){
  let array = new Array(...originArray)
  let tmp
  for(let i = 0;i < array.length;i++){
    for(let j = 0; j < array.length - i; j++){
      if(array[j] > array[j+1]){
        tmp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = tmp
      }
    }
    console.log(`第${i+1}趟排序 => [${array}]`)
  }
  return array
}
module.exports = {
  bubbleSort
}
