let myLeads = [];
const inputEl = document.querySelector('#input-el');
const btnHandle = document.querySelector('#input-btn');



btnHandle.addEventListener("click", function() {
    myLeads.push('www.awesomelead.com');
    console.log(myLeads)
});


