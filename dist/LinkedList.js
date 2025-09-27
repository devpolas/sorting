class Node {
    value;
    next = null;
    constructor(value) {
        this.value = value;
    }
}
export class LinkedList {
    head = null;
    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    get print() {
        const nodes = [];
        if (!this.head) {
            return [0];
        }
        let node = this.head;
        while (node) {
            nodes.push(node.value);
            node = node.next;
        }
        return nodes;
    }
}
//# sourceMappingURL=LinkedList.js.map