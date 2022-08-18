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
kristynsCloset[5] = "stained knit hate"
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]}, and ${thomsCloset[2][1]}`)
thomsCloset[1][2] = "Footie Pajamas"

console.log(kristynsCloset)
console.log(thomsCloset)

//