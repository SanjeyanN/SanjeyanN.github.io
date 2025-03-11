
const setup = () => {
    let btnTry = document.getElementById("btnTry");

    // Event-based programming
    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", mouseOut);

    // eventListeners CSS
    document.getElementById("btnWithoutBullets")
        .addEventListener("click", withoutBullets);

    document.getElementById("btnWithBullets")
        .addEventListener("click", withBullets);

    //eventListeners difference between "textContent" and "innerHTML"

    document.getElementById("btnContent")
        .addEventListener("click", changeContent);

}
const withoutBullets = () => {

    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        // 1ste manier
        listItems[i].style.listStyle = "none";
        listItems[i].style.backgroundColor = "red";
    }


}
const withBullets = () => {
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        //1ste manier
       listItems[i].style.listStyle = "disc";
       listItems[i].style.backgroundColor = "white";

    }
}
// mouseHoverFunction
    const mouseHover = () => {
        document.getElementById("event").innerHTML += "Mouse Hovered!<br>";

    }
    const onClick = () => {
    document.getElementById("event").innerHTML += "Mouse Clicked!<br>";
    }
    const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse Out!<br>";
    }
    const changeContent = () => {
    documen
    }
window.addEventListener("load", setup);