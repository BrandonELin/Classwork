var mainEl = document.querySelector("main");
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.setAttribute("class", "flex-ctr");

let topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.setAttribute("class", "flex-around");

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

for(link of menuLinks){
    let newLink = document.createElement("a");
    newLink.setAttribute("href", link.href);
    newLink.innerText = link.text;
    topMenuEl.appendChild(newLink);
}
  
