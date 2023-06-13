let myLeads = [];
let inputValue = document.querySelector('#input-el').value;
const inputEl = document.querySelector('#input-el');
const btnHandle = document.querySelector('#input-btn');



btnHandle.addEventListener("click", function() {
    myLeads.push(inputValue);
    console.log(myLeads)
});


