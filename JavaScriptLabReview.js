/* A Q+A
1. we use an assignment operator
2. assign it to a new value
3. set the new varaible to equal the existing variable
4. declare is when you create a variable. Assign is when you give it value
5. pseudocding is when you map out the code without coding, writing it like
6. half
*/

//B. Strings
let firstVariable; 
firstVariable= "Hello World"
firstVariable = 3
let secondVariable= firstVariable;
secondVariable = "any string"
//firstVariable = 3
console.log(firstVariable)
let yourName = "Brandon Lin"
console.log(`Hello my name is ${yourName}`)

//C. Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a<b);
console.log(c>d);
console.log('Name'==='Name');

console.log(true||false);
console.log(false&&false&&false&&false&&false||true);
console.log(false===false);
console.log(e === 'Kevin');
console.log(a+b===c);
console.log(a*a===d);
console.log(48 =='48');


// D. the farm
function checkCow(animal){
    if (animal==="cow") {
        console.log("moooooo")
    } else {
        console.log("Hey! You're not a cow")
    }
}
checkCow('cow')
checkCow('cat')

//E. Drivers's Ed
function checkAge(age) {
    if (age>16){
        console.log("Here are the keys!")
    } else {
        console.log("Sorry, you're too young.")
    }
}
checkAge(19)
checkAge(14)

//Section 2
//A. The Basics
for(let i = 0;i<10;i++){
    console.log(i)
}
for(let i = 10;i<=400;i++){
    console.log(i)
}
let x = 12
while(x<4000){
    console.log(x)
    x += 3
}

//B. Get Even
for(let i = 0;i<=100;i++){
    let even = i
    if(i%2===0){
        even += "<-- is an even number"
    }
    console.log(even)
}

//C. Give me Five
// I'm counting 0 as a multiple of 5
for(let i = 0;i<=100;i++){
    if(i%5===0){
        console.log(`I found a ${i}. High five!`)
    }
    if(i%3===0){
        console.log(`I found a ${i}. Three is a crowd`)
    }
}

//D. Savings account
let bank_account = 0;
for(let i = 0; i<=10; i++){
    bank_account += i
}
console.log(bank_account)
bank_account = 0;
for(let i = 0; i<=100; i++){
    bank_account += 2*i
}
console.log(bank_account)

//Section 3
//A. Talk about it
/*
1. elements
2. No, they are the order they are put in, they are not organized
3. test scores
*/

//B. Easy Does It
let quotes = ['I am your father', 'I have a dream', '"']

//C Accessing Elements
const randomThings = [1,10, "Hello", true]
console.log(randomThings[0])
randomThings[2] = "World"
console.log(randomThings)

//D Change values
const ourClass = ['Salty', "Zoom", "Sardine", "Slack", "Github"]
console.log(ourClass[2])
ourClass[4] = "Octocat"
ourClass.push("Cloud City")
console.log(ourClass)

//E Mix It Up
const myArray = [5,10,500,20]
myArray.push("Aegon")
myArray.push("of your choice")
myArray.shift()
myArray.unshift("Bob Marley")
myArray.pop()
myArray.reverse()
//it is mutated since the values have changed as they are in differen spots
console.log(myArray)
// it returns the array backwards

//F Biggie smalls
let x = 1234;
if(x<100) {
    console.log("little number")
} else {
    console.log("big number")
}

//G Monkey in the Middle
function monkey(x){
    if(x<5) {
        console.log("little number")
    } else if (x>10){
        console.log("big number")
    } else {
        console.log("monkey")
    }
}
monkey(3)
monkey(12)
monkey(7)

//H What's in your Closet
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    'right sock',
    "GA hoodie",
    "green pants",
    "yello knit hat",
    "marshmallow peeops"
];

//thom's closet is more complicated
const thomsCloset = [
    [
        //shirts
        "grey button-up",
        "dark grey button=up",
        "light blue button-up",
        "blue button-up"
    ], [
        //pants
        'grey jeans',
        'jeans',
        'PJs'
    ],[
        //accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];

console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)
kristynsCloset.splice(6,0,"raybans")
kristynsCloset[5] = "stained knit hat"
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]}, and ${thomsCloset[2][1]}`)
thomsCloset[1][2] = "Footie Pajamas"

console.log(kristynsCloset)
console.log(thomsCloset)