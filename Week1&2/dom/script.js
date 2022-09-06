//document (to access the DOM)

//document object has methods we can use to traverse the dom


let h1tag = document.getElementById("title")

//select by tag name
let pTag = document.querySelector("p")

//select by class name ("main-title")
//let ptag = queryselector(".main-title")
let pEl = document.querySelector(".cool")

//select by id name ("#title")
//let ptag = queryselector("#title")

console.log(pTag)

console.log(pEl)

console.log(h1tag.innerText)

console.dir(pEl)

h1tag.style.textAlign = "center"
h1tag.style.color = "blue"
let google = document.querySelector("a")
google.setAttribute("href", "http://www.google.com")

let liTags = document.getElementsByTagName("li")

console.log("byTagNameMethod: ", liTags)

let liTags2 = document.getElementsByClassName("comment")

console.log("byClassNameMethod: ", liTags2)

for(let i of liTags2){
    i.style.fontSize = "30px"
    i.style.fontFamily = "Impact"
    i.style.color = "purple"
}