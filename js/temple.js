const requestURL = "./data/temples.json";

const container = document.querySelector('section#temples');

let count = 1;

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function(jsonObject){
        console.table(jsonObject);
        let temples = jsonObject["temples"];
        temples.forEach(templeCards);

    });


function templeCards(temple){
    let card = document.createElement('div');

    let serviceshtml = "";
    let closureshtml = "";

    for(let i = 0; i < temple.services.length; i++){
        serviceshtml += `<li>${temple.services[i]}</li>`
    };

    for(let j = 0; j < temple.closures.length; j++){
        closureshtml += `<li>${new Date(temple.closures[j]).toDateString()}</li>`
    }

    let cardhtml = `<div>
                        <h3>${temple.name}</h3>
                        <img src="images/${savedLikes(temple)}" alt="like button" class="like-buttons" id="like-${temple.var}" onclick="toggleLike(this)">
                        <picture id="temple-image">
                            <source media="(100px <= width <= 450px)" srcset="images/temples/${temple.var}-small.jpeg">
                            <source media="(451px <= width <= 800px)" srcset="images/temples/${temple.var}-medium.jpeg">
                            <source media="(801px <= width)" srcset="images/temples/${temple.var}-large.jpeg">
                            <img src="images/temples/${temple.var}-medium.jpeg" alt="temple image">
                        </picture>
                    </div>
                    <div>
                        <p>Address: ${temple.address}</p>
                        <p>Phone: ${temple.telephone}</p>
                        <p>Email: ${temple.email}</p>
                        <p>Services:</p>
                        <ul id="services">
                            ${serviceshtml}
                        </ul>
                        <p>History:</p>
                        <ul id="history">
                            <li>Announced: ${new Date(temple.history.announced).toDateString()}</li>
                            <li>Groundbreaking: ${new Date(temple.history.groundbreaking).toDateString()}</li>
                            <li>Dedicated: ${new Date(temple.history.dedicated).toDateString()}</li>
                        </ul>
                        <p>Ordinance Schedule: ${temple.ordinance}</p>
                        <p>Session Schedule: ${temple.session}</p>
                        <p>Temple Closure Schedule:</p>
                        <ul id="closure">
                            ${closureshtml}
                        </ul>
                    </div>`;

    card.innerHTML = cardhtml;

    card.className = "cards";

    count += 1;

    container.appendChild(card);

    addTemple(temple);
};


function toggleLike(like){
    if(like.getAttribute("src") == "images/liked.svg"){
        like.setAttribute('src', "images/unliked.svg");
        localStorage.setItem(like.id, 'false');
    }
    else{
        like.setAttribute('src', "images/liked.svg");
        localStorage.setItem(like.id, 'true');
    };
};

function addTemple(temple){
    if (localStorage.getItem(`like-${temple.var}`) == null)
    {
        localStorage.setItem(`like-${temple.var}`, 'false');
    }
};

function savedLikes(temple){
    if(localStorage.getItem(`like-${temple.var}`) == 'true'){ //localStorage does not take anything but strings as the key, value pairs. So booleans are not valid
        return "liked.svg";
    }
    else{
        return "unliked.svg";
    }
};