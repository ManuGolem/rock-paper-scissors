const game = document.querySelector(".game");
const dialog=document.querySelector("dialog")
const abrirModal=document.querySelector("#abrir-modal")
const score= document.querySelector(".puntuacion")
document.addEventListener("DOMContentLoaded", () => {
	game.appendChild(crearJuego());
	abrirModal.addEventListener("click",()=>{
		dialog.showModal();
	})
});
function startGame(elemento) {
	if (game.children[0].classList.contains("container")) {
		const nuevaDivJuego = document.createElement("div");
		const aElegir = document.createElement("div");
		const upick = document.createElement("h1");
		const thpick = document.createElement("h1");
		const clase = elemento.children[0].alt;
		elemento.classList.add(clase);
		aElegir.classList.add("elemento-th");
		const eleccion = Math.floor(Math.random() * 3);
		upick.textContent = "YOU PICKED";
		thpick.textContent = "THE HOUSE PICKED";
		nuevaDivJuego.classList.add("start-game");
		nuevaDivJuego.appendChild(upick);
		nuevaDivJuego.appendChild(thpick);
		nuevaDivJuego.appendChild(elemento);
		nuevaDivJuego.appendChild(aElegir);
		const divJuego=document.querySelector(".container")
		game.replaceChild(nuevaDivJuego, divJuego);
		setTimeout(() => {
			if (eleccion == 0) {
				//Rock
				const img = document.createElement("img");
				img.src = "images/icon-rock.svg";
				aElegir.appendChild(img);
				aElegir.classList.add("rock");
				aElegir.classList.remove("elemento-th");
			} else if (eleccion == 1) {
				//Paper
				const img = document.createElement("img");
				img.src = "images/icon-paper.svg";
				aElegir.appendChild(img);
				aElegir.classList.add("paper");
				aElegir.classList.remove("elemento-th");
			} else {
				//Scissor
				const img = document.createElement("img");
				img.src = "images/icon-scissors.svg";
				aElegir.appendChild(img);
				aElegir.classList.add("scissors");
				aElegir.classList.remove("elemento-th");
			}
			const divResultado = document.createElement("div");
			const tituloResultado = document.createElement("h1");
			if (aElegir.classList.contains(clase)) {
				//Empate
				tituloResultado.textContent = "DRAW";
			} else {
				const condicionesVictoria = { paper: 0, scissors: 1, rock: 2 };
				if (eleccion === condicionesVictoria[clase]) {
					tituloResultado.textContent = "YOU WIN";
					elemento.classList.add("fondo-wave");
					let puntaje=Number(score.textContent)
					puntaje++;
					score.textContent=puntaje;
				} else {
					tituloResultado.textContent = "YOU LOSE";
					aElegir.classList.add("fondo-wave")
					let puntaje=Number(score.textContent);
					puntaje--;
					score.textContent=puntaje;
				}
			}
			const botonAgain = document.createElement("button");
			botonAgain.textContent = "PLAY AGAIN";
			botonAgain.addEventListener("click", () => {
				const divCopia = crearJuego();
				game.replaceChild(divCopia, nuevaDivJuego);
			});
			divResultado.classList.add("resultado");
			divResultado.appendChild(tituloResultado);
			divResultado.appendChild(botonAgain);
			nuevaDivJuego.classList.add("end-game");
			nuevaDivJuego.appendChild(divResultado);
		}, 1000);
	}
}
function crearJuego() {
	const divJuego = document.createElement("div");
	divJuego.classList.add("container");
	divJuego.innerHTML = `			  <div>
          								<img alt="paper" src="images/icon-paper.svg">
        							  </div>
        							  <div>
         								<img alt="scissors" src="images/icon-scissors.svg">
        							  </div>
        							  <div>
         								<img alt="rock" src="images/icon-rock.svg">
       								  </div>`;
	const botones = divJuego.querySelectorAll("div");
	botones.forEach(boton=>{
		boton.addEventListener("click",()=>{
			startGame(boton)
		})
	})
	return divJuego;
}
