// navbar
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");

searchBox.addEventListener("click",()=>{
    navbar.classList.toggle("showInput")
    if(navbar.classList.contains("showInput")){
        searchBox.classList.replace("bx-search" , "bx-x")
    }else{
        searchBox.classList.replace("bx-x" , "bx-search")
    }
})

let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let closeOpenBtn = document.querySelector(".nav-links .bx-x");
let navLinks = document.querySelector(".nav-links");

menuOpenBtn.addEventListener("click",()=>{
    navLinks.style.left = "0";
    navLinks.style.display = 'block';
})

closeOpenBtn.addEventListener("click",()=>{
    navLinks.style.left = "-100%";
})

let htmlcssArrow = document.querySelector(".htmlcss-arrow");
// let jsArrow = document.querySelector(".js-arrow");
// let moreArrow = document.querySelector(".more-arrow");

    htmlcssArrow.addEventListener("click",()=>{
        navLinks.classList.toggle("show1")
    })
    // jsArrow.addEventListener("click",()=>{
    //     navLinks.classList.toggle("show2")
    // })
    // moreArrow.addEventListener("click",()=>{
    //     navLinks.classList.toggle("show3")
    // })

    // toggle-bg
    window.addEventListener("scroll",()=>{
        const nav = document.querySelector('nav');
        nav.classList.toggle('sticky', window.scrollY > 0);
    })

// login
// const container = document.querySelector(".container"),
//     pwShowHide = document.querySelectorAll(".showHidePw"),
//     pwFields = document.querySelectorAll(".password"),
//     signUp = document.querySelector(".signup-link"),
//     login = document.querySelector(".login-link");
    
//     pwShowHide.forEach(eyeIcon =>{
//         eyeIcon.addEventListener("click",()=>{
//             pwFields.forEach(pwField=>{
//                 if(pwField.type === "password"){
//                     pwField.type = "text";
//                     pwShowHide.forEach(icon =>{
//                         icon.classList.replace("bxs-hide","bxs-show")
//                     })
//                 }else{
//                     pwField.type = "password";
//                     pwShowHide.forEach(icon =>{
//                         icon.classList.replace("bxs-show","bxs-hide")
//                     })
//                 }
//             })
//         })
//     })
    // change login
    // signUp.addEventListener("click", ()=>{
    //     container.classList.add("active");
    // })
    // login.addEventListener("click", ()=>{
    //     container.classList.remove("active");
    // })





