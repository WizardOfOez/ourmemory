// script.js
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalText = document.getElementById("modal-text");
    const closeModal = document.getElementById("close");
  
    // Füge Event-Listener zu allen Containern hinzu
    const containers = document.querySelectorAll(".image-container");
    containers.forEach((container) => {
      container.addEventListener("click", () => {
        // Hole das Bild und den Text aus dem angeklickten Container
        const imgSrc = container.querySelector("img").src;
        const text = container.getAttribute("data-text");
  
        // Setze die Inhalte in das Modal
        modalImage.src = imgSrc;
        modalText.textContent = text;
  
        // Zeige das Modal mit Animation
        modal.style.display = "flex";
      });
    });
  
    // Schließen des Modals
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Modal schließen, wenn man außerhalb klickt
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  