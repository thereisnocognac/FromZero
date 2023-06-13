let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
let inputValue = document.querySelector('#input-el').value;
const inputEl = document.querySelector('#input-el');
const btnHandle = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el');
let listItems = '';



btnHandle.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads)
    renderLeads()
});


function renderLeads() {
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>";
    }
    ulEl.innerHTML = listItems;
}