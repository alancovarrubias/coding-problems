# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @return {Integer[][]}
def convert_to_array(node, level, values)
    values.unshift([]) if values.length == level
    index = (level * -1) - 1
    values[index].push(node.val)
    convert_to_array(node.left, level+1, values) if node.left
    convert_to_array(node.right, level+1, values) if node.right
end
def level_order_bottom(root)
    tree_array = []
    convert_to_array(root, 0, tree_array) if root
    return tree_array
end
