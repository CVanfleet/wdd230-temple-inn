const requestURL = "./data/temples.json";
const todaysDate = new Date();
const nextDay = addDays(todaysDate, 1);
const yyyy = todaysDate.getFullYear();
const yyyy1 = nextDay.getFullYear();
let mm = todaysDate.getMonth() + 1;
let mm1 = nextDay.getMonth() + 1;
let dd = todaysDate.getDate();
let dd1 = nextDay.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;
if (dd1< 10) dd1 = '0' + dd1;
if (mm1 < 10) mm1 = '0' + mm1;

const formattedToday = `${yyyy}-${mm}-${dd}`;
const formattedNextDay = `${yyyy1}-${mm1}-${dd1}`;
const startDate = document.querySelector('input#booking-start');
const endDate = document.querySelector('input#booking-end');

startDate.value = formattedToday;
startDate.min = formattedToday;
endDate.min = formattedNextDay;

const templeSelector = document.querySelector("select#temple");

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function(jsonObject){
        console.table(jsonObject);
        let temples = jsonObject["temples"];
        temples.forEach(fillLocations);
    });

function fillLocations(temple){

    let option = document.createElement('option');
    option.textContent = temple.name;
    option.value = temple.name;
    
    templeSelector.appendChild(option);
};

const email = document.querySelector("#booker-email")

email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("I am expecting a valid e-mail address!");
      email.reportValidity();
    } else {
      email.setCustomValidity("");
    }
  });