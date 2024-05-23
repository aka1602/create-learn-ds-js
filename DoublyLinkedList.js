class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      previous: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }
  preppend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length += 1;
  }
  insert(index, value) {
    const newNode = new Node(value);
    if (index >= this.length) {
      return this.append(value);
    } else {
      let currentNode = this.head;
      let counter = 0;

      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      newNode.previous = currentNode.previous;
      currentNode.previous.next = newNode;
      newNode.next = currentNode;
      currentNode.previous = newNode;
      this.length += 1;
    }
  }
  printlist() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr);
  }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(30);
myDoublyLinkedList.append(90);
myDoublyLinkedList.preppend(120);
myDoublyLinkedList.insert(2, 50);
myDoublyLinkedList.printlist();
console.log(myDoublyLinkedList);
