import { IBinaryHeap, IBinaryHeapComparatorFn } from "./abstract/IBinaryHeap";



export class BinaryHeap<T> implements IBinaryHeap<T> {
    private heapContainer: T[] = [];
    private heapSize: number = 0;
    private comparatorFn: IBinaryHeapComparatorFn<T>;

    constructor(initialElements: T[], comparatorFn: IBinaryHeapComparatorFn<T>) {
        if (initialElements && initialElements.length > 0) {
            this.heapContainer = initialElements;
        }
        this.heapSize = this.heapContainer.length;

        if (comparatorFn) {
            this.comparatorFn = comparatorFn;
        } else {
            throw new Error("comparatorFn is not defined");
        }

        if (this.heapContainer.length > 0) {
            this.buildHeapArrayInplace(this.heapContainer, this.comparatorFn);
        }
    }
    public size(): number {
        return this.heapSize;
    }

    public toArray(): T[] {
        return this.heapContainer.concat();
    }

    public buildHeapArrayInplace(elements: T[], comparatorFn: IBinaryHeapComparatorFn<T> ) {
        const boundaryParentIndex = (elements.length >> 1) - 1;
        for (let i = boundaryParentIndex; i >= 0; i--) {
            this.siftDownInPlace(elements, i, comparatorFn);
        }
    }

    public siftDownInPlace(elements: T[], currentElementIndex: number, doesFirstValueDominateOther: IBinaryHeapComparatorFn<T>) : void{
        const validCurrentElementIndex = 0 <= currentElementIndex && currentElementIndex < elements.length;
        if (!validCurrentElementIndex) throw new Error(`currentElementIndex is out of elements boundary`);
        let elementIsInTheRightPlace = false;
        while(!this.isLeaf(elements, currentElementIndex) && !elementIsInTheRightPlace) {
            let leftChildIndex = (currentElementIndex << 1) + 1;  // same as 2 * currentElementIndex + 1
            let rightChildIndex = leftChildIndex + 1;  // May be out of array boundary
            let dominatorIndex = leftChildIndex;

            // Check if there is a right child and switch to right child if it dominates
            if (rightChildIndex < elements.length) {
                if (doesFirstValueDominateOther(elements[rightChildIndex], elements[dominatorIndex])) {
                    dominatorIndex = rightChildIndex;
                }
            }
            if (doesFirstValueDominateOther(elements[dominatorIndex], elements[currentElementIndex])) {
                this.swapInPlace(elements, dominatorIndex, currentElementIndex);
                currentElementIndex = dominatorIndex;
            }
            else {
                elementIsInTheRightPlace = true;
            }
        }
    }

    public swapInPlace(elements: T[], swapIndexA: number, swapIndexB: number) {
        const tmpElement = elements[swapIndexA];
        elements[swapIndexA] = elements[swapIndexB];
        elements[swapIndexB] = tmpElement;
    }

    public isLeaf(elements: T[], index: number) : boolean {
        const boundaryParentIndex = (elements.length >> 1) - 1;
        const greaterThanLastParent = boundaryParentIndex < index;
        const lessThanArrayLen = index < elements.length;
        return  greaterThanLastParent && lessThanArrayLen;
    }





}
