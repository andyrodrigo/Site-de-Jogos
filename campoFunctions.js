// Funções de controle do Jogo------------------------------------------------------------

//Cria o campo de acordo com a configuração escolhida
function iniciarJogo( nivel ){

    primeiraJogada = true;
    
    switch(nivel){
        case 1:
            linhas = 8
            colunas = 10
            minas = 10
            break;
        case 2:
            linhas = 14
            colunas = 18
            minas = 40
            break;
        case 3:
            linhas = 20
            colunas = 24
            minas = 99
            break;
        case 4:
            linhas = 8
            colunas = 10
            minas = 10
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
            espaco[i][j].classList.add("espaco")
            espaco[i][j].addEventListener('mouseup', acaoDoMouse )
            espaco[i][j].classList.add("coberto")
            //campo[i][j] =  Math.floor(Math.random() * 2)
            
        }
    }
    geradorDeCampoMinado( campo )
    //Insere o campo na tela
    telaDeJogo.appendChild(tabela)
       
}

function geradorDeCampoMinado( campo){
    for( i=1 ; i <= linhas ; i++){
        for( j=1 ; j <= colunas ; j++){
            campo[i][j] = 0
            //console.log(campo[i][j])
        }
        //console.log("/n")
    }

    for( i=0 ; i < minas ; i++){
        l = Math.floor(Math.random() * linhas) + 1
        c = Math.floor(Math.random() * colunas) + 1
        campo[l][c] = 1;
    }

    for( i=1 ; i <= linhas ; i++){
        for( j=1 ; j <= colunas ; j++){
            //campo[i][j] = 0
           // console.log( campo[i][j])
        }
        //console.log("/n")
    }
}