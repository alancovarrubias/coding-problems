def next_day(cells)
  cells.map.with_index do |cell, index|
      if index == 0 || index == 7
          0
      else
          cells[index-1] == cells[index+1] ? 1 : 0
      end
  end
end
def prison_after_n_days(cells, n)
  (1..n).each do |day|
      puts day
      cells = next_day(cells)
      pp cells
  end
  return cells
end
n = 30
prison_after_n_days([1,0,0,1,0,0,1,0], n)
