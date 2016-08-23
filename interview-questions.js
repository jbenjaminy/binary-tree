'use strict'
var tree1  = require('./exercise');
var tree2 = require('./exercise');

/* Write an algorithm to check whether an arbitrary tree is a binary search tree */

let isBinaryTree = (tree) => {
  let root = tree.key
  if (tree.left) {
    if (tree.left.key > root) {
      return false
    }
    if (!isBinaryTree(tree.left)) {
        return false
    }
  }
  if (tree.right) {
    if (tree.right.key < root) {
      return false
    }
    if (!isBinaryTree(tree.right)) {
      return false
    }
  }
return true
}

console.log(isBinaryTree(tree1), '<--tree1');
console.log(isBinaryTree(tree2), '<--tree2');


function print_tree(tree, depth) {
    if (!depth) {
        console.log("" + tree.key);
        depth = 0;
    }
    depth += 1;
    if (tree.left) {
        console.log(" ".repeat(depth) + "<" + tree.left.key);
        print_tree(tree.left, depth);
    }
    if (tree.right) {
        console.log(" ".repeat(depth) + ">" + tree.right.key);
        print_tree(tree.right, depth);
    }
}



/* Write an algorithm to find the height of a binary search tree */
/* Write an algorithm to find the third largest value in a binary search tree */
