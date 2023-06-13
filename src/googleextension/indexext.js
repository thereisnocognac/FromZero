let myLeads = [];
let inputValue = document.querySelector('#input-el').value;
const inputEl = document.querySelector('#input-el');
const btnHandle = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el');




btnHandle.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    renderLeads()
    inputEl.value = '';
});


function renderLeads() {
    let listItems = '';
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>";
    }
    ulEl.innerHTML = listItems;
}