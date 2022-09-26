
import './style/main.scss'


const wallPaper1 = document.querySelector('.first-wallpaper')
const wallPaper2 = document.querySelector('.second-wallpaper')
const texBlock = document.querySelector('.text-block')
const texBlock2 = document.querySelector('.text-block2')

///// появление и ищезновение шаров 

const bubbles = document.querySelectorAll('.bubble-green');
bubbles.forEach(b => window.addEventListener('scroll', ()=>{
    if(window.scrollY > window.scrollY /2){
       b.style.transform = `translateX(${-500}%)`
    } else{
        b.style.transform = `translateX(${0}%)`
    }
}));

const bubbles1 = document.querySelectorAll('.bubble-purple');
bubbles1.forEach(b => window.addEventListener('scroll', ()=>{
    if(window.scrollY > window.scrollY /2){
       b.classList.remove('hideBubble')
       b.classList.add('.showBubble')
    } else{
        b.classList.remove('showBubble')
        b.classList.add('hideBubble')
       
    }
}));


///// изменение фона и изображений 

window.addEventListener('scroll', changeBackground)

function changeBackground(){
    if(window.scrollY > window.scrollY /2){
        document.body.classList.add('purple')
        wallPaper1.classList.add('hide')
        texBlock.classList.add('hide')
        texBlock2.classList.remove('hide1')
        wallPaper1.classList.add('animation')
        wallPaper2.classList.remove('hideSecondWallpaper')
        wallPaper2.classList.add('animationWallpaper')
        texBlock.classList.add('hide')




    } else{
        document.body.classList.remove('purple')
        wallPaper1.classList.remove('hide')  
        wallPaper1.classList.remove('animation')
        wallPaper2.classList.add('hideSecondWallpaper')
        texBlock.classList.remove('hide')
        texBlock2.classList.add('hide1')
    }
}  


/////// реакция шаров на движение мыши

document.addEventListener('mousemove', parallax);
function parallax(e){
    this.querySelectorAll('.bubble').forEach(bubble =>{
        const speed = bubble.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed)/50
        const y = (window.innerHeight - e.pageY*speed)/50
        bubble.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}








