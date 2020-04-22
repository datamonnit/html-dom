console.log(document.title);
console.log(document.URL);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);

document.all[7].textContent = "List Application"
document.title = "My List App"

// Get element by id
// document.getElementById('id')
console.log(document.getElementById("main-header"));
let headerTitle = document.getElementById("main-header-title");
let header = document.getElementById("main-header");
headerTitle.innerHTML = "My List App";

// Get element by tag name
let li = document.getElementsByTagName('li');

for(let i=0; i<li.length; i++){
    li[i].style.cssText = 'background-color: yellow; padding: 5px';
}

// Get elements by class
let items = document.getElementsByClassName('list-item');
for(let i=0; i<items.length; i++){
    items[i].style.fontFamily = 'Arial';
    items[i].style.fontWeight = 'bold';
    
}

let ulList = document.getElementsByClassName('item-list');
ulList[0].style.listStyleType = 'none'

// querySelector 
// querySelectorAll
let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');
for (let i=0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#cccccc';
}