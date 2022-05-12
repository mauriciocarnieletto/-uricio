export class DynamicArray<T> {
  capacity = 0;
  len = 0;
  protected data: (T | undefined)[];

  constructor(capacity = 0) {
    if (capacity < 0) throw Error("The array capacity must be greather than 0");
    this.capacity = capacity;
    this.data = new Array(capacity);
  }

  get size() {
    return this.len;
  }

  get(index: number) {
    return this.data[index];
  }

  set(index: number, value: T) {
    this.data[index] = value;
  }

  clear() {
    for (let i = 0; i < this.len; i++) {
      this.data[i] = undefined;
    }
    this.len = 0;
  }

  add(value: T) {
    if (this.len + 1 >= this.capacity) {
      this.resize();
    }

    this.data[this.len++] = value;
  }

  removeAt(index: number) {
    const value = this.data[index];
    const newData = new Array(this.len - 1);

    for (let i = 0, j = 0; i < this.len; i = i + 1, j = j + 1) {
      if (i === index) j--;
      else {
        newData[j] = this.data[i];
      }
    }
    this.data = newData;
    this.capacity = --this.capacity;
    this.len = --this.len;

    return value;
  }

  remove(value: T) {
    this.data.forEach(
      (itemValue, key) => itemValue === value && this.removeAt(key)
    );
  }

  indexOf(value: T) {
    let index = -1;
    for (let i = 0; i <= this.len; i++) {
      if (this.data[i] === value) {
        index = i;
        break;
      }
    }

    return index;
  }

  contains(value: T) {
    return this.indexOf(value) > -1;
  }

  toString() {
    return `[${this.data.join(",")}]`;
  }

  protected async resize() {
    const newCapacity = this.capacity * 2;
    const newData = new Array(newCapacity);

    for (const key in this.data) {
      newData[key] = this.data[key];
    }

    this.data = newData;
    this.capacity = newCapacity;
  }
}
