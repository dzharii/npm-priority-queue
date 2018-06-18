"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BinaryHeap_1 = require("./BinaryHeap");
var testComparatorMax = function (value, otherValue) { return value > otherValue; };
describe('BinaryHeap', function () {
    describe('constructor', function () {
        it('should create a heap with all args provided', function () {
            var heap = new BinaryHeap_1.BinaryHeap([], testComparatorMax);
            expect(heap).toBeDefined();
        });
        it('should build heap with initial elemets', function () {
            var heap = new BinaryHeap_1.BinaryHeap([], testComparatorMax);
        });
    });
    describe('toArray()', function () {
        it('should return current heap as array', function () {
            var heap = new BinaryHeap_1.BinaryHeap([4, 1, 2, 3], testComparatorMax);
            expect(heap.toArray()).toEqual([3, 2, 1]);
        });
    });
    describe('size()', function () {
        it('should return a valid size', function () {
            expect(new BinaryHeap_1.BinaryHeap([], testComparatorMax).size()).toBe(0);
            expect(new BinaryHeap_1.BinaryHeap([1, 2, 3], testComparatorMax).size()).toBe(3);
        });
    });
});
//# sourceMappingURL=BinaryHeap.test.js.map