let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};
let randomImage = Math.floor(Math.random() * global.IMAGE_COUNT);
const setup = () => {
   let start = document.getElementById('btn');
   start.addEventListener('click', gameStart);
}
const gameStart = () => {
    let img = document.getElementById("playField").querySelector("img");
    img.addEventListener("click", figuur);
    if (img.alt === "0") {
        img.src = "images/1.png";
        img.alt="1";
    }
    setInterval(timerAfbeelding, global.MOVE_DELAY);
    let verwijderButton = document.getElementById("divButton");
    verwijderButton.innerText = `Aantal hits ${global.score}`;
}
const figuur = () => {

    let verwijderButton = document.getElementById("divButton");
    verwijderButton.innerText = `Aantal hits ${global.score}`;
    //

     let div = document.getElementById("playField");
     let img = div.querySelector("img");
    if (img.alt === "0") {
        window.alert("Je hebt op de bom geklikt! " + `Aantal hits: ${global.score}`);
    }
    let randomImage = Math.floor(Math.random() * global.IMAGE_COUNT);
    //

     let positie_x = Math.floor(Math.random() * 500);
     let positie_y = Math.floor(Math.random() * 500);
     img.style.left = `${positie_x}px`;
    img.style.top = `${positie_y}px`;
     img.src = `images/${randomImage}.png`;
     img.alt=`${randomImage}`;
    if (img.alt === "0") {
        setTimeout(() => {
            img.src = "images/1.png";
            img.alt="1";
        }, 1000);
    }
    global.score ++;
}
const timerAfbeelding = () => {
    let img = document.getElementById("playField").querySelector("img");
    let positie_x = Math.floor(Math.random() * 500);
    let positie_y = Math.floor(Math.random() * 500);
    img.style.left = `${positie_x}px`;
    img.style.top = `${positie_y}px`;
}

window.addEventListener("load", setup);


