import { BinaryHeap } from "./BinaryHeap";
import { IBinaryHeapDominationComparatorFn } from "./abstract/IBinaryHeap";

const testComparatorMax: IBinaryHeapDominationComparatorFn<number> = (value, otherValue) => value > otherValue
const testComparatorMin: IBinaryHeapDominationComparatorFn<number> = (value, otherValue) => value < otherValue

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

    describe('toArray', () => {
        it('should return current heap as array', () => {
            let heap = new BinaryHeap<number>([1, 10, 3], testComparatorMax);
            expect(heap.toArray()).toEqual([10, 1, 3]);
        });
    });

    describe('size', () => {
        it('should return a valid size', () => {
            expect(new BinaryHeap<number>([], testComparatorMax).size()).toBe(0);
            expect(new BinaryHeap<number>([1, 2, 3], testComparatorMax).size()).toBe(3);
        });
    });

    describe('isLeaf', () => {
        it('should return true for an array of 1 element', () => {
            let heap = new BinaryHeap<number>([1], testComparatorMax);
            expect(heap.isLeaf(heap.toArray(), 0)).toBe(true)
        });
        it('should return false for a top element of  array of 3 element', () => {
            let heap = new BinaryHeap<number>([1, 2, 3], testComparatorMax);
            expect(heap.isLeaf(heap.toArray(), 0)).toBe(false)
        });
        it('should return false for a top element of  array of 2 (only left clild) element', () => {
            let heap = new BinaryHeap<number>([1, 2], testComparatorMax);
            expect(heap.isLeaf(heap.toArray(), 0)).toBe(false)
        });
        it('should return true for a left child element of array of 2 (only left clild) element', () => {
            let heap = new BinaryHeap<number>([1, 2], testComparatorMax);
            expect(heap.isLeaf(heap.toArray(), 1)).toBe(true)
        });        
    });

    describe('swapInPlace', () => {
        it('should swap to elements in array', () => {
            let heap = new BinaryHeap<number>([], testComparatorMax);
            let target = [1, 5];
            heap.swapInPlace(target, 0, 1);
            expect(target).toEqual([5, 1]);
        });
    });

    describe('siftDownInPlace', () => {
        it('should siftDown a min element in Max heap', () => {
            let heap = new BinaryHeap<number>([], testComparatorMax);
            let target = [1, 5, 10];
            heap.siftDownInPlace(target, 0, testComparatorMax);
            expect(target).toEqual([10, 5, 1]);
        });
        it('should siftDown a max element in Min heap', () => {
            let heap = new BinaryHeap<number>([], testComparatorMin);
            let target = [10, 5, 1];
            heap.siftDownInPlace(target, 0, testComparatorMin);
            expect(target).toEqual([1, 5, 10]);
        });        
    });

    describe('buildHeapArrayInplace', () => {
        it('should build a valid min heap', () => {
            let heap = new BinaryHeap<number>([], testComparatorMin);
            let target = [10, 5, 4, 1];
            heap.buildHeapArrayInplace(target, testComparatorMin);
            expect(target).toEqual([1, 5, 4, 10]);
        });
        it('should build a valid max heap', () => {
            let heap = new BinaryHeap<number>([], testComparatorMax);
            let target = [1, 10, 5, 4, 1];
            heap.buildHeapArrayInplace(target, testComparatorMax);
            expect(target).toEqual([10, 4, 5, 1, 1]);
        });        
    });

    describe('siftUpInPlace', () => {
        it('should bring new max element to the top in MaxHeap', () => {
            let heap = new BinaryHeap<number>([], testComparatorMax);
            let target = [10, 5, 3, 100];
            heap.siftUpInPlace(target, target.length - 1, testComparatorMax);
            expect(target).toEqual([100, 10, 3, 5]);
        });
        it('should bring new min element to the top in MinHeap', () => {
            let heap = new BinaryHeap<number>([], testComparatorMin);
            let target = [3, 5, 6, 1];
            heap.siftUpInPlace(target, target.length - 1, testComparatorMin);
            expect(target).toEqual([1, 3, 6, 5]);
        });        
    });

    describe('push', () => {
        it('should allow to build MaxHeap', () => {
            let heap = new BinaryHeap<number>([], testComparatorMax);
            for (let e of [10, 5, 3, 1, 8]) {
                heap.push(e);
            }
            expect(heap.toArray()).toEqual([10, 8, 3, 1, 5]);
        });
        
    });

    describe('pop', () => {
        it('should extract min element from MinHeap', () => {
            let heap = new BinaryHeap<number>([10, 8, 3, 1, 5], testComparatorMin);
            let actual = [];
            while (!heap.isEmpty()) {
                actual.push(heap.pop());
            }
            expect(actual).toEqual([1, 3, 5, 8, 10]);
        });

        it('should extract max element from MaxHeap', () => {
            let heap = new BinaryHeap<number>([10, 8, 3, 1, 5], testComparatorMax);
            let actual = [];
            while (!heap.isEmpty()) {
                actual.push(heap.pop());
            }
            expect(actual).toEqual([10, 8, 5, 3, 1]);
        });
    });    
});