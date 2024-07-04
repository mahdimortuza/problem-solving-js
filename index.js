// problem-1: Write a function that takes a string as input and returns the string reversed.

function reversedString(str){
    return str.split('').reverse().join()
}

const result = reversedString("Hello world")
console.log(result);