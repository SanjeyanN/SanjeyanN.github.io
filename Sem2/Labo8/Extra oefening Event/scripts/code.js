const setup = () => {
    console.log("setup");
    let evenement = {
        naam: "Codeer Workshop Javascript",
        datum: new Date(2025, 3, 15), // 15 april 2025
        locatie: "Kortrijk",
        deelnemers: ["John", "Maria", "Ahmed", "Sophie"]
    }
    toonEvenementInfo(evenement);

    const toonEvenementInfo = (event) => {
        console.log("Naam: " + evenement.naam);
        console.log("Datum: " + evenement.datum);
        console.log("Locatie: " + evenement.locatie);
        console.log("Deelnemers: " + evenement.deelnemers);
    }

    const dagenTotEvenement =  (event) => {
        return Math.ceil((event.datum - new Date())/ (1000 * 3600 * 24))
    }
}

window.addEventListener("load", setup);
