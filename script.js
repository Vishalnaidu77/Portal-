const menuButton = document.querySelector('#menuButton');
const navItems = document.querySelector('.navItems');
const closeBtn = document.querySelector("#closeButton");

menuButton.addEventListener("click", () => {
    navItems.style.transform = "translateY(150px)",
    closeBtn.style.display = "block",
    menuButton.style.display = "none"
}) 

closeBtn.addEventListener("click", () => {
    navItems.style.transform = "translateY(-150px)",
    closeBtn.style.display = "none",
    menuButton.style.display = "block"
})


addEventListener("load", () => {
    navItems.style.opacity = "1"
})

const cover1 = document.querySelector(".cover-img1")
const cover2 = document.querySelector(".cover-img2")
const cover3 = document.querySelector(".cover-img3")


window.addEventListener("scroll", () => {
    if(window.scrollY > 2300){
        cover1.style.transform = "translateY(-20px)"
    }
    else{
        cover1.style.transform = "translateY(0px)"
    }
    if(window.scrollY > 2300){
        cover2.style.transform = "translate(-80px, 60px) rotate(-10deg)"
    }
    else{
        cover2.style.transform = "translate(0px, 0px) rotate(0deg)"
    }
    if(window.scrollY > 2300){
        cover3.style.transform = "translate(80px, 40px) rotate(10deg)"
    }
    else{
        cover3.style.transform = "translate(0px, 0px) rotate(0deg)"
    }
    
})


const adv1 = document.querySelector(".advimg1")
const adv2 = document.querySelector(".advimg2")
const adv3 = document.querySelector(".advimg3")
const adv4 = document.querySelector(".advimg4")


window.addEventListener("scroll", () => {
    if(window.scrollY > 3200){
        adv1.style.transform = "translate(-315px, 40px) rotate(-10deg)"
    }
    else{
        adv1.style.transform = "translateX(-150px)"
    }
    if(window.scrollY > 3200){
        adv2.style.transform = "translate(-110px, 0px) rotate(-5deg)"
    }
    else{
        adv2.style.transform = "translateX(-50px)"
    }
    if(window.scrollY > 3200){
        adv3.style.transform = "translate(100px, 0px) rotate(5deg)"
    }
    else{
        adv3.style.transform = "translateX(50px)"
    }
    if(window.scrollY > 3200){
        adv4.style.transform = "translate(320px, 40px) rotate(10deg)"
    }
    else{
        adv4.style.transform = "translateX(130px)"
    }
})