const setup = () => {
    let start = new Date('2025-04-01T12:10:30');
    console.log(start);

    // dag van de week
    console.log((start).getDay());
    // maand
    console.log(start.getMonth() + 1);
    // jaar
    console.log(start.getFullYear());

    let datum = new Date(2004, 10, 26);
    let event = Date();

    console.log(Math.floor((start - datum) /1000/60/60/24));
}
window.addEventListener("load", setup);
