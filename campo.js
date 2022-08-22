//Funções----------------------------------------------------------------------------------------------------------

function adjacentes(linha, coluna){
    let contador = 0
    let aux1 = linha - 1
    let aux2 = coluna - 1
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            if(aux1 < 0 || aux2 < 0 || aux1 > 4 || aux2 > 4){
                //não analisa (fora da matriz)
            }else{
                if(campo[aux1 + 1][aux2 + 1] == 1){
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
    if(campo[linha + 1][coluna + 1] == 0){
        //alert("livre")
        espaco[linha + 1][coluna + 1].innerText = adjacentes(linha, coluna)
    } else {
        alert("mina")
    }
}

function logMouseButton(e) {
    let linha = e.currentTarget.parentNode.rowIndex 
    let coluna = e.currentTarget.cellIndex
    if (typeof e === 'object') {
      switch (e.button) {
        case 0: //Verifica se é Bomba ou não
            verifica(linha, coluna)
          break;
        case 1: //Não sei ainda o que farei
            alert("meio")
          break;
        case 2: //Coloca a bandeira
            espaco[linha + 1][coluna + 1].innerText = "B"
            //alert("direita")       
          break;
        default:
            alert("erro")
      }
    }
  }





