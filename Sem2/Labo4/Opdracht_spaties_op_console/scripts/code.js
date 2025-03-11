const setup = () => {
    let button = document.getElementById('button');
    button.addEventListener('click', btnVerander);
}
const btnVerander = () => {
    let text = document.getElementById('input').value;
    let resultaat = "";
    for (let i = 0; i < text.length; i++) {
        resultaat += text[i] + " ";
    }
    document.getElementById("tekst").innerHTML = resultaat;
    console.log(resultaat);
}
window.addEventListener("load", setup);