const setup = () => {
    document.getElementById("imgPhoto")
        .addEventListener("mouseover", changePhoto);
}
const changePhoto = () => {
    let photo = document.getElementById("imgPhoto");
    photo.src ="./images/cat.jpg";
    photo.alt="cat";
    let bb = document.getElementById("img");
    bb.className += " active";

}
window.addEventListener("load", setup);