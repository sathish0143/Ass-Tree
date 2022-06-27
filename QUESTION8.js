//Count subtress that sum up to a given value x in a binary tree
    class Node {
        constructor(data) {
            this.data = data;
            this.left = null;
            this.right = null;
        }
    };

    function getNode(data) {
        let newNode
            = new Node(data);
        return newNode;
    }
    function digitSum(N) {
        let sum = 0;
        while (N) {
            sum += N % 10;
            N = Math.floor(N / 10);
        }
        return sum;
    }
    function replaceNodes(root) {
        if (!root)
            return;
        root.data = digitSum(root.data);
        replaceNodes(root.left);
        replaceNodes(root.right);
    }
    function countSubtreesWithSumX(root,
        count, x) {
        if (!root)
            return 0;
        let ls = countSubtreesWithSumX(
            root.left, count, x);
        let rs = countSubtreesWithSumX(
            root.right, count, x);
        let sum = ls + rs + root.data;
        if (sum == x)
            count++;
        return sum;
    }
    function countSubtreesWithSumXUtil(root, x) {
        if (!root)
            return 0;
        let count = 0;
        let ls = countSubtreesWithSumX(
            root.left, count, x);
        let rs = countSubtreesWithSumX(
            root.right, count, x);
        if ((ls + rs + root.data) == x)
            count++;
        return count;
    }
    let N = 7;
    let root = getNode(10);
    root.left = getNode(2);
    root.right = getNode(3);
    root.left.left = getNode(9);
    root.left.right = getNode(3);
    root.right.left = getNode(4);
    root.right.right = getNode(7);
    replaceNodes(root);
    let X = 29;
    console.log(countSubtreesWithSumXUtil(root, X));
