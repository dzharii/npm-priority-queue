"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BinaryHeap_1 = require("./BinaryHeap");
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue(initialElements, doesFirstValueDominateOtherCmp) {
        this.heap = new BinaryHeap_1.BinaryHeap(initialElements, doesFirstValueDominateOtherCmp);
    }
    PriorityQueue.prototype.size = function () {
        return this.heap.size();
    };
    PriorityQueue.prototype.toArray = function () {
        return this.heap.toArray();
    };
    PriorityQueue.prototype.push = function (element) {
        this.heap.push(element);
    };
    PriorityQueue.prototype.pop = function () {
        return this.heap.pop();
    };
    PriorityQueue.prototype.remove = function (predicate) {
        return this.heap.remove(predicate);
    };
    PriorityQueue.prototype.peek = function () {
        return this.heap.peek();
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.heap.isEmpty();
    };
    return PriorityQueue;
}());
exports.PriorityQueue = PriorityQueue;
//# sourceMappingURL=PriorityQueue.js.map