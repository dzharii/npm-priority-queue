# npm-priority-queue
Yet another priority queue (MinMax Heap) implementation in TypeScript

## Installation

`npm i dz-priority-queue` or
`npm i dz-priority-queue --save`

## Example

```typescript

import {
    PriorityQueue,
    IBinaryHeapDominationComparatorFn,
    IPriorityQueue
} from 'dz-priority-queue';

const minDateQComparator: IBinaryHeapDominationComparatorFn<Date> = function (date: Date, otherDate: Date) {
    return date.valueOf() < otherDate.valueOf();
}
let minPriorotyQueue: IPriorityQueue<Date> = new PriorityQueue<Date>([
    new Date('2020-01-01'),
    new Date('2000-01-01')
],  minDateQComparator);

console.log(minPriorotyQueue.peek());
// prints: [ 2000-01-01T00:00:00.000Z ]
// since this is a MinQueue

minPriorotyQueue.push(new Date('1999-03-31')); // add "The Matrix" release date. It should become new min
console.log(minPriorotyQueue.pop());
// prints: [ 1999-03-31T00:00:00.000Z ]
// the element has been extracted from the queue

while(!minPriorotyQueue.isEmpty()) {
    console.log(minPriorotyQueue.pop());
}
// prints all the rest elements in sorted order:
// 2000-01-01T00:00:00.000Z
// 2020-01-01T00:00:00.000Z

console.log(minPriorotyQueue.pop());
// undefined

```

## CI

[![Circle CI](https://circleci.com/gh/dzharii/npm-priority-queue.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/dzharii/npm-priority-queue)
