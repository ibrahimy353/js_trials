
let button = document.querySelector('.submit-btn'); 
//select the element with the class 'submit-btn' and set it to local variable 'button'

button.addEventListener('click', () => {
    console.log("woof")
});
// adding an Event Listener on the button variable, pass it the event of 'click'
// when a user clicks on the corresponding tag to the button variable, 
// the code within the function will run

let thingsToDo = [      // define array of things to do
    "walk the dog",
    "mow the front lawn",
    "redecorate the bookshelves",
    "paint the ceiling to look like the sky on tatooine"
]
let list = document.querySelector('.todo-list') //select to-do list unorderd list tag

thingsToDo.map( todoItem => {               //iterate over thingsToDo array
    let newToDo = document.createElement("li");  //create a var equal to a new list item
    newToDo.innerText = todoItem;    //set the inner text to the current todoItem string
     list.append(newToDo);           //add the new lisst item to the todo-list
})