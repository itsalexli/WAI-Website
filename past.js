const scrollContainer = document.querySelector(".scroll-images");

// Duplicate the children for seamless scrolling (optional if you want continuous looping)
function duplicateChildren() {
  const children = Array.from(scrollContainer.children);
  children.forEach((child) => {
    const clone = child.cloneNode(true);
    scrollContainer.appendChild(clone);
  });
}

// Automatically scroll
function startAutoScroll() {
  const scrollInterval = setInterval(() => {
    scrollContainer.scrollBy(2, 0); // Adjust this value to control scroll speed

    // Check if the scroll has reached the end
    if (
      scrollContainer.scrollLeft + scrollContainer.clientWidth >=
      scrollContainer.scrollWidth
    ) {
      clearInterval(scrollInterval); // Stop scrolling when the end is reached
    }
  }, 10); // Adjust this value to control smoothness
}

// Open modal with larger image
function openModal(src) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modal.style.display = "flex";
  modalImage.src = src;
}

// Close the modal
function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// Initialize infinite scroll
duplicateChildren(); // Optional for looping behavior
startAutoScroll();
