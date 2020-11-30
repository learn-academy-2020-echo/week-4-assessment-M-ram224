# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest. Use the test variables provided.

full_arr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
full_arr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

# create a method that takes in an array
def odds_only(array)
    # seperate odd numbers .odd?
    odd_arr = array.select do |val|
        # filter out integers
       if val.is_a? Integer 
            # odd numbers only
            val.odd?
       end
    end
    # sort the array
    odd_arr.sort
end
# output least to greatest
p odds_only full_arr1
p odds_only full_arr2


# This is the same thing in one line
# array.select { |val| val.odd? if val.is_a? Integer }.sort

# --------------------2) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_a = 'a'
# Expected output: ['tea', 'soda water']

# the method takes an array and a str value
def spec_letter(array, char)
    # select through the array
    array.select do |str|
        # using include to find the substrings
        # if str has specific letter
        str.include? char
    end
end
# return the new array with only the selected str values
p spec_letter(beverages_array, letter_o)
p spec_letter(beverages_array, letter_a)


# -------------------3) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# method will take a str
def no_vowels str
    # delete the vowels in the str if str has vowels a, e, i, o, u
     str.delete 'aeiou'
end
# return the modified str
p no_vowels album1
p no_vowels album2
p no_vowels album3

# -------------------4) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

# method will take an array
def sum_of array
# add the numbers of the array
    array.sum
end
p sum_of nums_array1
p sum_of nums_array2



# -------------------5) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# STRETCH
is_palindrome4 = 'Was it a cat I saw'
# Expected output: Was it a cat I saw is a palindrome'

# method will take a 'str'
def word_check str
    # set str to be lowercase str.downcase
    simple_str = str.downcase.delete(' ')

    # check if the str .reverse is the same
    if simple_str == simple_str.reverse
        "#{str} is a palidrome"
    else
        "#{str} is not a palidrome"
    end
end


# return if the output is or isnt a palidrome
p word_check is_palindrome1
p word_check is_palindrome2
p word_check is_palindrome3
p word_check is_palindrome4