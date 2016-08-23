//Build constructor; initialize a binary search tree with three optional parameters: key, value, and parent. Initialize variables for this.key, this.value, this.parent, this.left & this.right. If parameters are passed, set to parameter. Otherwise set to null as default.

//Prototype method: insertion (.insert(key, value))
  // 1. Check to see if the parent node is empty
      //If null, set key and value to the parameters passed in
  // 2. Check to see if the passed key is less than parent's key
      //A. Check to see if left node is empty
          // if so, call BinarySearchTree(key, value, this) create new key value pair here
      //B. Else, set new key value pair to the node
  // 3. Else, passed key must be greater than parent's key
      //A. Check to see if righty node is empty
        // if so, call BinarySearchTree(key, value, this) create new key value pair here
      //B. Else, set new key value pair to the node

//Prototype method: Retrieval (.get(key))
  //1. Check if the key is equal to the parent key.
    // if so, return parent's value
  //2. If key is less than the parent's key and the left node exists (is truthy), keep calling .get recursively with this.key set to left node.
  // 3. If key is greater than the parent's key and the right node exists (is truthy), keep calling .get recursively with this.key set to right node.
  // 4. Key does not exist and error is thrown

//Prototype method: Removal (.remove(key))
