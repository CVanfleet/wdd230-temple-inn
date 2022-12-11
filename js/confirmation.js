let url = new URL(window.location);

let params = url.searchParams;

for(const p of params){
    console.log(p);
};

document.querySelector("#confirm-location").textContent = params.get('temple');
document.querySelector("#confirm-date").textContent = `Between ${params.get('booking-start')} and ${params.get('booking-end')}`;
document.querySelector("#confirm-type").textContent = params.get('roomType');
document.querySelector("#confirm-number").textContent = params.get('rooms');
document.querySelector("#confirm-name").textContent = params.get('booker-name');
document.querySelector("#confirm-email").textContent = params.get('booker-email');
document.querySelector("#confirm-phone").textContent = params.get('booker-phone');
document.querySelector("#confirm-state").textContent = params.get('booker-country');
document.querySelector("#confirm-comments").textContent = params.get('comments');


function revert(){
    history.back();
}






