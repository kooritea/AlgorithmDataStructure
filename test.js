const {SqQueue,FixedLengthSqQueue} = require('./Data-Structure/queue.js')
const {SqStack} = require('./Data-Structure/stack.js')

//普通队列 先进先出
const sqQueue = new SqQueue()
for(let i=0;i<5;i++){
  sqQueue.push(i)
  console.log(`sqQueue.push(${i}) => [${sqQueue.getAllData()}]`)
  console.log(`sqQueue.pop() => ${ sqQueue.pop()}`)
  sqQueue.push(i + 1 )
  console.log(`sqQueue.push(${i + 1}) => [${sqQueue.getAllData()}]`)
}

// 定长队列 达到固定长度后自动把队尾丢出去
const fixedLengthSqQueue = new FixedLengthSqQueue(5)
for(let i=0;i<10;i++){
  fixedLengthSqQueue.push(i)
  console.log(`fixedLengthSqQueue.push(${i}) => ${fixedLengthSqQueue.getAllData()}`)
}

//普通顺序栈 先进后出
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
