// login
const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");
    
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click",()=>{
            pwFields.forEach(pwField=>{
                if(pwField.type === "password"){
                    pwField.type = "text";
                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("bxs-hide","bxs-show")
                    })
                }else{
                    pwField.type = "password";
                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("bxs-show","bxs-hide")
                    })
                }
            })
        })
    })
    // change login
    signUp.addEventListener("click", ()=>{
        container.classList.add("active");
    })
    login.addEventListener("click", ()=>{
        container.classList.remove("active");
    })
