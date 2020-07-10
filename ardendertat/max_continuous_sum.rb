def max_continuous_sum(array)
  return array[0] if array.length == 1
  sum = array.sum
  return [sum, max_continuous_sum(array[1..]), max_continuous_sum(array[0...-1])].max
end
def max_continuous_sum(array)
  if array.length == 0
    return
  end
  max_sum = current_sum = array[0]
  array[1..].each do |num|
    current_sum = [current_sum+num, num].max
    max_sum = [current_sum, max_sum].max
  end
  return max_sum
end
time = Time.now
pp max_continuous_sum([4, -3, -2, 5])
pp time - Time.now