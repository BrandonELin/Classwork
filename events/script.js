//alert('test')

const btn = document.querySelector('button')
btn.addEventListener("click", function(evt) {
    
    //evt is a special parameter representing the event object
    //the event object has all the info
    console.log(evt.target)
    console.log(this)

    const li = document.createElement('li')
    console.log(li)

    const input = document.querySelector('input')
    console.dir(input)
    console.dir(input.value)

    li.textContent = input.value
    document.querySelector("ul").appendChild(li)
})

const ul = document.querySelector("ul")

ul.addEventListener("click", handleClick)

function handleClick(event){
    console.log('clicked on ul...')
    console.log(event)
    console.log(event.target)
    event.target.style.color = "red"
}