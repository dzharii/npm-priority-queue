"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BinaryHeap = /** @class */ (function () {
    function BinaryHeap(initialElements, doesFirstValueDominateOtherCmp) {
        this.heapContainer = [];
        if (initialElements && initialElements.length > 0) {
            this.heapContainer = initialElements;
        }
        if (doesFirstValueDominateOtherCmp) {
            this.doesFirstValueDominateOtherCmp = doesFirstValueDominateOtherCmp;
        }
        else {
            throw new Error("comparatorFn is not defined");
        }
        if (this.heapContainer.length > 0) {
            this.buildHeapArrayInplace(this.heapContainer, this.doesFirstValueDominateOtherCmp);
        }
    }
    BinaryHeap.create = function (initialElements, doesFirstValueDominateOtherCmp) {
        return new BinaryHeap(initialElements, doesFirstValueDominateOtherCmp);
    };
    BinaryHeap.prototype.size = function () {
        return this.heapContainer.length;
    };
    BinaryHeap.prototype.toArray = function () {
        return this.heapContainer.concat();
    };
    BinaryHeap.prototype.buildHeapArrayInplace = function (elements, comparatorFn) {
        var boundaryParentIndex = (elements.length >> 1) - 1;
        for (var i = boundaryParentIndex; i >= 0; i--) {
            this.siftDownInPlace(elements, i, comparatorFn);
        }
    };
    BinaryHeap.prototype.siftDownInPlace = function (elements, currentElementIndex, doesFirstValueDominateOtherCmp) {
        var validCurrentElementIndex = 0 <= currentElementIndex && currentElementIndex < elements.length;
        if (!validCurrentElementIndex)
            throw new Error("currentElementIndex is out of elements array boundary");
        var elementIsInTheRightPlace = false;
        while (!this.isLeaf(elements, currentElementIndex) && !elementIsInTheRightPlace) {
            var leftChildIndex = (currentElementIndex << 1) + 1; // same as 2 * currentElementIndex + 1
            var rightChildIndex = leftChildIndex + 1; // May be out of array boundary
            var dominatorIndex = leftChildIndex;
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
    };
    BinaryHeap.prototype.siftUpInPlace = function (elements, currentElementIndex, doesFirstValueDominateOtherCmp) {
        var elementIsInTheRightPlace = false;
        while (currentElementIndex != 0 && !elementIsInTheRightPlace) {
            var parentIndex = (currentElementIndex - 1) >> 1;
            if (doesFirstValueDominateOtherCmp(elements[currentElementIndex], elements[parentIndex])) {
                this.swapInPlace(elements, currentElementIndex, parentIndex);
                currentElementIndex = parentIndex;
            }
            else {
                elementIsInTheRightPlace = true;
            }
        }
    };
    BinaryHeap.prototype.push = function (element) {
        this.heapContainer.push(element);
        if (this.size() > 1) {
            this.siftUpInPlace(this.heapContainer, this.heapContainer.length - 1, this.doesFirstValueDominateOtherCmp);
        }
    };
    BinaryHeap.prototype.pop = function () {
        if (this.heapContainer.length === 0) {
            return void 0;
        }
        else if (this.heapContainer.length === 1) {
            var element = this.heapContainer.pop();
            return element;
        }
        this.swapInPlace(this.heapContainer, 0, this.heapContainer.length - 1);
        var result = this.heapContainer.pop();
        this.siftDownInPlace(this.heapContainer, 0, this.doesFirstValueDominateOtherCmp);
        return result;
    };
    BinaryHeap.prototype.peek = function () {
        return this.heapContainer[0];
    };
    /**
     * Removes element from hrap
     * @param elementFoundPredicate
     *
     * Comment: This algorithm is not super efficient and requires O(n) time in average case
     */
    BinaryHeap.prototype.remove = function (elementFoundPredicate) {
        if (!elementFoundPredicate) {
            return void 0;
        }
        for (var i = 0; i < this.heapContainer.length; i++) {
            if (elementFoundPredicate(this.heapContainer[i])) {
                var lastElementIndex = this.heapContainer.length - 1;
                this.swapInPlace(this.heapContainer, i, lastElementIndex);
                var removedElement = this.heapContainer.pop();
                if (this.heapContainer.length && i < this.heapContainer.length - 1) {
                    this.siftDownInPlace(this.heapContainer, i, this.doesFirstValueDominateOtherCmp);
                }
                return removedElement;
            }
        }
        return void 0;
    };
    BinaryHeap.prototype.isEmpty = function () {
        return this.heapContainer.length === 0;
    };
    BinaryHeap.prototype.swapInPlace = function (elements, swapIndexA, swapIndexB) {
        var tmpElement = elements[swapIndexA];
        elements[swapIndexA] = elements[swapIndexB];
        elements[swapIndexB] = tmpElement;
    };
    BinaryHeap.prototype.isLeaf = function (elements, index) {
        var boundaryParentIndex = (elements.length >> 1) - 1;
        var greaterThanLastParent = boundaryParentIndex < index;
        var lessThanArrayLen = index < elements.length;
        return greaterThanLastParent && lessThanArrayLen;
    };
    return BinaryHeap;
}());
exports.BinaryHeap = BinaryHeap;
//# sourceMappingURL=BinaryHeap.js.map