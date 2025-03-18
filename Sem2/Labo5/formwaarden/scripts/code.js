const setup = () => {
    let btnResultaat = document.getElementById("btnToon");
    btnResultaat.addEventListener("click", resultaat)
}
const resultaat = () => {
    let output = document.getElementById("output");
    let chkIsRoker = document.getElementById("chkIsRoker");
    let rbtMoedertaalNL = document.getElementById("rbtMoedertaalNL");
    let rbtMoedertaalFR = document.getElementById("rbtMoedertaalFR");
    let rbtMoedertaalEN = document.getElementById("rbtMoedertaalEN");
    let selBestelling = document.getElementById("selBestelling");
    let Buurland = document.getElementById("selFavorieteBuurland");
    if(chkIsRoker.checked === true ) {
        output.innerHTML += "is een roker" + "<br />";
    } else {
        output.innerHTML += "is geen roker" + "<br />";
    }
    if (rbtMoedertaalNL.checked === true) {
        output.innerHTML += "moedertaal is nl" + "<br />";
    } else if (rbtMoedertaalFR.checked === true) {
        output.innerHTML += "moedertaal is frans" + "<br />";
    } else {
        output.innerHTML += "moedertaal is engels" + "<br />";
    }
    if (Buurland.value === "Nederland") {
        output.innerHTML += "favoriete buurland is Nederland" + "<br />";
    } else if (Buurland.value === "Frankrijk") {
        output.innerHTML += "favoriete buurland is Frankrijk" + "<br />";
    } else {
        output.innerHTML += "favoriete buurland is Duitsland" + "<br />";
    }
    output.innerHTML += "bestelling bestaat uit ";
    if (selBestelling.options[0].selected) {
        output.innerHTML += "aardappelen";
    }
    if (selBestelling.options[1].selected) {
        output.innerHTML += " brood";
    }
    if (selBestelling.options[2].selected) {
        output.innerHTML += " melk";
    }
    if (selBestelling.options[3].selected) {
        output.innerHTML += " biefstuk";
    }
    if (selBestelling.options[4].selected) {
        output.innerHTML += " chips";
    }
    if (selBestelling.options[5].selected) {
        output.innerHTML += " krant";
    }
}
window.addEventListener("load", setup);