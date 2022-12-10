import { updateWeather } from "./weather.js";

const inputs = document.querySelector("select#temple");
const templeImage = document.querySelector("picture#temple-image");

const requestURL = "./data/temples.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function(jsonObject){
        console.table(jsonObject);
        let temples = jsonObject["temples"];
        updateWeather(temples[1].cityID);
        temples.forEach(fillInputs);
        inputs.addEventListener('change', (selected) => {
            for(let i = 0; i < temples.length; i++){
                if(temples[i].var == selected.target.value){
                    templeImage.innerHTML = "";
                    templeImage.innerHTML = `<source media="(100px <= width <= 450px)" srcset="images/temples/${temples[i].var}-small.jpeg">
                                            <source media="(451px <= width <= 800px)" srcset="images/temples/${temples[i].var}-medium.jpeg">
                                            <source media="(801px <= width)" srcset="images/temples/${temples[i].var}-large.jpeg">
                                            <img src="images/temples/${temples[i].var}-medium.jpeg" alt="temple picture">`;
                    document.querySelector("span#address").textContent = temples[i].address;
                    document.querySelector("span#phone").textContent = temples[i].telephone;
                    document.querySelector("span#email").textContent = temples[i].email;
                    updateWeather(temples[i].cityID);
                };
            };
        });

    });


function fillInputs(temple){

    const opt = document.createElement("option");
    opt.value = temple.var;
    opt.textContent = temple.name;

    inputs.appendChild(opt);
    
};
