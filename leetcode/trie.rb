class Trie

=begin
    Initialize your data structure here.
=end
    attr_reader :val
    def initialize(val='root')
        @val = val
        @children = []
    end


=begin
    Inserts a word into the trie.
    :type word: String
    :rtype: Void
=end
    def insert(word)
        if word.empty?
            char = "\0"
            child = Trie.new(char)
            @children.push(child)
            return
        end
        char = word[0]
        rest = word[1..-1]
        child = search_children(char)
        if child
            child.insert(rest)
        else
            child = Trie.new(char)
            @children.push(child)
            child.insert(rest)
        end
    end


=begin
    Returns if the word is in the trie.
    :type word: String
    :rtype: Boolean
=end
    def search(word)
        children = starts_with(word)
        return children.find { |child| child.val == "\0" }
    end


=begin
    Returns if there is any word in the trie that starts with the given prefix.
    :type prefix: String
    :rtype: Boolean
=end
    def starts_with(prefix)
        return @children if prefix.empty?
        char = prefix[0]
        child = search_children(char)
        if child
            rest = prefix[1..-1]
            return child.starts_with(rest)
        else
            return false
        end
    end
    
     private
        def search_children(char)
            return @children.find { |child| child.val == char }
        end
end

trie = Trie.new
trie.insert("apple")
puts trie.starts_with("appl")


