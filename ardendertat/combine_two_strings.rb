def two_strings_combined?(str1, str2, str3)
  unless str1 && str2 && str3
    str1 ||= ""
    str2 ||= ""
    str3 ||= ""
    if str1 + str2 == str3
      return true
    else
      return false
    end
  end
  return false unless str1.length + str2.length == str3.length
  return true if str3[0] == str1[0] && two_strings_combined?(str1[1..], str2, str3[1..])
  return true if str3[0] == str2[0] && two_strings_combined?(str1, str2[1..], str3[1..])
  return false
end

pp two_strings_combined?("ccc", "cca", "accccc")