require 'set'
def array_pair_sum(array, k)
  set = Set.new
  pairs = []
  array.each do |elem|
    target = k - elem
    unless set.include?(target)
      set.add(elem)
    else
      min = [target, elem].min
      max = [target, elem].max
      pairs.push([min, max])
    end
  end
  return pairs
end
pp array_pair_sum([1, 1, 2, 3, 4], 5)