const setup = () => {
    let button1 = document.getElementById("button1");
    let button2 = document.getElementById("button2");
    let button3 = document.getElementById("button3");
    button1.addEventListener("click", veranderKleur);
    button2.addEventListener("click", veranderKleur);
    button3.addEventListener("click", veranderKleur);
}
const veranderKleur =(event) => {
    const klikteButton = event.target;
    if (klikteButton.id === "button1") {
        if (klikteButton.classList.contains("verkleur")) {
            document.getElementById("button1").classList.remove("verkleur");
        } else
         document.getElementById("button1").classList.add("verkleur");
         document.getElementById("button2").classList.remove("verkleur");
         document.getElementById("button3").classList.remove("verkleur");
    } else if (klikteButton.id === "button2"){
        if (klikteButton.classList.contains("verkleur")) {
            document.getElementById("button2").classList.remove("verkleur");
        } else
        document.getElementById("button2").classList.add("verkleur");
        document.getElementById("button1").classList.remove("verkleur");
        document.getElementById("button3").classList.remove("verkleur");
    } else {
        if (klikteButton.classList.contains("verkleur")) {
            document.getElementById("button3").classList.remove("verkleur");
        } else
        document.getElementById("button3").classList.add("verkleur");
        document.getElementById("button1").classList.remove("verkleur");
        document.getElementById("button2").classList.remove("verkleur");
    }
}
window.addEventListener("load", setup);
