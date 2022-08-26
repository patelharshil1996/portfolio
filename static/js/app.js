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

