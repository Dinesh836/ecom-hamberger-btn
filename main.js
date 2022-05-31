const hamBtn=document.querySelector('.btn')

const list=document.querySelector('.list')

hamBtn.addEventListener("click", ()=>{
    list.classList.toggle("active")
    // if(list.classList.contains('active')){
    //     list.classList.remove('active')
    // }
    // else{
    //     list.classList.add('active');
    // }
})