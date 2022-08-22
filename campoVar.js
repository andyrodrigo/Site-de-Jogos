//Variáveis-----------------------------------

const telaInicial = document.getElementById("telaInicial")
const telaDeJogo = document.getElementById("telaDeJogo")

const btnIniciante = document.getElementById("btnIniciante")
const btnIntermediario = document.getElementById("btnIntermediario")
const btnAvancado = document.getElementById("btnAvancado")
const btnEspecialista = document.getElementById("btnEspecialista")

var lines = 5;
var colunms = 5;

var espaco; //Variável que armazena todos os blocos de minas
var campo; //Matriz Auxiliar com os dados das minas 
// 0 = Não tem mina
// 1 = Tem uma mina

//teste = document.getElementById("teste")

//Entradas da Matriz:


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