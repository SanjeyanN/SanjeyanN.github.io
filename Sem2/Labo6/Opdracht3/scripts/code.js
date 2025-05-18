const setup = () => {
    let maakP = document.createElement('p');
    let divE = document.getElementById('myDIV')    /*document.querySelector('#myDIV'); kan ook! maar is langzamer */
    divE.appendChild(maakP);
}
window.addEventListener("load", setup);