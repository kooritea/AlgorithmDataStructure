//普通队列 先进先出
console.log('普通队列')
const {SqQueue,FixedLengthSqQueue} = require('./Data-Structure/queue.js')
const sqQueue = new SqQueue()
for(let i=0;i<5;i++){
  sqQueue.push(i)
  console.log(`sqQueue.push(${i}) => [${sqQueue.getAllData()}]`)
  console.log(`sqQueue.pop() => ${ sqQueue.pop()}`)
  sqQueue.push(i + 1 )
  console.log(`sqQueue.push(${i + 1}) => [${sqQueue.getAllData()}]`)
}
console.log()

// 定长队列 达到固定长度后自动把队尾丢出去
console.log('定长队列')
const fixedLengthSqQueue = new FixedLengthSqQueue(5)
for(let i=0;i<10;i++){
  fixedLengthSqQueue.push(i)
  console.log(`fixedLengthSqQueue.push(${i}) => ${fixedLengthSqQueue.getAllData()}`)
}
console.log()


//普通顺序栈 先进后出
console.log('普通顺序栈')
const {SqStack} = require('./Data-Structure/stack.js')
const sqStack = new SqStack()
for(let i=0;i<5;i++){
  sqStack.push(i)
  console.log(`sqStack.push(${i}) => [${sqStack.getAllData()}]`)
  console.log(`sqStack.pop() => ${ sqStack.pop()}`)
  sqStack.push(i + i )
  console.log(`sqStack.push(${i + i}) => [${sqStack.getAllData()}]`)
  console.log(`The top is ${sqStack.getTop()}`)
  console.log(`The sqStack length is ${sqStack.getLength()}`)
}
console.log()

//普通单链表
console.log('普通单链表')
const {Link} = require('./Data-Structure/link.js')
const link = new Link()
link.push(0)
link.push(1)
link.push(2)
link.push(3)
link.push(4)
link.push(5)
console.log(`AllData => ${link.getAllData()}`)
console.log(`The link length is ${link.length}`)
link.insert(5,2333)
console.log(`insert 2333 to 5 => ${link.getAllData()}`)
link.insert(0,2233)
console.log(`insert 2233 to 0 => ${link.getAllData()}`)
console.log(`The link length is ${link.length}`)
console.log(`getItem by 5 => ${(link.getItem(5)).data}`)
console.log(`locateItem by item 5 => ${link.locateItem(link.getItem(5))}`)
console.log(`AllData => ${link.getAllData()}`)
link.delete(5)
console.log(`delete 5 => ${link.getAllData()}`)
console.log()

//冒泡排序
console.log('冒泡排序')
const {bubbleSort} = require('./Algorithm/sort.js')
console.log(`origin aray => [${[2,5,3,2,1,4,5,6,4]}]`)
console.log(`排序结果 => [${bubbleSort([2,5,3,2,1,4,5,6,4])}]`)
console.log()

//改进冒泡排序
console.log('改进冒泡排序')
const {optimizeBubbleSort} = require('./Algorithm/sort.js')
console.log(`origin aray => [${[2,5,3,2,1,4,5,6,4]}]`)
console.log(`排序结果 => [${optimizeBubbleSort([2,5,3,2,1,4,5,6,4])}]`)
console.log()
