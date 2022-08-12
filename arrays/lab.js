function maxOfTwoNumbers(x,y) {
    return (x>=y ? x : y)
}

console.log(maxOfTwoNumbers(5,4))

function maxOfThree(x,y,z) {
    if (x>=y) {
        if(x>=y) {
            return x
        } else {
            return y
        }
    } else if (y>=z) {
        return y
    } else {
        return z
    }
}

console.log(maxOfThree(5,4,6))

function isCharAVowel(x) {
    let lower = x.toLowerCase()
    switch (lower) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true
        default:
            return false
    }
}

console.log(isCharAVowel("A"))

function sumArray(numbers) {
    let output = 0
    for (let i =0; i < numbers.length; i++) {
        output +=numbers[i]
    }
    return output
}
console.log(sumArray([1,2,4]))

function multiplyArray(numbers) {
    let output = 1
    for (let i =0; i < numbers.length; i++) {
        output *=numbers[i]
    }
    return output
}
console.log(multiplyArray([1,2,4]))

function numArgs(...a) {
    return a.length
}
console.log(numArgs(1,2,3,4))

function reverseString(x){
    let output = []
    for(let i=x.length; i>=0; i--) {
        output.push(x[i])
    }
    return output.join('')
}
console.log(reverseString('Hello'))

function longestStringInArray(stringArray) {
    let output = 0
    for (let i=0; i< stringArray.length; i++){
        if(stringArray[i].length > output) {
            output = stringArray[i].length
        }
    }
    return output
}
console.log(longestStringInArray(['Hello', 'hi', 'yo']))

function stringsLongerThan(stringArray, z) {
    let output = []
    for (let i=0; i< stringArray.length; i++){
        if(stringArray[i].length > z) {
            output.push(stringArray[i])
        }
    }
    return output
}
console.log(stringsLongerThan(['Hello', 'hi', 'yo'], 1))

function addList(...y) {
    if(!y) {
        return 0
    }
    let sum = 0

    for (let i=0; i<y.length; i++) {
        sum += y[i]
    }
    return sum
}

console.log(addList(1))
console.log(addList(1,50,1.23))
console.log(addList(7,-12))