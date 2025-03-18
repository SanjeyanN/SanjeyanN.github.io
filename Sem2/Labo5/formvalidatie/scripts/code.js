const setup = () => {
let btnSubmit = document.getElementById('btnsubmit');
btnSubmit.addEventListener('click', submit)
    let valid = true;
}
const submit = () => {
    let inputVoornaam = document.getElementById('input1');
    let inputAchternaam = document.getElementById('input2');
    let inputDate = document.getElementById('input3');
    let inputEmail = document.getElementById('input4');
    let inputKinderen = document.getElementById('input5');
    let outputVoornaam = document.getElementById('voornaam');
    let outputAchternaam = document.getElementById('achternaam');
    let outputDate = document.getElementById('geboortedatum');
    let outputEmail = document.getElementById('email');
    let outputKinderen = document.getElementById('kids');
    if (inputVoornaam.value.trim().length > 30) {
        outputVoornaam.innerHTML = "max. 30 karakters";
    } else {
        outputVoornaam.textContent = "";
        valid = true;
    }
    if (inputAchternaam.value.trim().length === 0) {
        outputAchternaam.textContent = "verplicht veld";
        valid = false;
    } else if (inputAchternaam.value.trim().length > 50) {
        outputAchternaam.textContent = "max 50 karakters";
        valid = false;
    } else {
        valid = true;
    }
    let datePattern = /^\d{4}-\d{2}-\d{2}$/; // Regex voor "jjjj-mm-dd"
    if (inputDate.value === 0) {
        outputDate.textContent = "Verplicht veld";
        valid = false;
    } else if (!datePattern.test(inputDate.value.trim())) {
        outputDate.textContent = "Formaat is niet jjjj-mm-dd";
        valid = false;
    } else {
        outputDate.textContent = "";
        valid = true;
    }
    const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
    if (inputEmail.value.trim() === "") {
        outputEmail.textContent = "verplicht veld";
        valid = false;
    } else if (!emailRegex.test(inputEmail.value.trim())) {
        outputEmail.textContent = "geen geldige email";
        valid = false;
    } else {
        outputEmail.textContent = "";
        valid = true;
    }
    if (inputKinderen.value < 0) {
        outputKinderen.textContent = "is geen positief getal";
        valid = false;
    } else if (inputKinderen.value.length === 0) {
        outputKinderen.textContent = "geen geldige getal";
        valid = false;
    } else if (inputKinderen.value >= 99) {
        outputKinderen.textContent = "is te vruchtbaar";
        valid = false;
    } else {
        outputKinderen.textContent = "";
        valid = true;
    }
    if (valid) {
        alert("proficiat")
    }
}
window.addEventListener("load", setup);