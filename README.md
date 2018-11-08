# 用javascript实现常用数据结构和算法

## 队列
### 普通顺序队列

> 先进先出

```javascript
const sqQueue = new sqQueue()
```

### 定长顺序队列

> 达到固定长度后丢弃队尾

```javascript
const fixedLengthSqQueue = new fixedLengthSqQueue(5)
```

## 栈
### 普通顺序栈

> 先进后出

```javascript
const sqStack = new SqStack()
```

## 链表
### 普通单链表

> 顺序查找 随机存储

```javascript
const link = new Link()
```

## 排序
### 冒泡排序

> 全扫描冒泡

```javascript
bubbleSort([2,5,3,2,1,4,5,6,4])
```

### 改进冒泡排序

> 记录了最后一次排序位置，下一趟排序只遍历到上一次记录的位置

```javascript
optimizeBubbleSort([2,5,3,2,1,4,5,6,4])
```
