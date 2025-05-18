

let personen = [];

// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    let voorNaam = document.getElementById("txtVoornaam");
    let achterNaam = document.getElementById("txtFamilienaam");
    let geboorteDatum = document.getElementById("txtGeboorteDatum");
    let email = document.getElementById("txtEmail");
    let aantalKinderen = document.getElementById("txtAantalKinderen");
    let lijst = document.getElementById("lstPersonen");
    // valideer alle input data en controleer of er geen errors meer zijn
    //
    valideer();
    if (!hasErrors()) {
        let bewaarPersoon = {
            voorNaam: voorNaam.value.trim(),
            achterNaam: achterNaam.value.trim(),
            geboorteDatum: geboorteDatum.value.trim(),
            email: email.value.trim(),
            aantalKinderen: aantalKinderen.value.trim(),
        }
        let maakOptie = document.createElement("option")
        lijst.appendChild(maakOptie);
        maakOptie.textContent = bewaarPersoon.voorNaam + " " + bewaarPersoon.achterNaam;
        personen.push(bewaarPersoon);
    }



    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    let voorNaam = document.getElementById("txtVoornaam");
    let achterNaam = document.getElementById("txtFamilienaam");
    let geboorteDatum = document.getElementById("txtGeboorteDatum");
    let email = document.getElementById("txtEmail");
    let aantalKinderen = document.getElementById("txtAantalKinderen");
    let lijst = document.getElementById("lstPersonen");

    console.log("Klik op de knop nieuw");

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.selectedIndex = -1;

    let inputElem = document.querySelectorAll("input"[type='text']);
    inputElem.forEach((element) => {
        elem.value = "";
    })
     voorNaam.value = "";
    achterNaam.value = "";
        geboorteDatum.value = "";
        email.value = "";
       aantalKinderen.value = "";
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};
const bewerkGeselecteerdePersonen = () => {
    let lijst = document.getElementById("lstPersonen");
    let index = lijst.selectedIndex;

    let persoon = personen[index];
    document.getElementById("txtVoornaam").value = persoon.voorNaam;
    document.getElementById("txtFamilienaam").value = persoon.achterNaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum;
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
}

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", bewerkGeselecteerdePersonen);
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier

};

window.addEventListener("load", setup);