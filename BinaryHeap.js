"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BinaryHeap = /** @class */ (function () {
    function BinaryHeap(initialElements, comparatorFn) {
        this.heapContainer = [];
        this.heapSize = 0;
        if (initialElements && initialElements.length > 0) {
            this.heapContainer = initialElements;
        }
        this.heapSize = this.heapContainer.length;
        if (comparatorFn) {
            this.comparatorFn = comparatorFn;
        }
        else {
            throw new Error("comparatorFn is not defined");
        }
        if (this.heapContainer.length > 0) {
            this.buildHeapArrayInplace(this.heapContainer, this.comparatorFn);
        }
    }
    BinaryHeap.prototype.size = function () {
        return this.heapSize;
    };
    BinaryHeap.prototype.toArray = function () {
        return this.heapContainer.concat();
    };
    BinaryHeap.prototype.buildHeapArrayInplace = function (elements, comparatorFn) {
        var middleIndex = (elements.length - 1) >> 1;
        for (var i = middleIndex; i >= 0; i--) {
            this.siftDownInPlace(elements, i, comparatorFn);
        }
    };
    BinaryHeap.prototype.siftDownInPlace = function (elements, currentElementIndex, doesFirstValueDominateOther) {
        var validCurrentElementIndex = 0 <= currentElementIndex && currentElementIndex < elements.length;
        if (!validCurrentElementIndex)
            throw new Error("currentElementIndex is out of elements boundary");
        while (!this.isLeaf(elements, currentElementIndex)) {
            var leftChildIndex = currentElementIndex << 1; // same as 2 * currentElementIndex
            var rightChildIndex = leftChildIndex + 1; // May be out of array boundary
            var dominatorIndex = leftChildIndex;
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
        }
    };
    BinaryHeap.prototype.swapInPlace = function (elements, swapIndexA, swapIndexB) {
        var tmpElement = elements[swapIndexA];
        elements[swapIndexA] = elements[swapIndexB];
        elements[swapIndexB] = tmpElement;
    };
    BinaryHeap.prototype.isLeaf = function (elements, index) {
        var middleIndex = elements.length >> 1; // same as Math.floor(elements.length / 2)
        return middleIndex >= index && index < elements.length;
    };
    return BinaryHeap;
}());
exports.BinaryHeap = BinaryHeap;
//# sourceMappingURL=BinaryHeap.js.map