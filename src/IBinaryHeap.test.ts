import { IBinaryHeap, IBinaryHeapDominationComparatorFn } from "./IBinaryHeap";
import { BinaryHeap } from "./BinaryHeap";

// Number comparators:
const CmpNumMax: IBinaryHeapDominationComparatorFn<number> = (value, otherValue) => value > otherValue;
// for future use // const CmpNumMin: IBinaryHeapDominationComparatorFn<number> = (value, otherValue) => value < otherValue;

// Object comparators

const CmpPersonMax: IBinaryHeapDominationComparatorFn<IPerson> = (value, otherValue) => value.favoriteNumber > otherValue.favoriteNumber;
// for future use // const CmpPersonMin: IBinaryHeapDominationComparatorFn<IPerson> = (value, otherValue) => value.favoriteNumber < otherValue.favoriteNumber;

describe('IBinaryHeap properties test', () => {
    describe('create', () => {
        describe('of T = number', () => {
            it('should create a new heap of 0 elements', () => {
                let heap: IBinaryHeap<number> = BinaryHeap.create<number>([], CmpNumMax);
                expect(heap.toArray()).toEqual([]);
            });

            it('should create a new heap of 2 elements', () => {
                let heap: IBinaryHeap<number> = BinaryHeap.create<number>([3, 10], CmpNumMax);
                expect(heap.toArray()).toEqual([10, 3]);
            });

            it('should create a new heap of 4 elements', () => {
                let heap: IBinaryHeap<number> = BinaryHeap.create<number>([3, 10, 5, 20, 30], CmpNumMax);
                expect(heap.toArray()).toEqual([30, 20, 5, 3, 10]);
            });
        });
        describe('of T = IPerson', () => {
            it('should create a new heap of 0 elements', () => {
                let heap: IBinaryHeap<IPerson> = BinaryHeap.create<IPerson>([], CmpPersonMax);
                expect(heap.toArray()).toEqual([]);
            });

            it('should create a new heap of 2 elements', () => {
                let heap: IBinaryHeap<IPerson> = BinaryHeap.create<IPerson>([freddy3, hannibal10], CmpPersonMax);
                expect(heap.toArray()).toEqual([hannibal10, freddy3]);
            });

            it('should create a new heap of 4 elements', () => {
                let heap: IBinaryHeap<IPerson> = BinaryHeap.create<IPerson>([freddy3, hannibal10, dracula5, jack20, leatherface30], CmpPersonMax);
                expect(heap.toArray()).toEqual([leatherface30, jack20, dracula5, freddy3, hannibal10]);
            });
        });
    });
});

// Test constants
interface IPerson {
    name: string;
    favoriteNumber: number;
}

const freddy3: IPerson = {
    name: "FREDDY KRUEGER",
    favoriteNumber: 3
};

const hannibal10: IPerson = {
    name: "HANNIBAL LECTER",
    favoriteNumber: 10
};

const dracula5: IPerson = {
    name: "DRACULA",
    favoriteNumber: 5
};

const jack20: IPerson = {
    name: "JACK TORRANCE",
    favoriteNumber: 20
};

const leatherface30: IPerson = {
    name: "LEATHERFACE",
    favoriteNumber: 30
};