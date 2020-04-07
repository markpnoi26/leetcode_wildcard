// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
const permute = (nums) => {
    return (permuteArr(nums, []))
};  

const permuteArr = (nums, numCol = [], collection =[]) => {
    if (nums.length === 0) {
        collection.push(numCol)
    }
    for (let i=0; i < nums.length; i++) {
        let original = [...numCol]
        numCol.push(nums[i])
        permuteArr(nums.slice(0,i).concat(nums.slice(i+1)), numCol, collection)
        numCol = original
    }
    return collection
}

let input = [1,2,3]
let output = [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
  ]
console.log(permute(input),output )

// input = [1,2,3,4]
// output = [[1,2,3,4],[1,2,4,3],[1,3,2,4],[1,3,4,2],[1,4,2,3],[1,4,3,2],[2,1,3,4],[2,1,4,3],[2,3,1,4],[2,3,4,1],[2,4,1,3],[2,4,3,1],[3,1,2,4],[3,1,4,2],[3,2,1,4],[3,2,4,1],[3,4,1,2],[3,4,2,1],[4,1,2,3],[4,1,3,2],[4,2,1,3],[4,2,3,1],[4,3,1,2],[4,3,2,1]]
// console.log(permute(input))



// const genAnagrams = (word, anagram = "", anagrams = []) => {
//     if (!word) {
//         anagrams.push(anagram)
//         return
//     }

//     for (let i=0; i<word.length; i++) {
//         anagram += word[i]
//         console.log(anagram, word.slice(0, i) + word.slice(i+1), anagrams.length)
//         genAnagrams(word.slice(0, i) + word.slice(i+1), anagram, anagrams)
//         anagram = anagram.slice(0, anagram.length-1)
//     }

//     return [...new Set(anagrams)]
// }


// console.log(genAnagrams("ABCD"))

// console.log("CAT".slice(0,0))
// console.log("CAT".slice(1))