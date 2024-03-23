const navDesk= document.querySelector('.navigation--desktop');
const navMobile= document.querySelector('.navigation--mobile');
const navBtn= document.querySelector('.navigation__button');
const navMobileLinks= document.querySelectorAll('.navigation__link--mobile')
let open=false;
const showNavMobile = ()=>{
    
    if(open==false){
        navMobile.style.transform = "translate(0,0)";
        open=true
    }else if(open==true){
        navMobile.style.transform = "translate(-150%,0)";
        open=false
    }
    
}

const hideNavMobile = () =>{
    navMobile.style.transform = "translate(-150%,0)";
    open=false
}

const showNavDesk =()=>{
    navDesk.style.transform = "translate(0,0)";
}

navMobileLinks.forEach(link => {
    link.addEventListener('click', ()=> hideNavMobile())
});
navBtn.addEventListener('click', ()=> showNavMobile());
document.addEventListener('scroll', ()=>{showNavDesk();});
