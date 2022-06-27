//Print the nodes at odd levels of a tree
console.clear()
class Node
    {
        constructor(data) {
           this.left = null;
           this.right = null;
           this.data = data;
        }
    }
     
    function printOddNodes(root, isOdd)
    {
        if (root == null)
        return;
        if (isOdd == true)
        console.log(root.data + " ");
        printOddNodes(root.left, !isOdd);
        printOddNodes(root.right, !isOdd);
    }
    function newNode(data)
    {
        let node = new Node(data);
        return (node);
    }
    let root = newNode(1);
    root.left = newNode(2);
    root.right = newNode(3);
    root.left.left = newNode(4);
    root.left.right = newNode(5);
    printOddNodes(root, true);