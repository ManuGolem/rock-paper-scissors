const divJuego=document.querySelector(".container")
const botones=divJuego.querySelectorAll("div");
const game=document.querySelector(".game")
document.addEventListener("DOMContentLoaded",()=>{
    botones.forEach(boton=>{
        boton.addEventListener("click",(e)=>{
            startGame(boton)
        })
    })
})
function startGame(elemento){
    const nuevaDivJuego= document.createElement("div");
    const aElegir= document.createElement("div");
    const upick=document.createElement("h1");
    const thpick=document.createElement("h1");
    const clase=elemento.children[0].alt;
    elemento.classList.add(clase)
    aElegir.classList.add("elemento-th")
    const eleccion=Math.floor(Math.random()*3);
    upick.textContent="YOU PICKED"
    thpick.textContent="THE HOUSE PICKED"
    nuevaDivJuego.classList.add("start-game");
    nuevaDivJuego.appendChild(upick);
    nuevaDivJuego.appendChild(thpick);
    nuevaDivJuego.appendChild(elemento);
    nuevaDivJuego.appendChild(aElegir)
    game.replaceChild(nuevaDivJuego,divJuego)
    setTimeout(() => {
        if(eleccion==0){
            //Rock
            const img = document.createElement("img");
            img.src="images/icon-rock.svg";
            aElegir.appendChild(img);
            aElegir.classList.add("rock")
            aElegir.classList.remove("elemento-th")
        }else if (eleccion==1){
            //Paper
            const img = document.createElement("img");
            img.src="images/icon-paper.svg";
            aElegir.appendChild(img);
            aElegir.classList.add("paper")
            aElegir.classList.remove("elemento-th")
        }else{
            //Scissor
            const img = document.createElement("img");
            img.src="images/icon-scissors.svg";
            aElegir.appendChild(img);
            aElegir.classList.add("scissors")
            aElegir.classList.remove("elemento-th")
        }
    }, 1000);
}
    