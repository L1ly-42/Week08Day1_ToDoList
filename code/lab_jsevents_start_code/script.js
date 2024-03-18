// TASK 1 - attaching input into the 

const form = document.querySelector("#todo-form");
const list = document.querySelector("#list");

form.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    const newListItem = document.createElement('li');
    newListItem.innerText = evt.target["new-todo"].value;
    list.appendChild(newListItem);
});

