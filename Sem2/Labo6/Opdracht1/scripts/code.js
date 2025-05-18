const setup = () => {
    let veranderText = document.querySelectorAll('p');
    for (let i = 0; i < veranderText.length; i++) {
        veranderText[i].innerHTML = "Good Job!";
    }
}
window.addEventListener("load", setup);