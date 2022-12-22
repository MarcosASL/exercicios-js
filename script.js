/*------------------------------FUNCTION------------------------------------------ */
/*Crie uma function para verificar se um valor é true*/
function trueoufalse(valor) {
  return !!valor;
}

/*Crie uma function matemática que retorne o perímetro de um quadrado, obs: perímetro é a soma dos quatro lados do quadrado*/
function perímetro(lado) {
  return lado * 4;
}

/*Crie uma function que retorne seu Nome completo, ela deve possuir o parâmetros: nome e sobrenome*/
function Nomecompleto(nome, sobrenome) {
  return `${nome}  ${sobrenome}`;
}

/*CRIE UMA FUNCTION QUE VERIFICA SE UM NÚMERO É PAR (use modulo %)*/
function Parcheck(numero) {
  var modulo = numero % 2;
  if (modulo === 0) {
    return true;
  } else {
    return false;
  }
}

/*CRIAR FUNCTION QUE RETORNE O TIPO DE DADO DO ARGUMENTO PASSADO NELA (typeof)*/
function tipodedado(dado) {
  return typeof dado;
}

/*addEventListerner é uma function nativa do JS, o primeiro parametro é o evento que ocorre e o segundo é a callback, utilize essa function para mostrar no console o seu nome completo quando o evento 'scroll' ocorrer */
addEventListener("scroll", function () {
  // console.log("Marcos barbao");
});
/*---------------------------------------------------------------------------------*/

/*--------------------------------OBJETOS-------------------------------------------------*/

/*Crie um objeto com os seus dados pessoais. Deve possuir pelo menos duas propriedades = nome e sobrenome */
var meusdados = {
  nome: "marcos",
  sobreneomes: "antonio",
  idade: 30,
  corfavortia: "azul",
  possuifaculdade: true,
};
meusdados.idade;
meusdados.corfavortia;

/*CRIE UM MÉTODO NO OBJETO ANTERIOR QUE MOSTRE O SEU NOME COMPLETO */
meusdados.Nomecompleto = function () {
  return `${this.nome} ${this.sobreneomes}`;
};
meusdados.Nomecompleto();

/*CRIE UM OBJETO CACHORRO QUE REPRESENTE UM LABRADOR, PRETO COM 10 ANOS, QUE LATE AO VER UM HOMEM */
var cachorro = {
  raça: "Labrador",
  cor: "preto",
  idade: 10 + " anos",
  TemHomemNarua: true,
  Latir(pessoa) {
    if (pessoa === "Homem") {
      return "Latir";
    } else {
      return "NãoLatir";
    }
  },
};

/*NOMEIE 3 PROPRIEDADES OU MÉTODOS DE STRING*/
var nome3 = "Marcos";
nome3.concat;
nome3.endsWith;
nome3.indexOf;

/*NOMEIE 5 PROPRIEDADES OU MÉTODOS DE ELEMENTOS DO DOM*/
var domelement = document.createElement("div");
domelement.addEventListener;
domelement.appendChild;
domelement.querySelectorAll;
domelement.releasePointerCapture;
domelement.ariaHidden;
TextDecoderStream.arguments;

/*--------------------------------ARRAYS E LOOP-------------------------------------------------*/

/*CRIE UMA ARRAY COM OS ANOS QUE O BRASIL GANHOU A COPA: 1959, 1962, 1970, 1994, 2002. INTERAJA COM A ARRAY UTILIZANDO UM LOOP PARA MOSTRAR NO CONSOLE A SEGUINTE MENSAGEM : " O BRASIL GANHOU A COPA DE ${ANO}" */
var BrasilCampeao = [1959, 1962, 1970, 1994, 2002];
for (var i = 0; i < BrasilCampeao.length; i++) {
  console.log(`O Brasil ganhou a copa de ${BrasilCampeao[i]}`);
}

/*lista de compras */
var listaCompras = [
  "banana",
  "abacate",
  "tangerina",
  "abacaxi",
  "goiaba",
  "laranja",
  "uva ACABA AQUI",
];
for (var p = 0; p < listaCompras.length; p++) {
  console.log(listaCompras[p]);
}

/*INTERAJA COM UM LOOP NAS FRUTAS ABAIXO E PARE AO CHEGAR EM PERA */
var frutas = ["banana", "maçã", "pera", "uva", "melância"];
for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if (frutas[fruta] === "pera") {
    break;
  }
}
/*COLOQUE A ULTIMA FRUTA DA ARRAY EM UMA VARIAVEL SEM REMOVER A MESMA DA ARRAY */
var ultimafruta = frutas[frutas.length - 1];

/*-------------------------ATRIBUIÇÃO E TERNÁRIO---------------------------------------*/
/*SOME 500 AO VALOR DE SCROLL ABAIXO, ATRIBUINDO O NOVO VALOR A SCROLL */
var scroll = 1000;
scroll += 500;
console.log(scroll);

/*ATRIBUA TRUE  PARA A VARIAVEL DARCREDITO, CASO O CLIENTE POSSUA CARRO E CASA, E FALSE CASO CONTRÁRIO */
var possuicarro = true;
var possuicasa = true;
var darcredito =
  possuicasa && possuicarro
    ? "dar credito ao cliente"
    : "negar credito ao cliente";
console.log(darcredito);

/*-----------------------------------------------------------------------------------------*/

/*----------------------------------DOOM-------------------------------- */
/*RETORNE O URL DA PÁGINA ATUAL UTILIZANDO O OBJETO WINDOW */
const linkurl = window.location.href;
console.log(linkurl);

/*SELECIONE O PRIMEIRO ELEMENTO DA PÁGINA QUE POSSUA A CLASSE ATIVO */
const elementpagina = document.querySelector(".ativo");
console.log(elementpagina);

/*RETORNE A LINGUAGEM DO NAVEGADOR */
const linguanavegador = window.navigator.language;
console.log(linguanavegador);

/*RETORNE A LARGURA DA JANELA */
const largurajanela = window.innerWidth;
console.log(largurajanela);

// 1 - Crie uma função (livro) que possui 3 parâmetros: nome, ano e autor.
// 2 - No corpo da função:
//  2.1 - Transforme o nome para letra maiúscula: toUpperCase()
//  2.2 - Calcule o total de anos desde o lançamento do livro: 2050 - ano
//  2.3 - Crie uma variável com a frase: nome + ' por ' + autor;
//  2.4 - Coloque os 3 valores acima em um objeto.
// 3 - Retorne (return) o objeto definido.
// 4 - Execute a função com os seguintes argumentos:
//     'O Senhor dos Anéis', 1954, 'J. R. R. Tolkien'
// 5 - Guarde o retorno da função executada em uma variável.
// 6 - Log a frase final da função executada no console.

function livro(nome, ano, autor) {
  const NomeMaior = nome.toUpperCase();
  const TotalAnos = ano - 2050;
  const frase = nome + " por " + autor;
  const objeto = {
    nome: NomeMaior,
    TotalAnos,
    frase,
  };
  return objeto;
}
const retornotudo = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");
console.log(retornotudo.frase);

/*----------------------------------------------------------------------------------- */
// 1 - Crie um círculo com uma div de width: 16px, height: 16px e background: #999;
// 2 - Adicione ao window uma função que ocorre ao "mousemove";
// 3 - Na função mude as propriedades top e left do círculo com base no mouse.
// 4 - Você pode usar elemento.style.propriedade para mudar o CSS diretamente.
const circulo = document.querySelector("#circulo");
function seguirmouse(event) {
  circulo.style.top = event.y + "px";
  circulo.style.left = event.x + "px";
}
window.addEventListener("mousemove", seguirmouse);
