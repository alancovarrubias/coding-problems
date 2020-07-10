def next_palindrome_num(num)
  digit_array = num.to_s.split('').map(&:to_i)
  (-1).downto(digit_array.size*-1).each_with_index do |i, opp_i|
    val = digit_array[i]
    opp_val = digit_array[opp_i]
    p val
    p opp_val
    if val > 9 || val > opp_val
      digit_array[i] = val > 9 ? 0 : opp_val
      digit_array[i-1] += 1
    elsif val < opp_val
      val = opp_val
    end
    pp digit_array
  end
  return digit_array.join().to_i
end
