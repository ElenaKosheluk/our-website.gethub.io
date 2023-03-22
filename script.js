const singInButtonElement = document.querySelector('.button_come');
const modalElement = document.querySelector('.modal__overlay');
const closeButtoElement = document.querySelector('.close-button');

function openModal() {
   modalElement.classList.add('modal_visible');
}
function closeModal() {
    modalElement.classList.remove('modal_visible');
}
function handleCloseModalByEscape(event) {
    if(event.key === 'Escape'){
        closeModal();
    }
}
function handleCloseByOverlay(event) {
    if(event.target === modalElement) {
        closeModal();
    }   
}
  
singInButtonElement.addEventListener('click', openModal);
document.addEventListener('keydown', handleCloseModalByEscape);
modalElement.addEventListener('click', handleCloseByOverlay);
closeButtoElement.addEventListener('click', closeModal);