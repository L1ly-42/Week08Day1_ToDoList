// TASK 1 - Taking form input and adding a corresponding list item 
const form = document.querySelector("#todo-form");
const list = document.querySelector("#list");
const complete = document.querySelector("#completed");
const completedList = document.querySelector("#completedList");

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const newListItem = document.createElement('li');
    const deleteButton = document.createElement("button");
    deleteButton.textContent = 'Delete';

    newListItem.innerText = evt.target["new-todo"].value;
    newListItem.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
        newListItem.remove();
    });

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete!';
    console.log(completeButton);
    newListItem.appendChild(completeButton);
    completeButton.addEventListener("click", () => {
        completedList.appendChild(newListItem);
    });


    list.appendChild(newListItem);
});
// This is adding a Date Button that displays the Current Date
const dateButton = document.querySelector("#show-date");
const dateDisplay = document.querySelector("#date-display");

<<<<<<< HEAD
dateButton.addEventListener("click", (evt) => {
    const date = newDate();
=======
//Adding date button

const dateButton = document.querySelector("#show-date")
const dateDisplay = document.querySelector("#date-display")

dateButton.addEventListener("click", (evt) =>{
    const date = new Date();
>>>>>>> efde02c43226580d2b58b3c5dddf230dfb8ec9c1
    dateDisplay.innerText = new Intl.DateTimeFormat('en-UK').format(date);
});





