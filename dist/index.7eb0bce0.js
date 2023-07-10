(()=>{
    const refs = {
        openModalBtn: document.querySelector("[data-modalIngredients-open]"),
        openModalBtn2: document.querySelector("[data-modalIngredients2-open]"),
        openModalBtn3: document.querySelector("[data-modalIngredients3-open]"),
        closeModalBtn: document.querySelector("[data-modalIngredients-close]"),
        modal: document.querySelector("[data-modalIngredients]")
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.openModalBtn2.addEventListener("click", toggleModal);
    refs.openModalBtn3.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.modal.classList.toggle("is-hidden-ingredients");
    }
})();

//# sourceMappingURL=index.7eb0bce0.js.map
