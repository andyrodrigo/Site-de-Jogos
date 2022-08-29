//Variáveis-----------------------------------

const telaInicial = document.getElementById("telaInicial")
const telaDeJogo = document.getElementById("telaDeJogo")

const titulo = document.getElementById("titulo")
const indicadores = document.getElementById("indicadores")

const indicadorDeNivel = document.getElementById("indicadorDeNivel")
const tempo = document.getElementById("tempo")
const quantDeBandeirasAtuais = document.getElementById("quantDeBandeirasAtuais")
const quantDeBandeirasTotais = document.getElementById("quantDeBandeirasTotais")
const btnPause = document.getElementById("btnPause")
const btnInstrucoes = document.getElementById("btnInstrucoes")
const btnSair = document.getElementById("btnSair")

const btnIniciante = document.getElementById("btnIniciante")
const btnIntermediario = document.getElementById("btnIntermediario")
const btnAvancado = document.getElementById("btnAvancado")
const btnEspecialista = document.getElementById("btnEspecialista")

var linhas = 12;
var colunas = 12;
var minas = 10;
var bandeiras = 0
var primeiraJogada = true;
var classeDoEspaco = "espacoMedio";
var classeDaImagem = "imagemEspacoMedio";

let horas = 0
let minutos = 0
let segundos = 0
let cronometro = 0
let pausa = false

var espaco; //Variável que armazena todos os blocos de minas
var campo; //Matriz Auxiliar com os dados das minas 

//-------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------
function escutadores(){

     btnIniciante.addEventListener( 'click' , function(){iniciarJogo(1)} )
     btnIntermediario.addEventListener( 'click' , function(){iniciarJogo(2)} )
     btnAvancado.addEventListener( 'click' , function(){iniciarJogo(3)} )
     btnEspecialista.addEventListener( 'click' , function(){iniciarJogo(4)} )
     btnPause.addEventListener('click', pausar)
     btnInstrucoes.addEventListener('click', mostrarInstrucoes)
     btnSair.addEventListener('click', sair)
 
 }
 
 //-------------------------------------------------------------------------------------------------------
 //inicialização
 window.addEventListener("load", escutadores)