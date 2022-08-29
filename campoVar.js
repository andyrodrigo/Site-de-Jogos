//Variáveis-----------------------------------

const telaInicial = document.getElementById("telaInicial")
const telaDeJogo = document.getElementById("telaDeJogo")

const titulo = document.getElementById("titulo")
const indicadores = document.getElementById("indicadores")

const indicadorDeNivel = document.getElementById("indicadorDeNivel")
const quantDeBandeirasAtuais = document.getElementById("quantDeBandeirasAtuais")
const quantDeBandeirasTotais = document.getElementById("quantDeBandeirasTotais")
const instrucoes = document.getElementById("instrucoes")
const sair = document.getElementById("sair")

const btnIniciante = document.getElementById("btnIniciante")
const btnIntermediario = document.getElementById("btnIntermediario")
const btnAvancado = document.getElementById("btnAvancado")
const btnEspecialista = document.getElementById("btnEspecialista")

var linhas = 12;
var colunas = 12;
var minas = 10;
var primeiraJogada = true;
var classeDoEspaco = "espacoMedio";
var classeDaImagem = "imagemEspacoMedio";

var espaco; //Variável que armazena todos os blocos de minas
var campo; //Matriz Auxiliar com os dados das minas 

//teste = document.getElementById("teste")

//-------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------
function escutadores(){

     btnIniciante.addEventListener( 'click' , function(){iniciarJogo(1)} )
     btnIntermediario.addEventListener( 'click' , function(){iniciarJogo(2)} )
     btnAvancado.addEventListener( 'click' , function(){iniciarJogo(3)} )
     btnEspecialista.addEventListener( 'click' , function(){iniciarJogo(4)} )
 
 }
 
 //-------------------------------------------------------------------------------------------------------
 //inicialização
 window.addEventListener("load", escutadores)