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

/**/
