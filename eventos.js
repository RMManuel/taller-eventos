document.addEventListener("DOMContentLoaded", ()=>{
    let container=document.getElementById("div");
    container.addEventListener("click", function(){
        alert("Hola! Soy un div");
    })
    let btn=document.getElementById("btn")
    btn.addEventListener("click", function(e){
        alert("Hola!")
        e.stopPropagation()
    })
})