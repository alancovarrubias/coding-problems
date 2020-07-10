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
def three_sum(nums)
    quicksort(nums)
    solutions = []
    hash = {}
    (0...nums.length).each do |x_index|
        x = nums[x_index]
        next if hash[x]
        (x_index+1...nums.length).each do |y_index|
            y = nums[y_index]
            hash[x] ||= {}
            next if hash[x][y]
            (y_index+1...nums.length).each do |z_index|
                z = nums[z_index]
                sum = x + y + z
                if sum == 0
                    solutions.push([x, y, z])
                    break
                end
            end
            hash[x][y] ||= true
        end
    end
    return solutions
end

three_sum(nums)