//Variáveis

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
//Funções

function adjacentes(linha, coluna){
    let contador = 0
    let aux1 = linha - 1
    let aux2 = coluna - 1
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            if(aux1 < 0 || aux2 < 0 || aux1 > 4 || aux2 > 4){
                //não analisa (fora da matriz)
            }else{
                if(campo[aux1][aux2] == 1){
                    contador++
                }
            }
            aux2++
        }
        aux2 = aux2 - 3
        aux1++
    }
    return contador
}

function verifica(linha, coluna){
    //alert(linha + " e " + coluna)
    if(campo[linha-1][coluna-1] == 0){
        //alert("livre")
        esp[linha][coluna].innerText = adjacentes(linha-1, coluna-1)
    } else {
        alert("mina")
    }
}


//-------------------------------------------------------------------------------------------------------
function escutadores(){
    teste.addEventListener('click', verifica )
    esp[1][1].addEventListener('click', function(){verifica(1,1)})
    esp[1][2].addEventListener('click', function(){verifica(1,2)})
    esp[1][3].addEventListener('click', function(){verifica(1,3)})
    esp[1][4].addEventListener('click', function(){verifica(1,4)})
    esp[1][5].addEventListener('click', function(){verifica(1,5)})
    esp[2][1].addEventListener('click', function(){verifica(2,1)})
    esp[2][2].addEventListener('click', function(){verifica(2,2)})
    esp[2][3].addEventListener('click', function(){verifica(2,3)})
    esp[2][4].addEventListener('click', function(){verifica(2,4)})
    esp[2][5].addEventListener('click', function(){verifica(2,5)})
    esp[3][1].addEventListener('click', function(){verifica(3,1)})
    esp[3][2].addEventListener('click', function(){verifica(3,2)})
    esp[3][3].addEventListener('click', function(){verifica(3,3)})
    esp[3][4].addEventListener('click', function(){verifica(3,4)})
    esp[3][5].addEventListener('click', function(){verifica(3,5)})
    esp[4][1].addEventListener('click', function(){verifica(4,1)})
    esp[4][2].addEventListener('click', function(){verifica(4,2)})
    esp[4][3].addEventListener('click', function(){verifica(4,3)})
    esp[4][4].addEventListener('click', function(){verifica(4,4)})
    esp[4][5].addEventListener('click', function(){verifica(4,5)})
    esp[5][1].addEventListener('click', function(){verifica(5,1)})
    esp[5][2].addEventListener('click', function(){verifica(5,2)})
    esp[5][3].addEventListener('click', function(){verifica(5,3)})
    esp[5][4].addEventListener('click', function(){verifica(5,4)})
    esp[5][5].addEventListener('click', function(){verifica(5,5)})
}


//-------------------------------------------------------------------------------------------------------
//inicialização
window.addEventListener("load", escutadores)