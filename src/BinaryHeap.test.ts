import { BinaryHeap } from "./BinaryHeap";
import { IBinaryHeapComparatorFn } from "./abstract/IBinaryHeap";

const testComparatorMax: IBinaryHeapComparatorFn<number> = (value, otherValue) => value > otherValue

describe('BinaryHeap', () => {
    describe('constructor', () => {
        it('should create a heap with all args provided', () => {
            let heap = new BinaryHeap<number>([], testComparatorMax)
            expect(heap).toBeDefined();
        });
        it('should build heap with initial elemets', () => {
            let heap = new BinaryHeap<number>([], testComparatorMax)
        });
    });

    describe('toArray()', () => {
        it('should return current heap as array', () => {
            let heap = new BinaryHeap<number>([4, 1, 2, 3], testComparatorMax);
            expect(heap.toArray()).toEqual([3, 2, 1]);
        });
    });

    describe('size()', () => {
        it('should return a valid size', () => {
            expect(new BinaryHeap<number>([], testComparatorMax).size()).toBe(0);
            expect(new BinaryHeap<number>([1, 2, 3], testComparatorMax).size()).toBe(3);
        });
    });

});