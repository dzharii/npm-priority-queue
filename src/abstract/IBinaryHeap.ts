export interface IBinaryHeapComparatorFn<T> {
    (value: T, otherValue: T) : boolean 
}
export interface IBinaryHeap<T> {
    size(): number;
    toArray(): T[]
}