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
