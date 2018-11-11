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
  delete(offset){
    let  priorNode= this._head
    for(let i = 0;i < offset - 1;i++){
      priorNode = priorNode.next
    }
    priorNode.next = priorNode.next.next
  }
  getItem(offset){
    let cursor = this._head
    for(let i = 0;i < offset;i++){
      cursor = cursor.next
    }
    return cursor
  }
  locateItem(item){
    let cursor = this._head
    let i=0
    while(item !== cursor){
      cursor = cursor.next
      i++
    }
    return i
  }
  priorItem(item){
    let cursor = this._head
    if(cursor === item){
      throw 'Is Head'
    }
    for(let i = 0;i < this.length;i++){
      if(cursor.next === item){
        return cursor
      }
      cursor = cursor.next
    }
    throw 'Not Found'
  }
  nextItem(item){
    return item.next
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

class DuLink extends Link {
  constructor() {
    super()
  }
  push(data){
    this.length++
    this._tail.data = data
    let lnode = new LNode()
    lnode.prior = this._tail
    this._tail.next = lnode
    this._tail = lnode
  }
  insert(offset,data){
    if(this.length <= offset) {throw new Error('can not insert in tail')}
    this.length++
    let next,item
    if(offset === 0){
      next = this._head
      this._head = new LNode(data)
      this._head.next = next
      next.prior = this._head
    } else {
      item = this._head
      for(let i = 1;i < offset;i++){
        item = item.next
      }
      next = item.next
      item.next = new LNode(data)
      item.next.next = next
      item.next.prior = item
    }
  }
  priorItem(item){
    return item.prior
  }
}

module.exports = {
  Link,
  DuLink
}
