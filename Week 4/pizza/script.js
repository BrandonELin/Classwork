function query(borough, numOfResults = 10) {


    // use this variable to store the value of the current borough (as a string)
    // EXAMPLE: let borough = "BRONX"
    // let borough = "BRONX";
  
    // use this variable to store the number of results the user requested (as a string or number)
    // EXAMPLE: let numOfResults = 5
    // let numOfResults = 5;
  
    // leave the next four lines alone 
    // in a nutshell, we make a request to a free and public api that handles NYPD data 
    // and it eventually gives us back an object (JSON) to deal with 
    
    let api = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=${borough.toUpperCase()}&$limit=${numOfResults}`
  
    fetch(api)
      .then((data) => data.json())
      .then((json) => showResults(json));
  }
  
  
  // you'll do most of your DOM Manipulation in this function
  let bodyMenu = document.querySelector(".list")
  function showResults(complaints) {
    bodyMenu.innerText = ""
    console.log(complaints)
    for(let i of complaints){
        let comDesc = document.createElement("div");
        let extend = document.createElement("button");
        let dropDown = document.createElement("div");
        comDesc.classList.add("listing")
        dropDown.classList.add("stop")
        comDesc.innerText = i.descriptor;
        dropDown.innerText = "The police are on their way now"
        bodyMenu.appendChild(comDesc);
        comDesc.appendChild(extend);
        comDesc.appendChild(dropDown);
    }
  }