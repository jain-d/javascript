// A Linked List
let node = {
   data: undefined,
   next: undefined
}

function createLinkedList(value) {
   let firstNode = Object.create(node);
   firstNode.data = value;
   return (entry) => {
      let newNode = Object.create(node);
      newNode.data = entry;
      currentNode = firstNode;
      if (!firstNode.next) {
         firstNode.next = newNode;
      } else {
         while (currentNode.next) {
            currentNode = currentNode.next;
         }
         currentNode.next = newNode;
      }
   }
}

let addValues = createLinkedList(15);
addValues(17);
addValues(25);
addValues(27);
