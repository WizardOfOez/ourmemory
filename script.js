document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const modalText = document.getElementById("modal-text");
  const closeModal = document.getElementById("close");
  const containers = document.querySelectorAll(".image-container");
  const progressBar = document.querySelector(".progress-bar");
  const nextPageBtn = document.getElementById("next-page-btn");
  let audio = null;

  const totalContainers = containers.length;
  let visitedCount = 0;

  containers.forEach((container) => {
      container.addEventListener("click", () => {
          const imgSrc = container.querySelector("img").src;
          const text = container.getAttribute("data-text");
          const audioSrc = container.getAttribute("data-audio");

          modalImage.src = imgSrc;
          modalText.textContent = text;

          if (audio) {
              audio.pause();
              audio = null;
          }
          if (audioSrc) {
              audio = new Audio(audioSrc);
              audio.loop = true;
              audio.play();
          }

          modal.style.display = "flex";

          closeModal.onclick = () => {
              closeModalAndUpdateProgress(container);
          };

          window.onclick = (e) => {
              if (e.target === modal) {
                  closeModalAndUpdateProgress(container);
              }
          };
      });
  });

  function closeModalAndUpdateProgress(container) {
      modal.style.display = "none";
      if (audio) {
          audio.pause();
          audio = null;
      }

      const checkbox = container.querySelector(".visited-checkbox");
      if (checkbox && !checkbox.checked) {
          checkbox.checked = true;
          visitedCount++;
          updateProgressBar();
      }
  }

  function updateProgressBar() {
      const progress = (visitedCount / totalContainers) * 100;
      progressBar.style.width = `${progress}%`;
      progressBar.setAttribute("aria-valuenow", progress);

      if (visitedCount === totalContainers) {
          nextPageBtn.style.display = "inline-block";
      }
  }

  nextPageBtn.addEventListener("click", () => {
      window.location.href = "nextpage.html";
  });
});
