let itemList = document.querySelector('#items');

// Parent
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';

// console.log(itemList.parentNode.parentNode);
// itemList.parentNode.parentNode.style.fontFamily = 'Arial';

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';

// console.log(itemList.parentElement.parentElement);
// itemList.parentElement.parentElement.style.fontFamily = 'Arial';

// children
// childNodes
// console.log(itemList.childNodes);

// children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "red"
// itemList.children[1].style.color = "#f4f4f4";
// itemList.children[1].textContent = "Muutettu";

// firstChild
// console.log(itemList.firstChild);

// firstChildElement
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Eka";

// lastChild
// console.log(itemList.lastChild);

// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Vika";

// siblings
// nextSibling
// console.log(itemList.nextSibling);

// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);

// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = '#ff4400';

// Create new element
let newDiv = document.createElement('div');
newDiv.className = 'moi';
newDiv.id = 'moi1';
newDiv.setAttribute('title','Moikkelis!');

// Create new textNode
let newDivText = document.createTextNode('Moikkelis koikkelis!');

// Add textNode to element
newDiv.appendChild(newDivText);

newDiv.style.fontSize = '18px';

// Add element to dom
let container = document.querySelector('#main-header .container');
let h1 = document.querySelector("#main-header h1");

container.insertBefore(newDiv,h1);
// container.appendChild(newDiv);







console.log(newDiv);







