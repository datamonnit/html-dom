let button = document.getElementById('myBtn');
button.addEventListener('click', myFunction);

let header = document.querySelector('#main-header h1');
header.addEventListener('dblclick', myFunction);

let box = document.getElementById('boxi');
let boxP = document.querySelector('#boxi p');
box.addEventListener('mouseenter', checkMouse);
box.addEventListener('mouseleave', checkMouse);
box.addEventListener('mousemove', checkMouse);


function checkMouse(e){
    console.log('EVENT ' + e.type);
    // boxP.textContent = e.type;
    boxP.innerHTML = "x:" + e.offsetX + "<br>y: " + e.offsetY;

}

function myFunction(e){
    // let newHeader = prompt('Give new header');
    // document.querySelector('#main-header h1').textContent = newHeader;
    
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);

    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.offsetX);
    console.log(e.offsetY);

    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
}

// FORM EVENTS
let myInput = document.forms['newItem']['itemName'];
myInput.addEventListener('focus', checkInput);
myInput.addEventListener('blur', checkInput);
myInput.addEventListener('keypress', checkInput);
myInput.addEventListener('cut', checkInput);
myInput.addEventListener('copy', checkInput);
myInput.addEventListener('paste', checkInput);


function checkInput(e){
    console.log(e.type);
    let currentValue = e.target.value;
    if (e.type == 'focus'){
        document.getElementById('info').innerHTML = 'Write item name';
    }
    if (e.type == 'blur'){
        document.getElementById('info').innerHTML = '';
    }
    if (e.type == 'keypress') {
        if (e.target.value.length > 10) {
            document.getElementById('info').innerHTML = 'Item name is too long';
        } else {
            document.getElementById('info').innerHTML = 'You can type now';
        }
    }
    if (e.type == 'cut' || e.type == 'copy') {
        alert('Content on clipboard!');
    }
    if (e.type == 'paste'){
        e.target.value = currentValue;
    }
}