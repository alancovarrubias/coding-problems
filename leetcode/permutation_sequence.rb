def factorial(n)
    (1..n).inject(:*)
end

def get_permutation(n, k, current=[], numbers_left=[])
    if numbers_left.empty?
        numbers_left = (1..n).to_a
    end
    if n == 1
        return current.push(numbers_left[n-1]).join('')
    end
    factorial_minus_one = factorial(n-1)
    num_index = (k-1)/factorial_minus_one
    remainder = k % factorial_minus_one
    current.push(numbers_left.delete_at(num_index))
    return get_permutation(n-1, remainder, current, numbers_left)
end

get_permutation(4, 9)
