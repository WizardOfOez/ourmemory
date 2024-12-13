document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const modalText = document.getElementById("modal-text");
  const closeModal = document.getElementById("close");
  let audio = null; // Audio-Element zum Abspielen von Musik

  // Füge Event-Listener zu allen Containern hinzu
  const containers = document.querySelectorAll(".image-container");
  containers.forEach((container) => {
      container.addEventListener("click", () => {
          // Hole Bild, Text und Audio-Quelle aus dem Container
          const imgSrc = container.querySelector("img").src;
          const text = container.getAttribute("data-text");
          const audioSrc = container.getAttribute("data-audio");

          // Setze die Inhalte in das Modal
          modalImage.src = imgSrc;
          modalText.textContent = text;

          // Erstelle und spiele das Audio ab
          if (audio) {
              audio.pause();
              audio = null;
          }
          if (audioSrc) {
              audio = new Audio(audioSrc);
              audio.loop = true; // Audio im Loop abspielen
              audio.play();
          }

          // Zeige das Modal mit Animation
          modal.style.display = "flex";
      });
  });

  // Schließen des Modals
  closeModal.addEventListener("click", () => {
      modal.style.display = "none";
      if (audio) {
          audio.pause(); // Stoppe das Audio
          audio = null;  // Audio-Element entfernen
      }
  });

  // Modal schließen, wenn man außerhalb klickt
  window.addEventListener("click", (e) => {
      if (e.target === modal) {
          modal.style.display = "none";
          if (audio) {
              audio.pause(); // Stoppe das Audio
              audio = null;  // Audio-Element entfernen
          }
      }
  });
});
