let form = document.forms['newItem'];
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
    e.preventDefault();

    let newItem = form['newItemName'].value;

    // Create new li element
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    // Create delete-button
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    itemList.appendChild(li);

}

// Remove item
function removeItem(e){
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter items
function filterItems(e){
    let text = e.target.value.toLowerCase();
    
    // Get li-elements
    let items = itemList.getElementsByTagName('li');
    
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        
        if (itemName.toLowerCase.indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }

    });
}

