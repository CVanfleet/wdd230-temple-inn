// Header
const today = new Date();

function toggleMenu(){
    document.querySelector("#hamburgerBtn").classList.toggle("open");
    document.querySelector("#navList").classList.toggle("open");
}
const x = document.querySelector("#hamburgerBtn");

x.onclick = toggleMenu;

    // get current date
document.querySelector("#currDate").textContent = today.toLocaleDateString('en-us', {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'})

// Footer
const lastmodified = new Date(document.lastModified);
document.querySelector("#lastUpdated").textContent = `${lastmodified.getMonth()+1}/${lastmodified.getDate()}/${lastmodified.getFullYear()} ${('0'+lastmodified.getHours()).substr(-2)}:${('0'+lastmodified.getSeconds()).substr(-2)}`;
document.querySelector("#year").textContent = today.getFullYear();



