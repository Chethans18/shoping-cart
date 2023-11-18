let inputText = document.querySelector('#item');
let addItem = document.querySelector('#add-item');
let itemList = document.querySelector("#item-list")

addItem.addEventListener('click', addItemsToList);

function addItemsToList() {
    //store the inputvalue
    let inputItem = inputText.value;

    // clear the input value
    inputText.value = "";

    //creates list and append into ul
    let newItem = document.createElement('li')
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
    //makes input ready for next input
    inputText.focus();

}
