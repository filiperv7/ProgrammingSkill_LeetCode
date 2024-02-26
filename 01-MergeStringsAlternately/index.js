// (LeetCode) 1768. Merge Strings Alternately

var mergeAlternately = function (word1, word2) {
  let i = 0
  let result = []

  do {
    result.push(word1[i], word2[i])

    i++
  } while (i < word1.length || i < word2.length)

  console.log(result.join(''))
}

mergeAlternately('acegikm', 'bdfhjln')
