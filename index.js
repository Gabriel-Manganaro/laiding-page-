var leo = window.document.getElementById("leo")
var sam = window.document.getElementById("sam")
var bru = window.document.getElementById("bru")
var setaEsquerda = window.document.getElementById("setaEsquerda")
var setaDireita = window.document.getElementById("setaDireita")

function rolarParaDireita(){
    leo.style = "display:none"
    bru.style = "display:flex"
    setaEsquerda.style = "display:flex"
    setaDireita.style = "display:none"

}
function rolarParaEsquerda(){
    leo.style = "display:flex"
    bru.style = "display:none"
    setaEsquerda.style = "display:nome"
    setaDireita.style = "display:flex"
}
