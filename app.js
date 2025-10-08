document.addEventListener("DOMContentLoaded", function () {
  // Get the modal
  const modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal
  const modalImg = document.getElementById("modalImage");
  const galleryImages = document.querySelectorAll(".gallery img");
  const galleryItems = document.querySelectorAll(".gallery > div");

  galleryItems.forEach((item) => {
    item.onclick = function () {
      const img = this.querySelector("img");
      modal.style.display = "block";
      // Use a timeout to allow the display property to apply before adding the show class for the transition
      setTimeout(() => {
        modal.classList.add("show");
      }, 10);
      modalImg.src = img.src;
    };
  });

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  function closeModal() {
    modal.classList.remove("show");
    // Wait for the transition to finish before hiding the modal
    setTimeout(() => {
      modal.style.display = "none";
    }, 400); // This should match the transition duration in CSS
  }

  span.onclick = closeModal;

  // When the user clicks anywhere on the modal background (but not the image), close it
  modal.onclick = (event) => event.target === modal && closeModal();
});
