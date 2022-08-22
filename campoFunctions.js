// Funções de controle do Jogo------------------------------------------------------------

//Cria o campo de acordo com a configuração escolhida
function iniciarJogo(){
    //troca de tela
    telaInicial.style.display = 'none'
    telaDeJogo.style.display = 'flex'
    //Cria a grade do campo minado
    const tabela = document.createElement("TABLE");
    // prepara as variaveis para receber os elementos
    espaco = new Array(lines)
    campo = new Array(lines)

    for( i=1 ; i <= lines ; i++){
        //Cria a linha e adiciona a tabela
        espaco[i] = document.createElement("TR");
        tabela.appendChild( espaco[i] )
        //Matriz campo com o mesmo tamanho
        campo[i] = new Array(colunms)
        //Cria cada elemento do campo e insere na tabela
        for( j=1 ; j <= colunms ; j++){
            espaco[i][j] = document.createElement("TD");
            espaco[i][j].innerHTML = "V"
            espaco[i].appendChild( espaco[i][j] )
            espaco[i][j].classList.add("espaco")
            espaco[i][j].addEventListener('mouseup', logMouseButton)
            campo[i][j] =  Math.floor(Math.random() * 2)
            
        }
    }
    //Insere o campo na tela
    telaDeJogo.appendChild(tabela)
       
}