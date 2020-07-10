def even_occurrence(int_array)
  even = 0
  int_array.each do |i|
    even ^= i
  end
  int_array.uniq.each do |i|
    even ^= i
  end
  return even
end

puts even_occurrence([1, 2, 3, 4, 5, 6, 1])