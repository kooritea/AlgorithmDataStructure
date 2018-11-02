const {Queue,FixedLengthQueue} = require('./Data-Structure/queue.js')

//普通队列 先进先出
const queue = new Queue()
for(let i=0;i<5;i++){
  queue.push(i)
  console.log(`queue.push(${i}) => [${queue.getAllData()}]`)
  console.log(`queue.pop() => ${ queue.pop()}`)
  queue.push(i + 1 )
  console.log(`queue.push(${i + 1}) => [${queue.getAllData()}]`)
}

// 定长队列 达到固定长度后自动把队尾丢出去
const fixedLengthQueue = new FixedLengthQueue(5)
for(let i=0;i<10;i++){
  fixedLengthQueue.push(i)
  console.log(`fixedLengthQueue.push(${i}) => ${fixedLengthQueue.getAllData()}`)
}
