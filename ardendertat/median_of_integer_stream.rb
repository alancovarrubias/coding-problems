class MedianStream
  def initialize
    @size = 0
    @min_heap = []
    @max_heap = []
  end

  def insert(num)
    @max_heap.push(num)
    if @size%2 == 0
      unless @size == 0
        max = @max_heap.max
        min = @min_heap.min
        if max > min
          @min_heap.push(@max_heap.delete(max))
          @max_heap.push(@min_heap.delete(min))
        end
      end
    else
      @min_heap.push(@max_heap.delete(@max_heap.max))
    end
    @size += 1
  end

  def calculate_median
    if @size%2 == 0
      return (@min_heap.min + @max_heap.max) / 2.0
    else
      return @max_heap.max.to_f
    end
  end
end

stream = MedianStream.new
[1, 100, 3, 4, 5, 6, 7].each do |i|
  stream.insert(i).
  puts stream.calculate_median
end