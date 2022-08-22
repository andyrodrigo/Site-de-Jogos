//Variáveis-----------------------------------

const telaInicial = document.getElementById("telaInicial")
const telaDeJogo = document.getElementById("telaDeJogo")

const btnIniciante = document.getElementById("btnIniciante")
const btnIntermediario = document.getElementById("btnIntermediario")
const btnAvancado = document.getElementById("btnAvancado")
const btnEspecialista = document.getElementById("btnEspecialista")

var lines = 10;
var colunms = 10;

const espaco;


const campo = [ [0,0,1,0,0],
                [1,0,0,0,1],
                [0,1,0,1,0],
                [1,1,0,1,0],
                [0,1,1,0,1] ];
// 0 = Não tem mina
// 1 = Tem uma mina

teste = document.getElementById("teste")

//Entradas da Matriz:
let esp = new Array(5)
esp[1] = new Array(5)
esp[2] = new Array(5)
esp[3] = new Array(5)
esp[4] = new Array(5)
esp[5] = new Array(5)

esp[1][1] = document.getElementById("1x1")
esp[1][2] = document.getElementById("1x2")
esp[1][3] = document.getElementById("1x3")
esp[1][4] = document.getElementById("1x4")
esp[1][5] = document.getElementById("1x5")

esp[2][1] = document.getElementById("2x1")
esp[2][2] = document.getElementById("2x2")
esp[2][3] = document.getElementById("2x3")
esp[2][4] = document.getElementById("2x4")
esp[2][5] = document.getElementById("2x5")

esp[3][1] = document.getElementById("3x1")
esp[3][2] = document.getElementById("3x2")
esp[3][3] = document.getElementById("3x3")
esp[3][4] = document.getElementById("3x4")
esp[3][5] = document.getElementById("3x5")

esp[4][1] = document.getElementById("4x1")
esp[4][2] = document.getElementById("4x2")
esp[4][3] = document.getElementById("4x3")
esp[4][4] = document.getElementById("4x4")
esp[4][5] = document.getElementById("4x5")

esp[5][1] = document.getElementById("5x1")
esp[5][2] = document.getElementById("5x2")
esp[5][3] = document.getElementById("5x3")
esp[5][4] = document.getElementById("5x4")
esp[5][5] = document.getElementById("5x5")

//-------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------
function escutadores(){
    // window.addEventListener("contextmenu", e => e.preventDefault());
    // teste.addEventListener('click', indice )
    /* esp[1][1].addEventListener('mouseup', logMouseButton)
     esp[1][2].addEventListener('mouseup', logMouseButton)
     esp[1][3].addEventListener('mouseup', logMouseButton)
     esp[1][4].addEventListener('mouseup', logMouseButton)
     esp[1][5].addEventListener('mouseup', logMouseButton)
     esp[2][1].addEventListener('mouseup', logMouseButton)
     esp[2][2].addEventListener('mouseup', logMouseButton)
     esp[2][3].addEventListener('mouseup', logMouseButton)
     esp[2][4].addEventListener('mouseup', logMouseButton)
     esp[2][5].addEventListener('mouseup', logMouseButton)
     esp[3][1].addEventListener('mouseup', logMouseButton)
     esp[3][2].addEventListener('mouseup', logMouseButton)
     esp[3][3].addEventListener('mouseup', logMouseButton)
     esp[3][4].addEventListener('mouseup', logMouseButton)
     esp[3][5].addEventListener('mouseup', logMouseButton)
     esp[4][1].addEventListener('mouseup', logMouseButton)
     esp[4][2].addEventListener('mouseup', logMouseButton)
     esp[4][3].addEventListener('mouseup', logMouseButton)
     esp[4][4].addEventListener('mouseup', logMouseButton)
     esp[4][5].addEventListener('mouseup', logMouseButton)
     esp[5][1].addEventListener('mouseup', logMouseButton)
     esp[5][2].addEventListener('mouseup', logMouseButton)
     esp[5][3].addEventListener('mouseup', logMouseButton)
     esp[5][4].addEventListener('mouseup', logMouseButton)
     esp[5][5].addEventListener('mouseup', logMouseButton)*/

     btnIniciante.addEventListener( 'click' , iniciarJogo )
     btnIntermediario.addEventListener( 'click' , iniciarJogo )
     btnAvancado.addEventListener( 'click' , iniciarJogo )
     btnEspecialista.addEventListener( 'click' , iniciarJogo )
 
    // esp[1][1].addEventListener('contextmenu', function(){bandeira(1,1,Event)})
 }
 
 
 //-------------------------------------------------------------------------------------------------------
 //inicialização
 window.addEventListener("load", escutadores)