const modalButtons = document.querySelectorAll("[data-modal-target]");
const closeButtons = document.querySelectorAll("[data-modal-close]");
const projectModals = document.querySelectorAll(".project-modal");

modalButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const modal = document.getElementById(button.dataset.modalTarget);

    if (modal) {
      modal.showModal();
    }
  });
});

closeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    button.closest("dialog").close();
  });
});

projectModals.forEach(function (modal) {
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.close();
    }
  });
});
