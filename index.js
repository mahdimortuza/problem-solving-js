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
