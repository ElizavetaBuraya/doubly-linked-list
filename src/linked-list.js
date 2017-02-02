const Node = require('./node');

class LinkedList {
    constructor(length = 0, _head = null, _tail = null) {
      this.length = length;
      this._head = _head;
      this._tail = _tail;
    }

    append(data) {
      var node = new Node();
      node.data = data;

      if (this.length == 0)
      {
        this._head = node;
        this._tail = node;

        this.length++;
      }

      else {
        node.prev = this._tail;
        this._tail.next = node;
        this._tail = node;

        this.length++;
      }

      return this;
    }

    head() {
      if (this._head != null)
      {
        return this._head.data;
      }
      else return null;
    }

    tail() {
      if (this._tail != null)
      {
        return this._tail.data;
      }
      else return null;
    }

    at(index) {
      if (this.length >= index)
      {
        var node = new Node();
        node = this._head;

        var counter = 0;

        while (index != counter)
        {
          node = node.next;

          counter++;
        }

        return node.data;
      }
    }

    insertAt(index, data) {
      var node = new Node();
      node = this._head;

      var counter = 0;

      while (index != counter)
      {
        node = node.next;

        counter++;
      }

      if (node != null)
      {
        node.data = data;
      }

      return this;
    }

    isEmpty() {
      if (this.length == 0)
      {
        return true;
      }
      else
      {
        return false;
      }
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
      var node = new Node();
      node = this._head;
      var counter = 0;

      if (this.length >= index)
      {
        while (index != counter)
        {
          node = node.next;

          counter++;
        }

      if (node.prev == null)
        {
          this._head = node.next;
        }

      else if (node.next == null)
          {
            this._tail = node.prev;
          }

      else
         {
           node.prev.next = node.next;
           node.next.prev = node.prev;
         }
      }
      this.length--;

      return this;

    }

    reverse() {
      var node = new Node();
      var tailNode = new Node();
      var headNode = new Node();

      node = this._head;
      tailNode = this._head;
      headNode = this._tail;

      var nodeBuf = new Node();

      while (node != null)
      {
        nodeBuf = node.prev;
        node.prev = node.next;
        node.next = nodeBuf;

        node = node.prev;
      }

      this._head = headNode;
      this._tail = tailNode;

      return this;
    }

    indexOf(data) {
      var node = new Node();
      node = this._head;

      var index = 0;
      var counter = 0;

      while (counter < this.length)
      {
        if (node.data == data)
        {
          index = counter;
          break;
        }
        else
        {
          index = -1;
        }

        node = node.next;
        counter++;
      }

        return index;
    }
}

module.exports = LinkedList;
