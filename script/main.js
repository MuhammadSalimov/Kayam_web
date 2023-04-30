const cube = document.querySelectorAll('.cube')
const span= document.querySelectorAll('span')
cube.forEach((e)=>{
    e.addEventListener('click' ,(elem)=> {
        const parent= elem.target.parentElement
        parent.classList.add('show')
        setTimeout(function spanShow(){
            span.forEach((e)=>{
                e.classList.add('show')
            })
        },1000)
    })
})
spanShow()
