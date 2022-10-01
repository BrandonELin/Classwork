let quotes = ["It's Fast Times at Ridgemont High", "It's Furious Times at Ridgemont High", "Welcome to Riddick", "It's Blood Shot all the times", "My name's Vin Diesal"];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  let mainTitle = document.querySelector("#main-title");
  mainTitle.innerText = "DOM TORRETO"

  // Part 2
  let newBody = document.querySelector("body");
  newBody.style.backgroundColor = "orange";

  // Part 3
  let favoriteThings = document.querySelector("#favorite-things");
  let favoriteThingsList = document.querySelector("#favorite-things").getElementsByTagName("li");
  let last = favoriteThingsList[favoriteThingsList.length-1];

  favoriteThings.removeChild(last)
  // Part 4
  let specialTitle = document.querySelectorAll(".special-title")
  for(let i of specialTitle){
    console.log(i)
    i.style.fontSize = "2rem"
  }

  // Part 5
  let raceLocations = document.querySelector("#past-races").getElementsByTagName("li");
  let chicago = ""
  for(let i=0;i<raceLocations.length;i++){
    if (raceLocations[i].innerText == "Chicago"){
      chicago = raceLocations[i];
    }
  }
  console.log(chicago.innerText);
  chicago.remove();

  // Part 6
  let newLocation = document.createElement("li");
  newLocation.innerText = "Taipei"
  document.querySelector("#past-races").appendChild(newLocation)

  // Part 7
  let blog = document.createElement("div");
  blog.setAttribute("class", 'blog-post purple');
  blog.innerHTML = "<h1>Taipei</h1><p>MOVIE SCENE</p>";
  document.querySelector(".main").appendChild(blog)

  // Part 8
  document.querySelector("#quote-title").addEventListener("click", randomQuote)

  // Part 9
  let blogs = document.querySelectorAll(".blog-post");
  for(let i of blogs) {
    i.addEventListener("mouseout", function(){
      i.classList.remove("red");
      i.classList.add("purple");
    })

    i.addEventListener("mouseenter", function(){
      i.classList.add("red");
      i.classList.remove("purple");
    })
  }



});
