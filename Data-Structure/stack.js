class SqStack {
  constructor() {
    this._head = 0
    this._Data = []
  }

  push(value){
    this._Data[this._head] = value
    this._head++
  }

  pop(){
    this._head--
    return this._Data[this._head]
  }

  getTop(){
    return this._Data[this._head - 1]
  }

  getLength(){
    return this._head
  }

  getAllData(){
    let result = []
    for(let i = 0;i < this._head;i++){
      result.push(this._Data[i])
    }
    return result
  }
}
module.exports = {
  SqStack
}
