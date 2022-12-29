/*------------------------------FUNCTION------------------------------------------ */
/*Crie uma function para verificar se um valor é true*/
function trueounaobicho(verifica) {
  return !!verifica;
}
/*Crie uma function matemática que retorne o perímetro de um quadrado, obs: perímetro é a soma dos quatro lados do quadrado*/
function quadradop(lado) {
  return lado * 4;
}

/*Crie uma function que retorne seu Nome completo, ela deve possuir o parâmetros: nome e sobrenome*/
function meunomecompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

/*CRIE UMA FUNCTION QUE VERIFICA SE UM NÚMERO É PAR (use modulo %)*/
function parouimpar(n) {
  var modulo = n % 2;
  if (modulo === 0) {
    return "é par papai";
  } else {
    return "é impar papai";
  }
}

/*CRIAR FUNCTION QUE RETORNE O TIPO DE DADO DO ARGUMENTO PASSADO NELA (typeof)*/
function qualDado(item) {
  return typeof item;
}

/*addEventListerner é uma function nativa do JS, o primeiro parametro é o evento que ocorre e o segundo é a callback, utilize essa function para mostrar no console o seu nome completo quando o evento 'scroll' ocorrer */
addEventListener("scroll", function () {
  // console.log("marcos antonio da silva lima");
});
/*---------------------------------------------------------------------------------*/

/*--------------------------------OBJETOS-------------------------------------------------*/

/*Crie um objeto com os seus dados pessoais. Deve possuir pelo menos duas propriedades = nome e sobrenome */
var meusDados = {
  nome: "marcos",
  sobrenome: "lima",
  idade: 30 + " anos",
};

/*CRIE UM MÉTODO NO OBJETO ANTERIOR QUE MOSTRE O SEU NOME COMPLETO */
meusDados.nomecompleto = function () {
  return `${this.nome}  ${this.sobrenome}`;
};
// console.log(meusDados.nomecompleto());

/*CRIE UM OBJETO CACHORRO QUE REPRESENTE UM LABRADOR, PRETO COM 10 ANOS, QUE LATE AO VER UM HOMEM */
var cachorro = {
  raça: "labrador",
  cor: "preto",
  idade: 10 + " anos",
  verpessoa: true,
  Latir(pessoa) {
    if (pessoa === "Homem") {
      return "Latir";
    } else {
      return "Não Latir";
    }
  },
};

/*NOMEIE 3 MÉTODOS OU PROPRIEDADES DE UM STRING*/
var string = "Maquin";
// console.log(string.length);
// console.log(string.toLowerCase());
// console.log(string.match());

/*NOMEIE 3 MÉTODOS OU PROPRIEDADES DE UM ARRAY*/
var Videogames = ["switch", "ps4", "xbox"];
Videogames.pop();
Videogames.push("3DS");
Videogames.length;

/*NOMEIE 5  MÉTODOS OU PROPRIEDADES DE ELEMENTOS DO DOM*/
var pegarh1 = document.querySelector("h1");
var pegartodosp = document.querySelectorAll("p");
var click = document.addEventListener("click", function () {
  // console.log("vc clicou BB");
});
var PegaID = document.getElementById("faq");
var PegaClasse = document.getElementsByClassName("contato");

/*---------------------ARRAYS E LOOP----------------------------*/

/*CRIE UMA ARRAY COM OS ANOS QUE O BRASIL GANHOU A COPA: 1959, 1962, 1970, 1994, 2002. INTERAJA COM A ARRAY UTILIZANDO UM LOOP PARA MOSTRAR NO CONSOLE A SEGUINTE MENSAGEM : " O BRASIL GANHOU A COPA DE ${ANO}" */
var BrasilCopas = [1959, 1962, 1970, 1994, 2004];
for (var i = 0; i < BrasilCopas.length; i++) {
  // console.log(`O Brasil Ganhou a copa de ${BrasilCopas[i]}`);
}

/*INTERAJA COM UM LOOP NAS FRUTAS ABAIXO E PARE AO CHEGAR EM PERA */
var frutas = ["banana", "maçã", "pera", "uva", "melância"];
for (var f = 0; f < frutas.length; f++) {
  console.log(frutas[f]);
  if (frutas[f] === "pera") {
    break;
  }
}

/*COLOQUE A ULTIMA FRUTA DA ARRAY EM UMA VARIAVEL SEM REMOVER A MESMA DA ARRAY */
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);

/*-------------------------ATRIBUIÇÃO E TERNÁRIO---------------------------------------*/
/*SOME 500 AO VALOR DE SCROLL ABAIXO, ATRIBUINDO O NOVO VALOR A SCROLL */

/*ATRIBUA TRUE  PARA A VARIAVEL DARCREDITO, CASO O CLIENTE POSSUA CARRO E CASA, E FALSE CASO CONTRÁRIO */

/*-----------------------------------------------------------------------------------------*/

/*----------------------------------DOOM-------------------------------- */
/*RETORNE O URL DA PÁGINA ATUAL UTILIZANDO O OBJETO WINDOW */

/*SELECIONE O PRIMEIRO ELEMENTO DA PÁGINA QUE POSSUA A CLASSE ATIVO */

/*RETORNE A LINGUAGEM DO NAVEGADOR */

/*RETORNE A LARGURA DA JANELA */

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

/*----------------------------------------------------------------------------------- */
// 1 - Crie um círculo com uma div de width: 16px, height: 16px e background: #999;
// 2 - Adicione ao window uma função que ocorre ao "mousemove";
// 3 - Na função mude as propriedades top e left do círculo com base no mouse.
// 4 - Você pode usar elemento.style.propriedade para mudar o CSS diretamente.

/*----------------------------------------------------------------------------------- */

/*1 - Crie um botão com nome de Adicionar.
2 - Adicione uma função (somar) ao clique desse botão
3 - Só adicione a função se o botão existir na tela.
4 - Crie uma div com o texto 0 dentro dela: <div>0</div>
5 - Na função do botão, pegue o total que estiver dentro da div e adicione + 1.
6 - Mude o valor da div para o novo total.
7 - Mude o valor apenas se o total for menor que 10.
8 - Quando não for mais possível adicionar, mostre uma mensagem no console. */

/*----------------------------------------------------------------------------------- */

// 1 - Adicione uma navegação (nav) com 3 links: ./, ./produto.html e ./contato.html
// 2 - Crie as páginas produto.html e contato.html com o mesmo html de index.html
// 3 - Selecione os links na navegação.
// 4 - Para cada link execute uma função (ativarLink);
// 5 - Na função, extraia o href do elemento.
// 6 - Verifique se o href é igual ao URL da página (document.location.href)
// 7 - Se for igual mude o backgroundColor para black e a color para white do link.

/*DOOM PARA INICIANTES O CURSO DE JAVASCRIPT COMPLETO E6 */

// Retorne no console todas as imagens do site
// Retorne no console apenas as imagens que começaram com a palavra imagem
// Selecione todos os links internos (onde o href começa com #)
// Selecione o primeiro h2 dentro de .animais-descricao
// Selecione o último p do site

/*------------------------------------------------------------------------- */

// Mostre no console cada parágrado do site
// Mostre o texto dos parágrafos no console 'só o texto'
// Como corrigir os erros abaixo:const imgs = document.querySelectorAll('img');

/*
imgs.forEach(item, index => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( => {
  console.log(i++);
});

imgs.forEach(() => i++);
*/

/*----------------------------------------------------- */

// Adicione a classe ativo a todos os itens do menu

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

// Verifique se as imagens possuem o atributo alt

// Modifique o href do link externo no menu

/*----------------------------------------------------- */

// Verifique a distância da primeira imagem

// em relação ao topo da página

// Retorne a soma da largura de todas as imagens

// Verifique se os links da página possuem

// o mínimo recomendado para telas utilizadas

// com o dedo. (48px/48px de acordo com o google)

// Se o browser for menor que 720px,

// adicione a classe menu-mobile ao menu
