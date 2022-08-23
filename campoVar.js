//Variáveis-----------------------------------

const telaInicial = document.getElementById("telaInicial")
const telaDeJogo = document.getElementById("telaDeJogo")

const btnIniciante = document.getElementById("btnIniciante")
const btnIntermediario = document.getElementById("btnIntermediario")
const btnAvancado = document.getElementById("btnAvancado")
const btnEspecialista = document.getElementById("btnEspecialista")

var lines = 12;
var colunms = 12;

var espaco; //Variável que armazena todos os blocos de minas
var campo; //Matriz Auxiliar com os dados das minas 
// 0 = Não tem mina
// 1 = Tem uma mina

//teste = document.getElementById("teste")

//-------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------
function escutadores(){

     btnIniciante.addEventListener( 'click' , iniciarJogo )
     btnIntermediario.addEventListener( 'click' , iniciarJogo )
     btnAvancado.addEventListener( 'click' , iniciarJogo )
     btnEspecialista.addEventListener( 'click' , iniciarJogo )
 
 }
 
 
 //-------------------------------------------------------------------------------------------------------
 //inicialização
 window.addEventListener("load", escutadores)