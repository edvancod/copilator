
function mudarH1() {
    const novaH1 = document.querySelector("h1");
    novaH1.textContent = "Olá Mundo";
}

function verificarTime() {
    let time = prompt("Digite seu time");
    if (time === "mengo") {
        alert("Time do coração Flamengo");
    } else {
        alert("Outro time não importa");
        window.location.href = "http://www.google.com"
    }
        
}

document.querySelector("img").addEventListener("click",verificarTime);