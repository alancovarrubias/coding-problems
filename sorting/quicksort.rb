def quicksort(arr)
  return arr if arr.length <= 1
  pivot = arr.pop()
  less_than = arr.select {|elem| elem < pivot}
  greater_than = arr.select {|elem| elem >= pivot}
  return quicksort(less_than) + [pivot] + quicksort(greater_than)
end
