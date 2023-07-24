(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener("click", closeModal);

  function openModal() {
    refs.modal.classList.remove("is-hidden");
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscapeKey);
  }

  function closeModal() {
    refs.modal.classList.add("is-hidden");
    document.body.style.overflow = "auto";
    document.removeEventListener("keydown", handleEscapeKey);
  }

  function handleEscapeKey(event) {
    if (event.key === "Escape") {
      // Закрываем модальное окно при нажатии клавиши Escape
      closeModal();
    }
  }
})();


