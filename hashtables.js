class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = value;
    }
  }
  get(key) {
    let address = this._hash(key);
    if (this.data[address]) {
      console.log(this.data[address]);
      return this.data[address];
    }
  }
  keys() {
    let keys = [];
    for (let i = 0; i <= this.data.length; i++) {
      if (this.data[i]) {
        keys.push(this.data[i][0]);
      }
    }
  }
}
const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.get("apples");
