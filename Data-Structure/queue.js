class Queue {
  constructor() {
    this._head = 0
    this._tail = 0
    this._Data = []
  }

  push(value){
    this._Data[this._head] = value
    this._headNext()
  }

  pop(){
    let tmp = this._Data[this._tail]
    this._tailNext()
    return tmp
  }

  getAllData(){
    let result = []
    for(let i = this._tail;i !== this._head;){
      result.push(this._Data[i])
      i = this._getNextCursor(i)
    }
    return result
  }

  _headNext(){
    this._head ++
  }

  _tailNext(){
    this._tail ++
  }

  _getNextCursor(num){
    return num + 1
  }
}


class FixedLengthQueue extends Queue { // 定长队列
  constructor(length) {
    super()
    this._length = length
  }

  _headNext(){
    if(this._head === this._length - 1){
      this._head = 0
    } else {
      this._head ++
    }
    if(this._head === this._tail){
      this._tailNext()
    }
  }

  _tailNext(){
    if(this._tail === this._length - 1){
      this._tail = 0
    } else {
      this._tail ++
    }
  }

  _getNextCursor(num){
    if(num === this._length - 1){
      num = 0
    } else {
      num ++
    }
    return num
  }
}

module.exports = {
  Queue,
  FixedLengthQueue
}
