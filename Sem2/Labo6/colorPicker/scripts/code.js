const setup = () => {
    let slider = document.getElementsByClassName('slider');

    for (let i = 0; i < slider.length; i++) {
        slider[i].addEventListener("change", update);
        slider[i].addEventListener("input", update);
    }
    update();

    let button = document.getElementById("btnSave");
    button.addEventListener("click", saveSwatch);

}
const update = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    let lblBlue = document.getElementById("lblBlue").innerHTML = blue;
    let lblRed = document.getElementById("lblRed").innerHTML = red;
    let lblGreen = document.getElementById("lblGreen").innerHTML = green;

    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
}

const saveSwatch = () => {
    let saveRed = document.getElementById("sldRed").value;
    let saveGreen = document.getElementById("sldGreen").value;
    let saveBlue = document.getElementById("sldBlue").value;
    let nieuweSwatch = document.createElement("div");
    nieuweSwatch.classList.add("swatch");
    let savedSwatch = document.getElementById("swatches");
    savedSwatch.appendChild(nieuweSwatch);
    nieuweSwatch.style.backgroundColor = "rgb(" + saveRed + "," + saveGreen + "," + saveBlue + ")";

    nieuweSwatch.addEventListener("click", () => {
        document.getElementById("sldRed").value = saveRed;
        document.getElementById("sldGreen").value = saveGreen;
        document.getElementById("sldBlue").value = saveBlue;
        document.getElementById("lblBlue").innerHTML= saveBlue;
        document.getElementById("lblRed").innerHTML = saveRed;
        document.getElementById("lblGreen").innerHTML = saveGreen;

        let oudeSwatch = document.querySelector(".swatch");
        oudeSwatch.style.backgroundColor = "rgb(" + saveRed + "," + saveGreen + "," + saveBlue + ")";
    });
    let createKruis = document.createElement("button");
    nieuweSwatch.appendChild(createKruis);
    createKruis.classList.add("kruis");
    createKruis.innerHTML = "X";

    createKruis.addEventListener("click", (e) => {
        e.stopPropagation(); //Door dat die heelsan de main ook erbij veranderd gebruik je dit. Zodat die de main swatch niet aanpast.
        nieuweSwatch.remove();
    })
}



window.addEventListener("load", setup);