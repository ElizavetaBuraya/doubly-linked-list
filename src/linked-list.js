const Node = require('./node');

class LinkedList {
    constructor(length = 0, _head = null, _tail = null) {
      this.length = length;
      this._head = _head;
      this._tail = _tail;
    }

    append(data) {

      if (this.length == 0)
      {
        this._head.data = data;
        this._tail.data = data;

        this.length++;
      }

      else {
        node.prev = this._tail;
        this._tail.next = node;
        this._tail = node;

        this.length++;
      }
    }

    head() {
      if (this.length != 0)
      {
       var headNode = new Node();
       headNode = this._head;

       return headNode.data;
      }
    }

    tail() {
      if (this.length != 0)
      {
       var tailNode = new Node();
       tailNode = this._tail;

       return tailNode.data;
      }
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
      var node = this._head;

      var counter = 0;

      while (index != counter)
      {
        node = node.next;

        counter++;
      }

      node.data = data;
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
      this._length = 0;
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
      }
      this.length--;
    }

    reverse() {
      var node = new Node();
      node = this._head;
      var nodeBuf = new Node();

      var counter = 0;

      while (node != null)
      {
        nodeBuf = node.prev;
        node.prev = node.next;
        node.next = nodeBuf;

        node = node.prev;
      }

      this._head = nodeBuf.prev;
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
