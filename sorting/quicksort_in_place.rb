def swap(arr, i, j)
  temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
end

def partition(arr, low, high)
  pivot = arr[high]
  i = low - 1
  (low...high).each do |j|
    if arr[j] <= pivot
      i += 1
      swap(arr, i, j)
    end
  end
  swap(arr, i+1, high)
  return i + 1
end

def quicksort(arr, low=0, high=arr.size-1)
  if low < high
    pi = partition(arr, low, high)
    quicksort(arr, low, pi - 1)
    quicksort(arr, pi + 1, high)
  end
end
