let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
let inputValue = document.querySelector('#input-el').value;
const inputEl = document.querySelector('#input-el');
const btnHandle = document.querySelector('#input-btn');



btnHandle.addEventListener("click", function() {
    myLeads.push(inputValue);
    console.log(myLeads)
});

for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i])
}
