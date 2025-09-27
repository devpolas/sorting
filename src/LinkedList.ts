class Node {
  next: Node | null = null;
  constructor(public value: number) {}
}

export class LinkedList {
  head: Node | null = null;

  append(value: number): void {
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
  get print(): number[] {
    const nodes: number[] = [];
    if (!this.head) {
      return [0];
    }

    let node: Node | null = this.head;

    while (node) {
      nodes.push(node.value);
      node = node.next;
    }

    return nodes;
  }
}
