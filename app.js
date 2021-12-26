const  closeBtn = document.querySelector('#close');
const overlay = document.querySelector('.overlay');
const leftBtn = document.querySelector('.left')


leftBtn.addEventListener("click" , () => {
    overlay.style.width = "100%";

})

closeBtn.onclick = () => {
 overlay.style.width = "0%";
}