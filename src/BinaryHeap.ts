import { IBinaryHeap, IBinaryHeapDominationComparatorFn } from "./abstract/IBinaryHeap";

export class BinaryHeap<T> implements IBinaryHeap<T> {
    private heapContainer: T[] = [];
    private doesFirstValueDominateOtherCmp: IBinaryHeapDominationComparatorFn<T>;

    constructor(initialElements: T[], doesFirstValueDominateOtherCmp: IBinaryHeapDominationComparatorFn<T>) {
        if (initialElements && initialElements.length > 0) {
            this.heapContainer = initialElements;
        }

        if (doesFirstValueDominateOtherCmp) {
            this.doesFirstValueDominateOtherCmp = doesFirstValueDominateOtherCmp;
        } else {
            throw new Error("comparatorFn is not defined");
        }

        if (this.heapContainer.length > 0) {
            this.buildHeapArrayInplace(this.heapContainer, this.doesFirstValueDominateOtherCmp);
        }
    }
    public size(): number {
        return this.heapContainer.length;
    }

    public toArray(): T[] {
        return this.heapContainer.concat();
    }

    public buildHeapArrayInplace(elements: T[], comparatorFn: IBinaryHeapDominationComparatorFn<T> ) {
        const boundaryParentIndex = (elements.length >> 1) - 1;
        for (let i = boundaryParentIndex; i >= 0; i--) {
            this.siftDownInPlace(elements, i, comparatorFn);
        }
    }

    public siftDownInPlace(elements: T[], currentElementIndex: number, doesFirstValueDominateOtherCmp: IBinaryHeapDominationComparatorFn<T>) : void{
        const validCurrentElementIndex = 0 <= currentElementIndex && currentElementIndex < elements.length;
        if (!validCurrentElementIndex) throw new Error(`currentElementIndex is out of elements array boundary`);
        let elementIsInTheRightPlace = false;
        while(!this.isLeaf(elements, currentElementIndex) && !elementIsInTheRightPlace) {
            let leftChildIndex = (currentElementIndex << 1) + 1;  // same as 2 * currentElementIndex + 1
            let rightChildIndex = leftChildIndex + 1;  // May be out of array boundary
            let dominatorIndex = leftChildIndex;

            // Check if there is a right child and switch to right child if it dominates
            if (rightChildIndex < elements.length) {
                if (doesFirstValueDominateOtherCmp(elements[rightChildIndex], elements[dominatorIndex])) {
                    dominatorIndex = rightChildIndex;
                }
            }
            if (doesFirstValueDominateOtherCmp(elements[dominatorIndex], elements[currentElementIndex])) {
                this.swapInPlace(elements, dominatorIndex, currentElementIndex);
                currentElementIndex = dominatorIndex;
            }
            else {
                elementIsInTheRightPlace = true;
            }
        }
    }

    public siftUpInPlace(elements: T[], currentElementIndex: number, doesFirstValueDominateOtherCmp: IBinaryHeapDominationComparatorFn<T>) : void {
        let elementIsInTheRightPlace = false;
        while(currentElementIndex != 0 && !elementIsInTheRightPlace) {
            let parentIndex = (currentElementIndex - 1) >> 1;
            if (doesFirstValueDominateOtherCmp(elements[currentElementIndex], elements[parentIndex])) {
                this.swapInPlace(elements, currentElementIndex, parentIndex);
                currentElementIndex = parentIndex;
            }
            else {
                elementIsInTheRightPlace = true;
            }
        }
    }

    public push(element: T) : void {
        this.heapContainer.push(element);
        if (this.size() > 1) {
            this.siftUpInPlace(this.heapContainer, this.heapContainer.length - 1, this.doesFirstValueDominateOtherCmp);
        }
    }

    public pop(): T | undefined {
        if (this.heapContainer.length === 0) {
            return void 0;
        }
        else if (this.heapContainer.length === 1) {
            let element = this.heapContainer.pop();
            return element;
        }
        this.swapInPlace(this.heapContainer, 0, this.heapContainer.length - 1);
        let result = this.heapContainer.pop();
        this.siftDownInPlace(this.heapContainer, 0, this.doesFirstValueDominateOtherCmp);
        return result;
    }

    public peek(): T | undefined {
        return this.heapContainer[0];
    }

    public isEmpty(): boolean {
        return this.heapContainer.length === 0;
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
