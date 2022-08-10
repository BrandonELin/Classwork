let age;

const age2 = 10;

const name = 'Shakespeare: "to be or not to be"';

const employed = true;

const example = undefined;

const example2 = null;

let firstName = "Bob ";

let lastName = "The Builder";

let fullName = firstName + lastName;

console.log(fullName);

// find the sum
let x = 16;
let y = 24;
let z = x + y;
console.log(z);

//different operators
let a = 12;
let b = 28;
let c = b - a;
console.log(c);
let d = z * c;
console.log(d);

//average
let l1 = 1;
let l2 = 2;
let l3 = 3;
let l4 = 4;
let l5 = 5;
let l6 = 6;
let l7 = 7;
let l8 = 8;
let l9 = 9;
let l10 = 0;
let lFirst = (l1 + l2 + l3 + l4 + l5)/5;
let lLast = (l6 + l7 + l8 + l9 + l10)/5;
console.log((lFirst + lLast)/2)

//average with declared numbers
let lAve = (4 + 10 + 22 + -30 + 55)/5;
let lRage = (68 + 7 + -22 + 9 + 100)/5;
console.log((lAve + lRage)/2);

// extra
// temp = box1;
// box1 = box2;
// box2 = box1;

//if statement negative test
let num = 4;

if (num<0) {
    console.log("negative")
} else {
    console.log("positive")
}

num = -32;

if (num<0) {
    console.log("negative")
} else {
    console.log("positive")
}

//age test
age = 17;

if (age<18) {
    console.log("Access Denied")
} else {
    console.log("Welcome")
}

age = 24;

if (age<18) {
    console.log("Access Denied")
} else {
    console.log("Welcome")
}

//nested number test
num = 500;

if (num>100) {
    console.log("Greater than 100")
} else {
    if (num>0) {
        console.log("Less than 100 but postive")
    } else {
        console.log("Negative")
    }
}

//grade test
num = 87;

if (num>90) {
    console.log("A")
} else {
    if (num>80) {
        console.log("B")
    } else {
        if (num>70) {
            console.log("C")
        } else {
            if (num>55) {
                console.log("D")
            } else {
                console.log("F")
            }
        }
    }
}

//switch vowel
let letter = "A";

switch (letter) {
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log("vowel")
        break;
    default:
        console.log("consonant")
        break;
}

//ternary negative test
num = 0;

let status1 =
    num < 0 ? 'negative' :
    num == 0 ? 'zero' : 'postive'

console.log(status1)