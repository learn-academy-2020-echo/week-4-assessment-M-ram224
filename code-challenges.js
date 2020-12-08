// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

// create a function that takes in an array
const outNSwap = (arr) => {
  // if arrays length is less than or equal to 1
  if (arr.length <= 1) {
    // return "the array is empty"
    return "the array is empty"
  } else {
    // else array.shift
    arr.shift()
    // loop through array.length
    for (let i = 0; i < arr.length; i++) {
      // randomIndex = from the lowest index randomize the arrays length
      randomIndex = Math.floor(Math.random() * arr.length)
      // temp = arrays randomized index
      temp = arr[randomIndex]
      // arrays randomized index = arrays index
      arr[randomIndex] = arr[i]
      // arrays index = the arrays randomized index
      arr[i] = temp
    }
    return arr
  }
}
console.log(outNSwap(collections))
console.log(outNSwap(collections))
console.log(outNSwap(collections))
console.log(outNSwap(collections))
console.log(outNSwap(collections))

// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// function takes an array
const sumOfAll = (array) => {
  // create a variable to multiply its own element using .map
  let arrItem = array.map((value) => {
    return value * value * value
  })
  // then adds the totals together
  return arrItem.reduce(
    (reducer = (accumulator, currentValue) => accumulator + currentValue)
  )
}
console.log(sumOfAll(cubeAndSum1))
console.log(sumOfAll(cubeAndSum2))

// ******* another way to do this problem *******
// function takes an array
const cubeAndSum = (array) => {
  // set the sum variable to 0
  let sum = 0
  // forloop through the index in the array
  for (var i in array) {
    // Math.pow(base, exponent)
    // sum = 0 adds= arrays index cubed
    sum += Math.pow(array[i], 3)
  }
  return sum
}

// console.log(cubeAndSum(cubeAndSum1))
// console.log(cubeAndSum(cubeAndSum2))

// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

// function takes an array
const minMax = (arr) => {
  // use .min() to find the minimum number in the arr
  let arr1 = Math.min(...arr)
  // use .max() to find the maximum number in the arr
  let arr2 = Math.max(...arr)
  // return only the min and max
  return [arr1, arr2]
}

console.log(minMax(nums1))
console.log(minMax(nums2))

// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

// function takes a "str"
const everyOther = (str) => {
  // split up the string
  let splitString = str.split("")
  // map through the split string
  let upperCaseOddIndex = splitString.map((value, index) => {
    //if index remainer of 2 does not 0
    if (index % 2 !== 0) {
      // return str value.toUpperCase on every other odd letter
      return value.toUpperCase()
    } else {
      return value
    }
  })
  // return the str joined with every other odd letter capitalized
  return upperCaseOddIndex.join("")
}
console.log(everyOther(testString1))
console.log(everyOther(testString2))
// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

// function will take in two arrays
const combineNoDuplicates = (array1, array2) => {
  // create a new function set of array
  const set = new Set([...array1, ...array2])
  // combine array set into a new array
  return Array.from(set)
}
// combining both our variables together
console.log(combineNoDuplicates(arr1, arr2))
