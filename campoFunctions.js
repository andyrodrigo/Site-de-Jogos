// Funções de controle do Jogo------------------------------------------------------------

//Cria o campo de acordo com a configuração escolhida
function iniciarJogo( nivel ){

    primeiraJogada = true;

    switch(nivel){
        case 1:
            linhas = 8
            colunas = 10
            minas = 10
            classeDoEspaco = "espacoGrande"
            classeDaImagem = "imagemEspacoGrande"
            break;
        case 2:
            linhas = 14
            colunas = 18
            minas = 40
            classeDoEspaco = "espacoMedio"
            classeDaImagem = "imagemEspacoMedio"
            break;
        case 3:
            linhas = 20
            colunas = 24
            minas = 99
            classeDoEspaco = "espacoPequeno"
            classeDaImagem = "imagemEspacoPequeno"
            break;
        case 4:
            linhas = 25
            colunas = 30
            minas = 200
            classeDoEspaco = "espacoPequeno"
            classeDaImagem = "imagemEspacoPequeno"
            break;
        default:
            alert("erro")
            console.log("erro")
    }
    //troca de tela
    telaInicial.style.display = 'none'
    telaDeJogo.style.display = 'flex'
    //Cria a grade do campo minado
    const tabela = document.createElement("TABLE");
    // prepara as variaveis para receber os elementos
    espaco = new Array(linhas)
    campo = new Array(linhas)

    for( i=1 ; i <= linhas ; i++){
        //Cria a linha e adiciona a tabela
        espaco[i] = document.createElement("TR");
        tabela.appendChild( espaco[i] )
        //Matriz campo com o mesmo tamanho
        campo[i] = new Array(colunas)
        
 
        //Cria cada elemento do campo e insere na tabela
        for( j=1 ; j <= colunas ; j++){
            espaco[i][j] = document.createElement("TD");
            //espaco[i][j].innerHTML = "V"
            espaco[i].appendChild( espaco[i][j] )
            espaco[i][j].classList.add( classeDoEspaco )
            espaco[i][j].addEventListener('mouseup', acaoDoMouse )
            espaco[i][j].classList.add("coberto")
            campo[i][j] =  null
            
        }
    }
    //geradorDeCampoMinado( campo )
    //Insere o campo na tela
    telaDeJogo.appendChild(tabela)
       
}

function geradorDeCampoMinado( campo ){

    let colocadorDeminas = 0

    while( colocadorDeminas < minas ){
        let l = Math.floor(Math.random() * linhas) + 1
        let c = Math.floor(Math.random() * colunas) + 1
        //console.log("linha: " + l + ", coluna: " + c)
        if( campo[l][c] == true || campo[l][c] == false){
            //Já foi definido
        }else{
            campo[l][c] = true;
            colocadorDeminas++
        }
    }

    for( let i=1 ; i <= linhas ; i++){
        for( let j=1 ; j <= colunas ; j++){
            if( campo[i][j] == true || campo[i][j] == false){
                //Já foi definido
            }else{
                campo[i][j] = false
            }
            //console.log(campo[i][j])
        }
        //console.log("/n")
    }

}

function abreJogoInicial(linha, coluna){
    //Se não tiver uma bandeira protegendo este espaço...
    if( !espaco[linha][coluna].classList.contains("bandeira") ){

        primeiraJogada = false

        //Garante que a primeira verificada tem zero minas ao redor
        let aux1 = linha - 1
        let aux2 = coluna - 1
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(aux1 < 1 || aux2 < 1 || aux1 > linhas || aux2 > colunas ){
                    //não analisa (fora da matriz)
                }else{
                    campo[aux1][aux2] = false
                }
                aux2++
            }
            aux2 = aux2 - 3
            aux1++
        }
        //gera o restante do campo minado
        geradorDeCampoMinado( campo )
        //abre o primeiro espaço
        verifica(linha, coluna)
    }
}