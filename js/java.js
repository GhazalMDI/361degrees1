const searcheBoxRight=document.querySelector('.box-search-right');
const searchbox=document.querySelector('.search-box');
const searchbox1=document.querySelector('.search-box-one')
const close=document.querySelector('.close');
const co=document.querySelector('.co1')
const col=document.querySelector('.col2');
const navigation=document.querySelector('.header')
let btnBuy=document.getElementsByClassName('btn-buy');
let cart=document.querySelector('#cart');
let cart3=document.querySelector('.cart3');
let menu=document.querySelector('.box-search-cart')
let copy=document.querySelector('.select')
let men=document.querySelector('.men');
let mag=document.querySelector('.box-mega-menu');
const left=document.querySelector('.box-left-icon');
const right=document.querySelector('.box-right-icon');
var boxShos=document.querySelector('.stop')
let slider=document.querySelector('.gallery-container');
const show_menu=document.querySelector('.bar');
const menuMain=document.querySelector('.menu');
const closeTwo=document.querySelector('.close-two')
const cart1=document.querySelectorAll('.cart1')
searchbox1.addEventListener('click',()=>{
    searcheBoxRight.classList.toggle('show')
    searcheBoxRight.style.zIndex='88888888'
})
cart3.addEventListener('click',()=>{
menu.classList.toggle('show3');
})


show_menu.addEventListener('click',()=>{
    menuMain.classList.toggle('show-menu1')
})
closeTwo.addEventListener('click',(e)=>{
    e.preventDefault()
    menuMain.classList.remove('show-menu1')
})
left.addEventListener('click',()=>{
    slider.scrollLeft-=125
})
right.addEventListener('click',()=>{
    slider.scrollLeft +=125;
})
const MaxScroll=slider.scrollWidth-slider.clientWidth;
function autoplay(){
    if(slider.scrollLeft>(MaxScroll-1)){
        slider.scrollLeft -=MaxScroll;
    }else{
            slider.scrollLeft +=1;
    }
}
let play=setInterval(autoplay,50);

for(let i=0;i<boxShos.length;i++){
    boxShos[i].addEventListener('mouseover',()=>{
        clearInterval(play)
    })
    boxShos[i].addEventListener('mouseout',()=>{
        return  play=setInterval(autoplay,50);
    })
}
            
searchbox.addEventListener('click',()=>{
    searcheBoxRight.classList.toggle('show')
})
close.addEventListener('click',()=>{
    searcheBoxRight.classList.remove('show')
})

co.addEventListener('click',()=>{
    menu.classList.remove('show')
})
col.addEventListener('click',()=>{
    menu.classList.remove('show3')
})
window.addEventListener('scroll',()=>{
    navigation.classList.toggle('sticky',window.scrollY>0)
    menu.style.position='fixed';
    menu.style.zindex='700000';
    searcheBoxRight.position='fixed';
    menu.style.zIndex='8888888';
})
cart.addEventListener('click',()=>{
menu.classList.toggle('show')
})
for(bt of btnBuy){
    bt.addEventListener('click',(e)=>{
    e.preventDefault()
    const add=Number(cart.getAttribute('data') || 0)
    cart.setAttribute('data',add+1)
    let parent=e.target.parentElement.parentElement.parentElement;
    let clone=parent.cloneNode(true)
    copy.appendChild(clone)
    if(clone){
        cart.addEventListener('click',()=>{
       copy.classList.toggle('showes')
       
        })
    }
    })
}

