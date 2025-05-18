const setup = () => {
    let saveButton = document.getElementById("btnSave");
    saveButton.addEventListener("click", storeSliderValues)
}

const storeSliderValues = () => {
    let red = document.getElementById("sldRed").value;
    let blue = document.getElementById("sldBlue").value;
    let green = document.getElementById("sldGreen").value;

    let rgb = {
        red: red,
        green: green,
        blue: blue
    };

    let jsonText= JSON.stringify(rgb);
    localStorage.setItem("VIVES.be.colorpicker.sliders", jsonText);
};

const restoreSliderValues = () => {
    let jsonText = localStorage.getItem("VIVES.be.colorpicker.sliders.sliders");
    if (jsonText != null) {
        let rgb = JSON.parse(jsonText);
        document.getElementById("sldRed").value = rgb.red;
        document.getElementById("sldGreen").value = rgb.green;
        document.getElementById("sldBlue").value = rgb.blue;
    }
}

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let rgbColors = [];
    let swatches = document.getElementsByClassName("swatch");
    for (let i = 0; i < swatches.length; i++) {
        let rgb = {
            red: swatches[i].getAttribute("data-red"),
            green: swatches[i].getAttribute("data-green"),
            blue: swatches[i].getAttribute("data-blue"),
        }
        rgbColors.push(rgb);
    }
    let jsonText = JSON.stringify(rgbColors);
    localStorage.setItem("VIVES.be.colorpicker.swatches", jsonText);

};

const restoreSwatches = () => {
    let restoreText = localStorage.getItem("VIVES.be.colorpicker.swatches");
    let rgbColors = JSON.parse(restoreText);
    for (let i = 0; i < rgbColors.length; i++) {
        addSwatchComponent(rgbColors[i].red, rgbColors[i].green, rgbColors[i].blue);
    }
};

