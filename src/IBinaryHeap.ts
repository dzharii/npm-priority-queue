export interface IBinaryHeapDominationComparatorFn<T> {
    (value: T, otherValue: T) : boolean
}

export interface IBinaryHeapElementSearchPredicateFn<T> {
    (value: T) : boolean
}
export interface IBinaryHeap<T> {
    size(): number;
    toArray(): T[]
    push(element: T): void
    pop(): T | undefined
    peek(): T | undefined
    remove(predicate: IBinaryHeapElementSearchPredicateFn<T>): T | undefined
    isEmpty(): boolean
}