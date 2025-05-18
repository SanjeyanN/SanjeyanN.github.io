let draggedTask = null;

const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", buttonClick);

    // Voeg drag & drop toe aan bestaande kolommen
    const columns = document.getElementsByClassName("column");
    for (let column of columns) {
        column.addEventListener("dragover", (e) => e.preventDefault());
        column.addEventListener("drop", handleDrop);
    }
};

const buttonClick = () => {
    const titel = document.getElementById("titel").value.trim();
    const beschrijving = document.getElementById("beschrijving").value.trim();
    const date = new Date().toLocaleString();

    if (titel === "") return;

    let ToDoLijst = document.getElementById("todo");
    let createDiv = document.createElement("div");
    createDiv.innerHTML = `${titel}<br>${beschrijving}<br>${date}`;
    createDiv.classList.add("task");
    createDiv.setAttribute("draggable", "true");

    // Maak de taak versleepbaar
    createDiv.addEventListener("dragstart", () => {
        draggedTask = createDiv;
    });

    ToDoLijst.appendChild(createDiv);
};

const handleDrop = (e) => {
    if (draggedTask) {
        e.currentTarget.appendChild(draggedTask);
        draggedTask = null;
    }
};

window.addEventListener("load", setup);
