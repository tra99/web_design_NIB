const name="Justin";
const age=30;
const isStudent=false;
let phone= null;
let address=undefined;

const items=[
    `name (string): ${name}`,
    `age (number): ${age}`,
    `isStudent (boolean): ${isStudent}`,
    `phone (null): ${phone}`,
    `address (undefined): ${address}`
]

const list=document.querySelector("#list");

let html='';

// html +=`<li class="list-group-item">${items[0]}</li>`;
// html +=`<li class="list-group-item">${items[1]}</li>`;
// html +=`<li class="list-group-item">${items[2]}</li>`;
// html +=`<li class="list-group-item">${items[3]}</li>`;
// html +=`<li class="list-group-item">${items[4]}</li>`;
// list.innerHTML=html;
list.innerHTML= items.map(a => `<li class="list-group-item">${a}</li>`).join('');