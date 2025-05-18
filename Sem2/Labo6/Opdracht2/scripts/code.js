const setup = () => {

    let par = document.getElementsByTagName("li");
    for (let i = 0; i < par.length; i++) {
        par[i].setAttribute('class', 'listitems');

    }
    let img = document.createElement('img');
    img.setAttribute('src', 'images/amCOoked.jpg');
    img.setAttribute('alt', 'text');
    document.querySelector("body").appendChild(img);
}
window.addEventListener("load", setup);