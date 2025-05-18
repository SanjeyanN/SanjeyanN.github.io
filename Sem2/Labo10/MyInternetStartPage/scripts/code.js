let historyList = JSON.parse(localStorage.getItem('historyList')) || [];

function createCard(entry) {
    let color = '';
    if (entry.title === 'YouTube') color = 'bg-danger';
    else if (entry.title === 'Google') color = 'bg-primary';
    else if (entry.title === 'Twitter') color = 'bg-info';
    else if (entry.title === 'Instagram') color = 'bg-purple';

    const col = document.createElement('div');
    col.className = 'col-md-4';

    col.innerHTML = `
        <div class="card text-white ${color} mb-3">
            <div class="card-body">
                <h5 class="card-title">${entry.title}</h5>
                <p class="card-text">${entry.text}</p>
                <a href="${entry.url}" target="_blank" class="btn btn-dark">Go!</a>
            </div>
        </div>`;
    document.getElementById('historyRow').appendChild(col);
}

function handleCommand() {
    const input = document.getElementById('zoekInput');
    const value = input.value.trim();
    const match = value.match(/^\/([gyxi])\s+(.+)/i);
    if (!match) {
        alert("Ongeldig commando! Kies uit: /g webdesign, /y arctic monkeys,  /x COVID19,  /i viveshwbkortrijk");
        return;
    }

    const prefix = match[1].toLowerCase();
    const query = match[2];
    let url = '', title = '';

    if (prefix === 'g') {
        url = 'https://www.google.com/search?q=' + query.replace(/\s+/g, '+');
        title = 'Google';
    } else if (prefix === 'y') {
        url = 'https://www.youtube.com/results?search_query=' + query.replace(/\s+/g, '+');
        title = 'YouTube';
    } else if (prefix === 'x') {
        url = 'https://x.com/hashtag/' + query.replace(/\s+/g, '');
        title = 'Twitter';
    } else if (prefix === 'i') {
        url = 'https://www.instagram.com/explore/tags/' + query.replace(/\s+/g, '');
        title = 'Instagram';
    } else {
        alert("Ongeldig commando");
        return;
    }

    const entry = { title, text: query, url };
    historyList.push(entry);
    localStorage.setItem('historyList', JSON.stringify(historyList));

    createCard(entry);
    input.value = '';
    window.open(url, '_blank');
}

document.getElementById('goButton').addEventListener('click', handleCommand);

window.onload = () => {
    historyList.forEach(createCard);
};
