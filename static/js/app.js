const modelViews = document.querySelectorAll('.experiences_model')
      modelBtns = document.querySelectorAll('.experiences_button')
      modelClose = document.querySelectorAll('.experiences_model-close')
    
let model = function(modelClick){
    modelViews[modelClick].classList.add('active-model')
}

modelBtns.forEach((mb, i) =>{
    mb.addEventListener('click',() =>{
        model(i)
    })
})

modelClose.forEach((mc) =>{
    mc.addEventListener('click',() =>{
        modelViews.forEach((mv) =>{
            mv.classList.remove('active-model')
        })
    })
})

const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = "#061630";
    } else{
        header.style.backgroundColor = "transparent";
    }
});

