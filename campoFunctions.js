
function iniciarJogo(){
    telaInicial.style.display = 'none'
    telaDeJogo.style.display = 'flex'

    const tabela = document.createElement("TABLE");
    for( i=1 ; i <= lines ; i++){
        espaco[i] = document.createElement("TR");
        tabela.appendChild(espaco[i])
        for( j=1 ; j <= colunms ; j++){
            espaco[i][j] = document.createElement("TD");
            espaco[i][j].innerHTML = "V"
        }
    }
    telaDeJogo.appendChild(tabela)
    
    
}