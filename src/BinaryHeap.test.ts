import { BinaryHeap } from "./BinaryHeap";
import { IBinaryHeapComparatorFn } from "./abstract/IBinaryHeap";

const testComparatorMax: IBinaryHeapComparatorFn<number> = (value, otherValue) => value > otherValue
const testComparatorMin: IBinaryHeapComparatorFn<number> = (value, otherValue) => value < otherValue

describe('BinaryHeap', () => {
    describe('constructor', () => {
        it('should create a heap with all args provided', () => {
            let heap = new BinaryHeap<number>([], testComparatorMax)
            expect(heap).toBeDefined();
        });
        describe('MinHeap', () => {
            it('should build MinHeap of 0 elements', () => {
                expect(new BinaryHeap<number>([], testComparatorMin).toArray()).toEqual([]);
            });
            it('should build MinHeap of 1 element', () => {
                expect(new BinaryHeap<number>([10], testComparatorMin).toArray()).toEqual([10]);
            });
            it('should build MinHeap of 2 elements with no changes', () => {
                expect(new BinaryHeap<number>([1, 10], testComparatorMin).toArray()).toEqual([1, 10]);
            });
            it('should build MinHeap of 2 elements with swap', () => {
                expect(new BinaryHeap<number>([10, 1], testComparatorMin).toArray()).toEqual([1, 10]);
            });
            it('should build MinHeap of 3 elements with swap', () => {
                expect(new BinaryHeap<number>([10, 5, 1], testComparatorMin).toArray()).toEqual([1, 5, 10]);
            });
            it('should build MinHeap of 7 elements: min root, 2 parents', () => {
                expect(new BinaryHeap<number>([2, 3, 11, 4, 10, 5, 1], testComparatorMin).toArray()).toEqual([1, 3, 2, 4, 10, 5, 11]);
            });
            it('should build MinHeap of 7 elements: 6 duplicates and one min', () => {
                expect(new BinaryHeap<number>([10, 10, 10, 10, 10, 10, 1], testComparatorMin).toArray()).toEqual([1, 10, 10, 10, 10, 10, 10]);
            });
        });
        describe('MaxHeap', () => {
            it('should build MaxHeap of 0 elements', () => {
                expect(new BinaryHeap<number>([], testComparatorMax).toArray()).toEqual([]);
            });
            it('should build MaxHeap of 1 element', () => {
                expect(new BinaryHeap<number>([10], testComparatorMax).toArray()).toEqual([10]);
            });
            it('should build MaxHeap of 2 elements with no changes', () => {
                expect(new BinaryHeap<number>([10, 1], testComparatorMax).toArray()).toEqual([10, 1]);
            });
            it('should build MaxHeap of 2 elements with swap', () => {
                expect(new BinaryHeap<number>([1, 10], testComparatorMax).toArray()).toEqual([10, 1]);
            });
            it('should build MaxHeap of 3 elements with swap', () => {
                expect(new BinaryHeap<number>([1, 5, 10], testComparatorMax).toArray()).toEqual([10, 5, 1]);
            });
            it('should build MaxHeap of 7 elements: min root, 2 parents', () => {
                expect(new BinaryHeap<number>([2, 3, 11, 4, 10, 5, 1], testComparatorMax).toArray()).toEqual([11, 10, 5, 4, 3, 2, 1]);
            });
            it('should build MaxHeap of 7 elements: 6 duplicates and one min', () => {
                expect(new BinaryHeap<number>([10, 10, 10, 10, 10, 10, 1], testComparatorMax).toArray()).toEqual([10, 10, 10, 10, 10, 10, 1]);
            });
        });
    });

    describe('toArray()', () => {
        it('should return current heap as array', () => {
            let heap = new BinaryHeap<number>([1, 10, 3], testComparatorMax);
            expect(heap.toArray()).toEqual([10, 1, 3]);
        });
    });

    describe('size()', () => {
        it('should return a valid size', () => {
            expect(new BinaryHeap<number>([], testComparatorMax).size()).toBe(0);
            expect(new BinaryHeap<number>([1, 2, 3], testComparatorMax).size()).toBe(3);
        });
    });

});