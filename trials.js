
let button = document.querySelector('.submit-btn'); 
//select the element with the class 'submit-btn' and set it to local variable 'button'

button.addEventListener('click', () => {
    //grab the value from the input and assign it to a variable
       let textInput = document.querySelector('.new-todo-input').value;
   //create a new list item element and variable
       let newToDo = document.createElement("li");
   //use the input text for the new ToDo item text
       newToDo.innerText = textInput;
   //add the item to our existing 'list'
       list.append(newToDo);
   });
   
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