const setup = () => {
    let button = document.getElementById('button');
    button.addEventListener('click', verandering)
}
const maakMetSpaties = (inputText) => {
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
        result += inputText.charAt(i) + " ";
    }
    return result;
}
const verandering = () => {
    let tekst = document.getElementById("input").value;
    let resultaat = maakMetSpaties(tekst);
    console.log(resultaat);
}
window.addEventListener("load", setup);