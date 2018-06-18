import { IPriorityQueue } from "./IPriorityQueue";
import { IBinaryHeapDominationComparatorFn, IBinaryHeap, IBinaryHeapElementSearchPredicateFn } from ".";
import { BinaryHeap } from "./BinaryHeap";

export class PriorityQueue<T> implements IPriorityQueue<T> {
    heap: IBinaryHeap<T>
    constructor(initialElements: T[], doesFirstValueDominateOtherCmp: IBinaryHeapDominationComparatorFn<T>)  {
        this.heap = new BinaryHeap<T>(initialElements, doesFirstValueDominateOtherCmp);
    }

    size(): number {
        return this.heap.size();
    }
    toArray(): T[] {
        return this.heap.toArray();
    }
    push(element: T): void {
        this.heap.push(element);
    }
    pop(): T | undefined {
        return this.heap.pop();
    }
    remove(predicate: IBinaryHeapElementSearchPredicateFn<T>): T | undefined  {
        return this.heap.remove(predicate);
    }
    peek(): T | undefined {
        return this.heap.peek();
    }
    isEmpty(): boolean {
        return this.heap.isEmpty();
    }
}