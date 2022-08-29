//set heading
var mainEl = document.querySelector("main");
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.setAttribute("class", "flex-ctr");

//set top menu
let topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.setAttribute("class", "flex-around");

//Links
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

//set top menu links
for(link of menuLinks){
    let newLink = document.createElement("a");
    newLink.setAttribute("href", link.href);
    newLink.innerText = link.text;
    topMenuEl.appendChild(newLink);
}

//create sub menu
let subMenuEl = document.querySelector("#sub-menu")
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.setAttribute("class", "flex-around");
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

//create an array of links
let topMenuLinks = topMenuEl.getElementsByTagName('a')

//start the submenu as closed
let showingSubMenu = false;

//add listener to click
topMenuEl.addEventListener("click", function(evt){
  evt.preventDefault();
  // remove active from the links to close submenu
  if(evt.target.classList.contains("active")){
    evt.target.classList.remove("active")
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    // console.log("yo")
    return
  }
  //removes active from all links
  for(let i = 0;i<topMenuLinks.length;i++){
    topMenuLinks[i].classList.remove("active")
  }
  // create submenu if they have links
  evt.target.classList.add("active")
  if(evt.target.text != "about"){
    showingSubMenu = true;
  } else {
    showingSubMenu = false;
    mainEl.innerHTML = `<h1>${evt.target.text}</h1>`
  }
  if(showingSubMenu==true){
    buildSubMenu(getLinks(evt.target.text));
    subMenuEl.style.top = "100%"
  } else {
    subMenuEl.style.top = "0"
  }
  return (evt.target.tagName=="A")
})

//listener for submenu
subMenuEl.addEventListener("click", function(evt){
  evt.preventDefault();
  showingSubMenu = false;
  subMenuEl.style.top = 0;

  for(let i = 0;i<topMenuLinks.length;i++){
    topMenuLinks[i].classList.remove("active")
  }

  mainEl.innerHTML = `<h1>${evt.target.text}</h1>`
})

//grab links from array
function getLinks(clicked){
  if(clicked == "catalog"){
    return menuLinks[1].subLinks
  }
  if(clicked == "orders"){
    return menuLinks[2].subLinks
  }
  if(clicked == "account"){
    return menuLinks[3].subLinks
  }
}

//set links to submenu
function buildSubMenu(menus){
  subMenuEl.innerHTML = "";
  for(link of menus){
    let newSubLink = document.createElement("a");
    newSubLink.setAttribute("href",link.href);
    newSubLink.innerText = link.text;
    subMenuEl.appendChild(newSubLink);
  }
}

