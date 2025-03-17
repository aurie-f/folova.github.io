// Different image sets for each gallery
const gallery1Images = ["images/mindmap.jpg", "images/models.jpg"]; // source for button
const gallery2Images = ["images/certificate.jpg", "images/course.jpg", "images/mentorship.jpg"]; // source for link

let currentImages = []; // Array to hold the currently displayed gallery
let currentIndex = 0;

// Get elements
const modal = document.getElementById("imageModal");
const openModalBtn = document.getElementById("openModalBtn");
const openModalLink = document.getElementById("openModalLink");
const closeModal = document.querySelector(".close");
const modalImage = document.getElementById("modalImage");

// Function to open modal with specific image array
function openModal(images) {
    currentImages = images; // Set the active image array
    currentIndex = 0; // Reset index
    modal.style.display = "flex";
    showImage(currentIndex);
}

// Open modal for Gallery 1 (Button)
openModalBtn.addEventListener("click", () => {
    openModal(gallery1Images);
});

// Open modal for Gallery 2 (Anchor link)
openModalLink.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(gallery2Images);
});

// Close modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Change image when clicking next/prev buttons
function changeImage(direction) {
    currentIndex += direction;

    // Loop around if at the beginning or end
    if (currentIndex < 0) {
        currentIndex = currentImages.length - 1;
    } else if (currentIndex >= currentImages.length) {
        currentIndex = 0;
    }

    showImage(currentIndex);
}

// Function to show the image in modal
function showImage(index) {
    modalImage.src = currentImages[index];
}