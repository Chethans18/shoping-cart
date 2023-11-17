let item = document.querySelector('#item');
let addItem = document.querySelector('#add-item');
let itemList = document.querySelector("#item-list")

addItem.addEventListener('click', addItemsToList);

function addItemsToList() {
    let newItem = document.createElement('li')
    newItem.setAttribute("id", "list")
    // document.getElementById('list').innerHTML = "1st item is";
    newItem.innerHTML = `value inside the input ${'item'}`
    itemList.appendChild(newItem);
}