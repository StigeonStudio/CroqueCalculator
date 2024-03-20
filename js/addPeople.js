let addBtn = document.getElementById("addPeople");
let inputName = document.getElementById("nameField");
let nameList = document.getElementById("nameList--text");

addBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    addNameToList(inputName.value);
    inputName.value = "";
})

function addNameToList(name){
    const divNode = document.createElement("div");
    divNode.setAttribute('class', 'nameContainer nameContainer--'+name);
    nameList.appendChild(divNode);
    const labelNode = document.createElement("label");
    const labelTextNode = document.createTextNode(name);
    labelNode.appendChild(labelTextNode);
    labelNode.setAttribute('for', name);
    document.querySelector(".nameContainer--"+name).appendChild(labelNode);
    const inputNode = document.createElement("input");
    inputNode.setAttribute('type', 'number');
    inputNode.setAttribute('name', name);
    inputNode.setAttribute('id', name);
    inputNode.setAttribute('class', 'orderAmount');
    document.querySelector(".nameContainer--"+name).appendChild(inputNode);
}