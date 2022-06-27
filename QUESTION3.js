//Perform Pre-order, Post-order, In-order traversal
console.clear()
class Node
{
	constructor(item)
	{
		this.data=item;
		this.left=null;
    this.right=null;
	}
}
	let root;
	function maxDepth(node)
	{
		if (node == null)
			return 0;
		else
		{
			let lDepth = maxDepth(node.left);
			let rDepth = maxDepth(node.right);
			if (lDepth > rDepth)
				return (lDepth + 1);
			else
				return (rDepth + 1);
		}
	}
		root = new Node(1);
		root.left = new Node(2);
		root.right = new Node(3);
		root.left.left = new Node(4);
		root.left.right = new Node(5);
		console.log("Height of tree is : " +
									maxDepth(root));
console.log(root)

function inorder(node)
{
    if(node !== null)
    {
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);
    }
}
preorder(node)
{
    if(node !== null)
    {
        console.log(node.data);
        this.preorder(node.left);
        this.preorder(node.right);
    }
}
postorder(node)
{
    if(node !== null)
    {
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.data);
    }
}
