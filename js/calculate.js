let calculateBtn = document.getElementById('calculateBtn');
let breadAmount = document.getElementById('breadAmount');
let fullBreads =  document.getElementById('fullBreads');
let cheeseAmount = document.getElementById('cheeseAmount');
let hamAmount = document.getElementById('hamAmount');
let requirements = document.getElementById('requirements');
let orderAmounts = [];
let orderTotal = 0;

calculateBtn.addEventListener("click", (e)=>{
    orderTotal = 0;
    orderAmounts=document.querySelectorAll('.orderAmount');
    for(i=0; i<orderAmounts.length; i++){
        orderTotal += parseInt(orderAmounts[i].value);
    };
    calculateBread(orderTotal);
    calculateCheese(orderTotal);
    calculateHam(orderTotal);
    requirements.classList.remove("hidden");
    e.preventDefault();
})

function calculateBread(orderTotal){
    breadAmount.innerHTML = orderTotal*2;
    fullBreads.innerHTML = orderTotal/10;
}
function calculateCheese(orderTotal){
    cheeseAmount.innerHTML = orderTotal;
}
function calculateHam(orderTotal){
    hamAmount.innerHTML = orderTotal/2;
}