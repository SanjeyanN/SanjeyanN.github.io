const setup = () => {
    let btnKlik = document.getElementById('knop');
    btnKlik.addEventListener('click', toonTrigram)
}
    const toonTrigram = () => {
    let tekst = document.getElementById('input').value.trim();
    let output = document.getElementById('output');
    for (let i = 0; i < tekst.length - 2; i++) {
        console.log(tekst.slice(i, i+3))
        output.innerHTML += tekst.slice(i, i+3) + "<br />";
    }
    }
window.addEventListener("load", setup);