const x = document.querySelector('.modal__close');
const modal = document.getElementById('modal');
const body = document.querySelector('html');
const modalChildren = modal.children;
console.log(modalChildren);


x.addEventListener('click', function() {
    modal.classList.add('close');
})

// modal.addEventListener('click', function() {
//     modal.classList.add('close');
// })

window.addEventListener('click', function(e) {
    if( e.target != modal) {
        modal.classList.add('close');
    }
})