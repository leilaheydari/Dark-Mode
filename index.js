
let btn = document.getElementById("btn");
btn.onclick = () => {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        btn.src= "images/night-mode (1).png"
    }
    else{
        btn.src= "images/night-mode.png"
    }
}

