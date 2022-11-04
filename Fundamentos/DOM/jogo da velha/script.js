const combinacoes =[
    [0,1,2], // linha 1
    [3,4,5], // linha 2
    [6,7,8], // linha 3
    [0,3,6], // coluna 1
    [1,4,7], // coluna 2
    [2,5,8], // coluna 3
    [0,4,8], // diagonal esqueda direita
    [2,4,6] // diagonal direita esquerda
  ]


 //REQUISITO 2 
//  1. Crie a função Jogar que deve receber o evento do click. Deve guardar o alvo clicado
// 2. Checar de qual jogador é o turno. Alterar o texto com o id player para o texto do jogador da vez ( X ou O ). Alterar o texto do alvo clicado para o texto do jogador da vez ( X ou O ). Alterar o turno dos jogadores

//COMO FAZER???? ( é a primeira função pq na segunda função foi criado em arrow function o evento de click e a função jogar. mas ela nao pode existir depois que foi declarada, por isso, o segundo requisito vem primeiro)
// 2.1 qd se tem um adventListner, por padrao, ja cria o evento dentro do parametro, é regra. Cria a const jogar = (evento) e pede para guardar o alvo clicado(divClicada) e coloca event.target para localizar qd o evento ocorre
//2.2 criar variavel fora das funções para saber quando é a vez do jogador e atribui true. dentro da função, cria os doi jogadores para guardar os simbolos deles e abre um if else alternando os turnos de jogo. é o turno do jogador? qual o simbolo da vez? se não for, qual o simbolo? Depois faz uma verificação. se na div clicada estiver vazia, signidfica que quer jogar, entao pega a vez do jogador e add o proximo jogador, ao mesmo tempo coloca o texto do jogador, qd termina, inverte o turno da vez.

const player = document.querySelector('#player');
let turno = true;

const jogar = (event)=> {
    const alvoClicado = event.target;
    let jogador;
    let proximoJogador;

    if(turno === true){
        jogador = 'X';
        proximoJogador = '0';
    }
    else{
        jogador = '0';
        proximoJogador = 'X';
    }

    if(alvoClicado.innerText === ''){
        player.innerText = "Vez do jogador " + proximoJogador;
        alvoClicado.innerText = jogador;
        turno = !turno;
    }
    verificaGanhador(jogador);
    verificaEmpate();
};


//   REQUISITO 1
// 1. Crie uma função para gerar de maneira dinâmica 9 divs
// 2. Deve conter a classe celula
// 3. Deve conter o id numerados de 0 a 8
// 4. Deve ser filho da div grid
// 5. Cada div deve possuir um evento de click chamando uma função com o nome Jogar(Faremos no requisito)

//COMO FAZER?????( é a segunda função)
 // 1.1 faz o for para fazer as divs, cria o elemento div atraves da const div e document.creatElement. 
 // 1.2 Da um nome e classifica como classe e atribui a ela o index criado. (vai dando console.log para ver se esta tudo certo).
 // 1.3 achar a div com classe grid no index, criar const grid e fazer o document.querySelector (como é classe, precisa do .grid)
 // 1.4 chama a grid criada.apprendChild(div)
 // 1.5 faz o div.addEventListner com o evento em si(click e a função jogar pedida no exercicio)

const gerarDivs = () => {
    for(let index=0; index < 9; index +=1 ) {
        const div = document.createElement('div');

        div.className = 'celula'
        div.id = index;
        div.addEventListener('click', jogar);
        
        const grid = document.querySelector('.grid');
        grid.appendChild(div);
    }
};
gerarDivs();



// 3. Desenvolva uma função que recebe de quem foi o turno e deve verificar se houve algum ganhador


// Verificar se cada posição dentro do array contem o texto do jogador da vez ( X ou O )
// Somar um ponto para cada posição que conter o texto do jogador da vez dentro do array
// Checar se a pontuação é maior ou igual a 3
// Alterar texto com o id player para o jogador que conseguiu fazer 3 pontos.
// Exemplo: "Jogador X ganhou!"


function verificaGanhador (jogador){
    // Deve passar por cada index do array de combinações
    for(let index =0; index < combinacoes.length; index +=1) {
        const combinacaoAtual = combinacoes[index];
        let pontuacao = 0;

        //percorre todos os elementos de cad combinação

        for (let i = 0; i < combinacaoAtual.length; i +=1){
            const idCelula = combinacaoAtual[i];
            const celula = document.getElementById(idCelula);

            if(celula.innerText === jogador) {
                pontuacao +=1;
            }
            if(pontuacao >=3) {
                player.innerText = 'Jogador ' + jogador + ' Ganhou!'
            }
        }
    }
}



//4.  Crie uma função para limpar as células do jogo

// Deve passar por cada célula removendo o X ou O
// Adicione um evento de click ao botão com o id reset passando essa função como parâmetro.

function limparCelulas (){
    const celulas = document.querySelectorAll ('.celula');
        for (let index = 0; index < celulas.length; index +=1 ) {
            celulas[index].innerText = '';
        }
    }
    const botaoReset = document.querySelector('#reset');
    botaoReset.addEventListener('click', limparCelulas);






// Bônus

// 5. Crie uma função que verifique se deu empate
// Deve passar por todas as células verificando se não estão vazias
// Caso todas estejam preenchidas o jogo deu empate
// Alterar o texto com o id player para Empatou
// Dica: Essa função só é chamada após verificar se houve um ganhador.

function verificarEmpate(){
    const celulas = document.querySelectorAll('.celula');
    let contador = 0;
  
    for (let index = 0; index < celulas.length; index+= 1) {
      if(celulas[index].innerText !== ''){
        contador += 1;
      }
      if(contador >= 9){
        player.innerText = 'Jogo empatou !';
      }
    }
  }