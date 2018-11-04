class LNode {
  constructor(data) {
    this.prior = null
    this.data = data
    this.next = null
  }
}
class Link {
  constructor() {
    this._head = new LNode()
    this._tail = this._head
    this.length = 0
  }
  push(data){
    this.length++
    this._tail.data = data
    this._tail.next = new LNode()
    this._tail = this._tail.next
  }
  insert(offset,data){
    if(this.length <= offset) {throw new Error('can not insert in tail')}
    this.length++
    let next,item
    if(offset === 0){
      next = this._head
      this._head = new LNode(data)
      this._head.next = next
    } else {
      item = this._head
      for(let i = 1;i < offset;i++){
        item = item.next
      }
      next = item.next
      item.next = new LNode(data)
      item.next.next = next
    }
  }
  getItem(offset){
    let cursor = this._head
    for(let i = 0;i < offset;i++){
      cursor = cursor.next
    }
    return cursor
  }
  getAllData(){
    let result = []
    let cursor = this._head
    for(let i = 0;i < this.length;i++){
      result.push(cursor.data)
      cursor = cursor.next
    }
    return result
  }
}

module.exports = {
  Link
}
