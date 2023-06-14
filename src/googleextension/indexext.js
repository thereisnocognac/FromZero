let myLeads = [];
let inputValue = document.querySelector('#input-el').value;
const inputEl = document.querySelector('#input-el');
const btnHandle = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el');


let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );



localStorage.setItem('myLeads', 'www.example.com');


btnHandle.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = '';
    localStorage.setItem('myLeads', JSON.stringify(myLeads) );
    renderLeads()
   
    
    console.log(localStorage.getItem('myLeads'))

});


function renderLeads() {
    let listItems = '';
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='https://${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems;
}