// Funções de controle do Jogo------------------------------------------------------------

//Cria o campo de acordo com a configuração escolhida
function iniciarJogo( nivel ){

    primeiraJogada = true;

    switch(nivel){
        case 1:
            linhas = 8
            colunas = 10
            minas = 2
            classeDoEspaco = "espacoGrande"
            classeDaImagem = "imagemEspacoGrande"
            indicadorDeNivel.innerText = "Iniciante"
            break;
        case 2:
            linhas = 14
            colunas = 18
            minas = 40
            classeDoEspaco = "espacoMedio"
            classeDaImagem = "imagemEspacoMedio"
            indicadorDeNivel.innerText = "Intermediário"
            break;
        case 3:
            linhas = 20
            colunas = 24
            minas = 99
            classeDoEspaco = "espacoPequeno"
            classeDaImagem = "imagemEspacoPequeno"
            indicadorDeNivel.innerText = "Avançado"
            break;
        case 4:
            linhas = 25
            colunas = 30
            minas = 200
            classeDoEspaco = "espacoPequeno"
            classeDaImagem = "imagemEspacoPequeno"
            indicadorDeNivel.innerText = "Especialista"
            break;
        default:
            alert("erro")
            console.log("erro")
    }
    //Ajusta Indicadores
    bandeiras = 0
    quantDeBandeirasAtuais.innerHTML = bandeiras.toString()
    quantDeBandeirasTotais.innerHTML = "/" + minas.toString()
    quantDeBandeirasAtuais.classList.remove( "vermelho" )
    quantDeBandeirasAtuais.classList.add( "branco" )
    btnPause.classList.remove( "azul" )
    btnPause.classList.add( "branco" ) 
    mostrador[0].style.display = "flex"
    mostrador[1].style.display = "flex"
    mostrador[2].style.display = "flex"
    mostrador[3].style.display = "flex"
    //troca de tela
    telaInicial.style.display = 'none'
    telaDeJogo.style.display = 'flex'
    titulo.style.display = 'none'
    indicadores.style.display = 'flex' 
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
    //Condições de Vitoria e Derrota
    espacos_abertos = 0 
    espacos_livres = (linhas * colunas) - minas
    fim_de_jogo =  false
    //Insere o campo na tela
    telaDeJogo.appendChild(tabela)
    //Inicia o temporizador
    pausa = false
    resetarTempo()
    iniciarTempo()
}

function geradorDeCampoMinado( campo ){

    let colocadorDeminas = 0

    while( colocadorDeminas < minas ){
        let l = Math.floor(Math.random() * linhas) + 1
        let c = Math.floor(Math.random() * colunas) + 1
 
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
        }
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

// Iniciar Temporizador
function iniciarTempo(){
    pararTempo() //para o intervalo de tempo
    cronometro = setInterval( () => {temporizar();} , 1000 ) // ajuste a cada 1 segundo
}

function temporizar(){
    if ( (segundos += 1) == 60) {
        segundos = 0;
        minutos++;
      }
      if (minutos == 60) {
        minutos = 0;
        horas++;
      }

      let tempoTotal = ajustarTempo(horas) + ":" + ajustarTempo(minutos) + ":" + ajustarTempo(segundos)
      tempo.innerHTML = tempoTotal;

}

//Retorna o tempo com 2 digitos sempre
function ajustarTempo( entrada ){
    //se entrada maior ou igual que 10: retorna ela mesma, se não acrescenta um zero na frente
    return entrada >= 10 ? entrada : `0${entrada}`
}

function resetarTempo(){
    horas = 0
    minutos = 0
    segundos = 0
    let tempoTotal = ajustarTempo(horas) + ":" + ajustarTempo(minutos) + ":" + ajustarTempo(segundos)
    tempo.innerHTML = tempoTotal;
}

function pararTempo(){
    clearInterval(cronometro)
}

function pausar(){
    if( pausa === false ){
        pausa = true
        pararTempo()
        btnPause.innerHTML = "CONTINUAR"
        btnPause.classList.remove( "branco" )
        btnPause.classList.add( "azul" )
        telaDeJogo.style.display = 'none'
    }else{
        pausa = false
        iniciarTempo()
        btnPause.innerHTML = "PAUSAR"
        btnPause.classList.remove( "azul" )
        btnPause.classList.add( "branco" )
        telaDeJogo.style.display = 'flex'
    }
}

function sair(){
    //troca de tela
    telaInicial.style.display = 'flex'
    telaDeJogo.style.display = 'none'
    titulo.style.display = 'flex'
    indicadores.style.display = 'none'
    vitoria.style.display = "none"
    //Limpa jogo anterior
    pararTempo()
    telaDeJogo.innerHTML = ""
}

function mostrarInstrucoes(){
    alert(espacos_abertos)
}