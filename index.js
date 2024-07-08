// problem-1: Write a function that takes a string as input and returns the string reversed.

{
    function reversedString(str){
    return str.split('').reverse().join()
}

const result = reversedString("Hello world")
// console.log(result);
}

// problem-2: Write a function that returns the largest number from an array of numbers.
{
function findLargestNumber(arr){
    return Math.max(...arr)
}
const result = findLargestNumber([5, 150, 8, 10, 87])
// console.log(result);
}

//problem-3: Write a function that returns the sum of all numbers in an array.
{
    function findSummation(arr){
        return arr.reduce((acc, cur) => acc +cur, 0)
    }

    const result= findSummation([2, 3, 5, 7])
    // console.log(result);
} 

// problem-4: Write a function that removes duplicate values from an array.
{
    function removeDuplicate(arr){
        return [...new Set(arr)]
    }

    const result = removeDuplicate([2, 5, 5, 7, 2, 4])
    // console.log(result);
}
// problem-5: Write a function that merges two arrays and removes duplicate values.

{
    function margArrays(arr1, arr2){
        return [...new Set([...arr1, ...arr2])]
    }
    const arr1 = [2, 5, 5, 7, 2, 4]
    const arr2 = [5, 8, 5, 7, 5, 7, 9]
    const result = margArrays(arr1, arr2)
    // console.log(result);
}

// Capitalize the First Letter of Each Word.
{
    function capitalizeFirstLetter(str){
        const words = str.split(" ")

        for(let i = 0; i < words.length; i++){
            words[i] = words[i][0].toUpperCase() + words[i].substr(1)
        }
        console.log(words);
    }
    const result = capitalizeFirstLetter("hello world this is mahdi mortuza")
}

 