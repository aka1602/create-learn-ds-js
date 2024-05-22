class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const node = new Node(value);

    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }
  prepend(value) {
    const generatedValObj = {
      value,
      next: null,
    };
    generatedValObj.next = this.head;
    this.head = generatedValObj;
    this.length++;
    return this;
  }
  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode != null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
  insert(index, value) {
    let counter = 0;
    const generatedValObj = {
      value,
      next: null,
    };
    let currentNode = this.head;
    let previousNode = null;
    if (index === 1) {
      this.prepend(value);
      return this.printList();
    } else if (index === this.length) {
      this.append(value);
      return this.printList();
    }
    while (currentNode != null) {
      if (index - 1 === counter) {
        console.log(previousNode, currentNode.next);
        previousNode.next = generatedValObj;
        generatedValObj.next = currentNode;
        break;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
      counter++;
    }
    return this.printList();
  }
  reverse() {
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
      console.log(first.value, second.value);
    }
    this.head.next = null;
    this.head = first;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(18);
myLinkedList.prepend(1);
myLinkedList.insert(3, 24);
console.log(myLinkedList.printList());
myLinkedList.reverse();
console.log(myLinkedList.printList());
