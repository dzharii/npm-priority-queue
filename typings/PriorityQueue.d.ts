import { IPriorityQueue } from "./IPriorityQueue";
import { IBinaryHeapDominationComparatorFn, IBinaryHeap, IBinaryHeapElementSearchPredicateFn } from ".";
export declare class PriorityQueue<T> implements IPriorityQueue<T> {
    heap: IBinaryHeap<T>;
    constructor(initialElements: T[], doesFirstValueDominateOtherCmp: IBinaryHeapDominationComparatorFn<T>);
    size(): number;
    toArray(): T[];
    push(element: T): void;
    pop(): T | undefined;
    remove(predicate: IBinaryHeapElementSearchPredicateFn<T>): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
}
