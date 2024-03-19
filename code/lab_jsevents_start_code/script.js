// TASK 1 - Taking form input and adding a corresponding list item 
const form = document.querySelector("#todo-form");
const list = document.querySelector("#list");
const complete = document.querySelector("#completed");
const completedList = document.querySelector("#completedList");

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    //creating an li with corresponding input value
    const newListItem = document.createElement('li');
    newListItem.innerText = evt.target["new-todo"].value;

    //creating a delete button and appending it to li
    const deleteButton = document.createElement("button");
    deleteButton.textContent = 'Delete';
    newListItem.appendChild(deleteButton);

    //adding event listener to delete button that adds functionality
    deleteButton.addEventListener("click", () => {
        newListItem.remove();
    });
    
    //creating a complete button and adding it to li
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete!';
    newListItem.appendChild(completeButton);
    
    // adding event listener to complete button that makes it move li to completed list
    completeButton.addEventListener("click", () => {
        completedList.appendChild(newListItem);
    });

    // adding finished li to ul
    list.appendChild(newListItem);
});


// Adding a Date Button that displays the Current Date
const dateButton = document.querySelector("#show-date");
const dateDisplay = document.querySelector("#date-display");

dateButton.addEventListener("click", (evt) =>{
    const date = new Date();
    dateDisplay.innerText = new Intl.DateTimeFormat('en-UK').format(date);
});





