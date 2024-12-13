const memories = [
    {
        title: "Erinnerung 1",
        image: "assets/images/memory1.jpg",
        music: "assets/music/song1.mp3",
        text: "Konzert."
    },
    {
        title: "Erinnerung 2",
        image: "assets/images/memory2.jpg",
        music: "assets/music/song2.mp3",
        text: "MCM."
    }

    
];

const container = document.getElementById("memory-container");

memories.forEach((memory, index) => {
    const button = document.createElement("button");
    button.className = "memory-button";
    button.innerHTML = `<img src="${memory.image}" alt="${memory.title}">`;
    button.onclick = () => openMemory(memory);
    container.appendChild(button);
});


function openMemory(memory) {
    // Popup erstellen
    const popup = document.createElement("div");
    popup.className = "memory-popup";
    popup.innerHTML = `
        <img src="${memory.image}" alt="${memory.title}">
        <p>${memory.text}</p>
        <audio controls autoplay>
            <source src="${memory.music}" type="audio/mp3">
        </audio>
        <button onclick="closePopup(this)">Schließen</button>
    `;
    document.body.appendChild(popup);
}

function closePopup(button) {
    const popup = button.parentElement;
    popup.remove();
}

