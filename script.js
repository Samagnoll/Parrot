let cartaPrimeira, cartaSegunda;
let comQuantasCartasQuerJogar;
let arrayVazioParaAdcionarCartas =[];

const arrayComCartas =[
    "bobrossparrot.gif",   //possição 1[i]
    "explodyparrot.gif",   //possição 2
    "fiestaparrot.gif" , //possição 3
    "metalparrot.gif", //possição 4
    "revertit.gif" ,  //possição 5
    "tripletsparrot.gif",  //possição 6
    "unicornparrot.gif"  //possição 7
];

function resetarCartaVirada(){
    cartaPrimeira = undefined;
    cartaSegunda = undefined;
}

function virarACarta(carta){

    if (carta.classList.contains('.card')){
        return;
    }

    if(cartaPrimeira !== undefined && cartaSegunda !== undefined){
        return;
    }

    if(cartaPrimeira === undefined || cartaSegunda === undefined){
        carta.classList.add('.card');
        console.log(carta);
    }


}

function embaralhar() {
    return Math.random() - 0.5;
}

function criarbaralho(){

    const a = comQuantasCartasQuerJogar * 0.5;

    for(let i = 0; i < a; i++){
        arrayVazioParaAdcionarCartas.push(arrayComCartas[i]);
        arrayVazioParaAdcionarCartas.push(arrayComCartas[i]);
    }

    arrayVazioParaAdcionarCartas.sort(embaralhar);

}

function distribuirQuantidadeDeCartasSelecionadas(){

    let jogo = document.querySelector('.jogo-da-memoria');

    for(let i = 0; i < arrayVazioParaAdcionarCartas.length; i++){
    let QuantidadeDeCartasEscolhidas = `
        <li>
            <div class="card" onclick="virarACarta(this)">
                <div class="front-face face">
                  <img src='${arrayComCartas[i]}'>
                </div>
                <div class="back-face face">
                <img class="frente-da-carta" src="back.png">
                </div>
            </div>    
        </li>`;
        jogo.innerHTML += QuantidadeDeCartasEscolhidas;
        console.log(this)
   }
}

function escolherQuantidadesDeCartas(){
    
   while ( comQuantasCartasQuerJogar < 4 || comQuantasCartasQuerJogar > 14 || comQuantasCartasQuerJogar % 2 !== 0 || comQuantasCartasQuerJogar === NaN ){
   comQuantasCartasQuerJogar = Number(prompt("Com quantas cartas quer jogar ?"));
  }
}


escolherQuantidadesDeCartas();
criarbaralho();
distribuirQuantidadeDeCartasSelecionadas();

