const setup = () => {
    let button = document.getElementById('button');
    button.addEventListener('click', btnFunctie)
}
const btnFunctie = () => {
    let tekst = document.getElementById('input').value;
    let aantal = 0;
    let zoek = "an";
    let index = tekst.indexOf(zoek);
  while (index !== -1) {
      aantal++;
      index = tekst.indexOf(zoek, index + 1);
  }
    console.log("Het woord an komt: " + aantal + " voor");
}
window.addEventListener("load", setup);