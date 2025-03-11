const setup = () => {
    let addClass = document.getElementsByClassName('belangrijk');
    for (let i = 0; i <= addClass.length; i++) {
        addClass[i].className+=" opvallend";
    }

    let voegK = document.getElementsByClassName('belangrijk');
    for (let i = 0; i < voegK.length; i++) {
        if (i === 1 || i === 3){
            voegK[i].classList.toggle('belangrijk');
        }
    }
}
window.addEventListener("load", setup);