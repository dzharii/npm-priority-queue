export interface IBinaryHeapDominationComparatorFn<T> {
    (value: T, otherValue: T) : boolean
}
export interface IBinaryHeap<T> {
    size(): number;
    toArray(): T[]
    add(element: T): void
}