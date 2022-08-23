//Funções----------------------------------------------------------------------------------------------------------

function acaoDoMouse(e) {

    let linha = e.currentTarget.parentNode.rowIndex + 1
    let coluna = e.currentTarget.cellIndex + 1
    
    if (typeof e === 'object') {
        switch (e.button) {
            case 0: //Verifica se é Bomba ou não
                if(primeiraJogada){
                    abreJogoInicial(linha, coluna)
                }else{
                    verifica(linha, coluna)
                } 
            break;
            case 1: //Não sei ainda o que farei
                alert("meio")
            break;
            case 2: //Coloca a bandeira
                inserirBandeira(linha, coluna)     
            break;
            default:
                alert("erro")
        }
    }
}

function verifica(linha, coluna){
    //Se não tiver uma bandeira protegendo este espaço...
    if( !espaco[linha][coluna].classList.contains("bandeira") && !espaco[linha][coluna].classList.contains("verificado") ){
        //marca como verificado
        espaco[linha][coluna].classList.add("verificado")

        if(campo[linha][coluna] == false){//Não tem MINA
            let minasAoRedor = adjacentes(linha, coluna)
            
            if(minasAoRedor == 0){
                abrirAdjacentes(linha, coluna)
            }else{
                espaco[linha][coluna].innerText = minasAoRedor
            }
            espaco[linha][coluna].classList.add( colorirNumero(minasAoRedor) )
        } else {//Tem MINA
            explodir( linha, coluna )
        }

    }
}

function adjacentes(linha, coluna){
    let contador = 0
    let aux1 = linha - 1
    let aux2 = coluna - 1
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(aux1 < 1 || aux2 < 1 || aux1 > linhas || aux2 > colunas || aux1 == linha && aux2 == coluna){
                //não analisa (fora da matriz)
            }else{
                if(campo[aux1][aux2] == true){
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

function abrirAdjacentes(linha, coluna){
    let aux1 = linha - 1
    let aux2 = coluna - 1
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            //console.log("tentativa: " + i +":"+ j)
            if(aux1 < 1 || aux2 < 1 || aux1 > linhas || aux2 > colunas || aux1 == linha && aux2 == coluna ){
                //não analisa (fora da matriz) e nem o Próprio espaço
            }else{
                if( !espaco[aux1][aux2].classList.contains("bandeira") && !espaco[aux1][aux2].classList.contains("verificado")){
                    abrirEspaco(aux1, aux2)
                } 
            }
            aux2++
        }
        aux2 = aux2 - 3
        aux1++
    }
    //return
}

function abrirEspaco(linha, coluna){
    //console.log("campo "+linha +":"+coluna)
    //marca como verificado
    espaco[linha][coluna].classList.add("verificado")
    let minasAoRedor = adjacentes(linha, coluna)
    //espaco[linha][coluna].innerText = minasAoRedor
    if(minasAoRedor == 0){
        abrirAdjacentes(linha, coluna)
    }else{
        espaco[linha][coluna].innerText = minasAoRedor
    }
    espaco[linha][coluna].classList.add( colorirNumero(minasAoRedor) )
}

function colorirNumero(minasAoRedor){
    switch(minasAoRedor){
        case 0:
            return
        case 1:
            return "azul"
        case 2:
            return "verde"
        case 3:
            return "vermelho"
        case 4:
            return "azulEscuro"
        case 5:
            return "amarelo"
        case 6:
            return "amarelo"
        case 7:
            return "amarelo"
        case 8:
            return "amarelo"
    }
}

function inserirBandeira( linha, coluna ){
    //se não estiver já aberto
    if( !espaco[linha][coluna].classList.contains("verificado") ){
        //se já tiver bandeira
        if( espaco[linha][coluna].classList.contains("bandeira") ){
            espaco[linha][coluna].classList.remove("bandeira")
            espaco[linha][coluna].innerText = ""  
        }else{//se não tiver uma bandeira
            let bandeira = document.createElement("IMG");
            bandeira.src = "imagens/bandeira.png"
            bandeira.classList.add( classeDaImagem ) 
            espaco[linha][coluna].appendChild( bandeira )
            espaco[linha][coluna].classList.add("bandeira")   
        } 
    }
}

function explodir( linha, coluna ){
    espaco[linha][coluna].innerText = ""
    espaco[linha][coluna].style.backgroundColor = "red"
    let mina = document.createElement("IMG");
    mina.src = "imagens/mina.png"
    mina.classList.add( classeDaImagem ) 
    espaco[linha][coluna].appendChild( mina )
}





