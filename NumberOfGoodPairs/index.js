// (LeetCode) 1512. Number of Good Pairs

var numIdenticalPairs = function (nums) {
  let goodPairs = 0
  let leftNum
  let i = 0
  let index = 0

  while (i !== nums.length) {
    if (index == 0) {
      leftNum = nums[i]
      console.log(`Atual: ${nums[i]}`)
    }

    if (i < index && leftNum == nums[index]) {
      console.log(`Comparing ${leftNum} with ${nums[index]}`)
      ++goodPairs
    }

    if (index == nums.length - 1) {
      ++i
      index = 0
    } else {
      ++index
    }
  }

  return goodPairs
}

// console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]))
// console.log(numIdenticalPairs([1, 2, 3]))
// console.log(numIdenticalPairs([1, 1, 1, 1]))

// goodPairs = 1
// i = 0
// leftNum = 1
// nums[index] = 1
// index = 3
