for (let i=0; i<options.length;i++){
    let option = options[i];
    option.addEventListener("click", (e)=>{
        if (answerKey===options[i].id){
            // gotIt=true;
            alert("You got it!");
            options.forEach(opt => {
                console.log(opt.style.pointerEvents)
                opt.style.pointerEvents = "none";
            });
        } else{
            alert("Keep trying!")
        }
    })
    option.addEventListener("keydown", (e)=>{
        
    })
}