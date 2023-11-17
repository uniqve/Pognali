document
  .querySelector(".tariffs-buisnes")
  .addEventListener("click", function () {
    document.getElementById("modal").classList.add("active");
  });

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("modal").classList.remove("active");
});

const burgerButton = document.querySelector(".burger");
const modal = document.querySelector(".burger__tablet-active");
const closeButton = document.querySelector(".burger-close");
const header = document.querySelector(".header");

function openModal() {
  modal.style.display = "block";
}
burgerButton.addEventListener("click", openModal);

function closeModal() {
  modal.style.display = "none";
}
closeButton.addEventListener("click", closeModal);

burgerButton.addEventListener("click", () => {
  header.style.display = "none";
});

closeButton.addEventListener("click", () => {
  header.style.display = "flex";
});


const intrestedBlock = document.querySelector(".intrested");
const intrestedButton = document.querySelector(".intrested-button");
const footerBlock = document.querySelector('.footer')

intrestedButton.addEventListener("click", () => {
  intrestedBlock.classList.toggle("none");
});




window.addEventListener('scroll', function() {
    var header = document.querySelector('.sticky-header');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });