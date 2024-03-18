// TASK 1 - Taking form input and adding a corresponding list item 
const form = document.querySelector("#todo-form");
const list = document.querySelector("#list");

// // Adding event listener onto the delete button
// const removeItem = (item) => {
//     item.addEventListener('click', () => {item.remove();
//     });
// }

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const newListItem = document.createElement('li');
    const deleteButton = document.createElement("button");
    deleteButton.textContent = 'Delete';
    // removeItem(newListItem);
    newListItem.innerText = evt.target["new-todo"].value;
    newListItem.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
        newListItem.remove();

    })
    list.appendChild(newListItem);
});

//Adding date button

const dateButton = document.querySelector("#show-date")
const dateDisplay = document.querySelector("#date-display")

dateButton.addEventListener("click", (evt) =>{
    const date = new Date();
    dateDisplay.innerText = new Intl.DateTimeFormat('en-UK').format(date);
});

