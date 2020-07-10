def square_root(n)
  return if n < 0
  i = 0
  while i**2 <= n
   i += 1
  end
  return i-1
end

p square_root(124)