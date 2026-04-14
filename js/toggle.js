let body = document.querySelector("body")
let toggle = document.querySelector(".toggle")
let decor = document.querySelectorAll(".decor")

window.addEventListener("load", (e)=>{
    if (localStorage.getItem("theme")==="dark"){
        body.setAttribute("data-theme", "dark");
        for (let i=0; i<decor.length;i++){
            decor[i].src="images/soundwavelight.png"}
    }
    }
)

toggle.addEventListener("click", (e)=>{
    if(body.getAttribute("data-theme") === "dark"){
        localStorage.setItem("theme", "light")
        body.removeAttribute("data-theme");
        for (let i=0; i<decor.length;i++){
            decor[i].src="images/Sound-Waves-PNG-Photo-4025058712.png"}
    }
    else{
        localStorage.setItem("theme", "dark")
        body.setAttribute("data-theme", "dark");
        for (let i=0; i<decor.length;i++){
            decor[i].src="images/soundwavelight.png"}
    }
})

toggle.addEventListener("keydown", (e)=>{
    if (e.key==="Enter" || e.key===" "){
        if(body.getAttribute("data-theme") === "dark"){
        localStorage.setItem("theme", "light")
        body.removeAttribute("data-theme");
        for (let i=0; i<decor.length;i++){
            decor[i].src="images/Sound-Waves-PNG-Photo-4025058712.png"}
    }
    else{
        localStorage.setItem("theme", "dark")
        body.setAttribute("data-theme", "dark");
        for (let i=0; i<decor.length;i++){
            decor[i].src="images/soundwavelight.png"}
    }
    }
    
})

