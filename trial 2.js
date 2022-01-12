//const body = document.body
//body.append ("my first time")

//const body = document.body
//const div = document.createElement (div)
//div.innerText ="HEllo wolrd"

//body.append(div)

//console.log(div.textContent
//const btn = document.querySelector('#btn');
//btn.onclick = () => alert("Hello World");

//const btn = document.querySelector('#btn');
//btn.addEventListener('click', () => {alert("Hello World");});


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});