let colors = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
let getBtn = document.getElementById("btn")
let colo = document.getElementById("colo")
let finalColor = "#"


getBtn.addEventListener("click",function(){
    finalColor="#"
    for(let i = 0 ; i < 6 ; i++){
        finalColor+=colors[getRandNum()]
    }
    colo.innerHTML="Background Color :  <span id='co'>"+finalColor+"</span>"
    document.body.style.backgroundColor = finalColor
    document.getElementById("co").style.color = "#2e7ff8"

})

function getRandNum(){
    let x = Math.floor(Math.random() * colors.length)
    return x
}