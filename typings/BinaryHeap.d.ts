import { IBinaryHeap, IBinaryHeapDominationComparatorFn, IBinaryHeapElementSearchPredicateFn } from "./IBinaryHeap";
export declare class BinaryHeap<T> implements IBinaryHeap<T> {
    private heapContainer;
    private doesFirstValueDominateOtherCmp;
    static create<T>(initialElements: T[], doesFirstValueDominateOtherCmp: IBinaryHeapDominationComparatorFn<T>): IBinaryHeap<T>;
    constructor(initialElements: T[], doesFirstValueDominateOtherCmp: IBinaryHeapDominationComparatorFn<T>);
    size(): number;
    toArray(): T[];
    buildHeapArrayInplace(elements: T[], comparatorFn: IBinaryHeapDominationComparatorFn<T>): void;
    siftDownInPlace(elements: T[], currentElementIndex: number, doesFirstValueDominateOtherCmp: IBinaryHeapDominationComparatorFn<T>): void;
    siftUpInPlace(elements: T[], currentElementIndex: number, doesFirstValueDominateOtherCmp: IBinaryHeapDominationComparatorFn<T>): void;
    push(element: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    /**
     * Removes element from hrap
     * @param elementFoundPredicate
     *
     * Comment: This algorithm is not super efficient and requires O(n) time in average case
     */
    remove(elementFoundPredicate: IBinaryHeapElementSearchPredicateFn<T>): T | undefined;
    isEmpty(): boolean;
    swapInPlace(elements: T[], swapIndexA: number, swapIndexB: number): void;
    isLeaf(elements: T[], index: number): boolean;
}
