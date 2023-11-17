let item = document.querySelector('#item');
let addItem = document.querySelector('#add-item');
let itemList = document.querySelector("#item-list")

addItem.addEventListener('click', addItemsToList);

function addItemsToList() {
    //store the inputvalue
    let inputItem = item.value;

    // clear the input value
    item.value = "";

    //creates list and append into ul
    let newItem = document.createElement('li')
    newItem.setAttribute("id", "list")
    itemList.appendChild(newItem);
    //create span and button and append into list
    let span = document.createElement('span');
    let deleteButton = document.createElement('button');
    newItem.appendChild(span)
    newItem.appendChild(deleteButton)

    span.textContent = inputItem;
    deleteButton.innerText = 'delet';

    deleteButton.addEventListener('click', function () {
        itemList.removeChild(newItem);
    });

}
