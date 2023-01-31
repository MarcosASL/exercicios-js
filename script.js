/*------------------------------FUNCTION------------------------------------------ */
/*Crie uma function para verificar se um valor é true*/
function istrue(valor) {
  return !!valor;
}

/*Crie uma function matemática que retorne o perímetro de um quadrado, obs: perímetro é a soma dos quatro lados do quadrado*/
function perimetro(lado) {
  return lado * 4;
}

/*Crie uma function que retorne seu Nome completo, ela deve possuir o parâmetros: nome e sobrenome*/
function meunometodo(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

/*CRIE UMA FUNCTION QUE VERIFICA SE UM NÚMERO É PAR (use modulo %)*/
function isPar(n) {
  if (n % 2 === 0) {
    return "é par meu chapa";
  } else {
    return "não é par meu chapa";
  }
}

/*CRIAR FUNCTION QUE RETORNE O TIPO DE DADO DO ARGUMENTO PASSADO NELA (typeof)*/
function Tipododado(dado) {
  return typeof dado;
}

/*addEventListerner é uma function nativa do JS, o primeiro parametro é o evento que ocorre e o segundo é a callback, utilize essa function para mostrar no console o seu nome completo quando o evento 'scroll' ocorrer */
addEventListener("scroll", function () {
  // console.log("Marcos antonio da silva lima");
});

// 1 - Crie uma função (livro) que possui 3 parâmetros: nome, ano e autor.
// 2 - No corpo da função:
//  2.1 - Transforme o nome para letra maiúscula: toUpperCase()
//  2.2 - Calcule o total de anos desde o lançamento do livro: ano - 2050
//  2.3 - Crie uma variável com a frase: nome + ' por ' + autor;
//  2.4 - Coloque os 3 valores acima em um objeto.
// 3 - Retorne (return) o objeto definido.
// 4 - Execute a função com os seguintes argumentos:
//     'O Senhor dos Anéis', 1954, 'J. R. R. Tolkien'
// 5 - Guarde o retorno da função executada em uma variável.
// 6 - Log a frase final da função executada no console.
function Livro(nome, ano, autor) {
  const nomegrande = nome.toUpperCase();
  const totalanos = ano - 2050;
  const Frase = nomegrande + " por " + autor;
  const objetocomvalores = {
    nome: nomegrande,
    totalanos,
    Frase,
  };
  return objetocomvalores;
}
var retornoFunction = Livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");
// console.log(retornoFunction.Frase);

/*---------------------------------------------------------------------------------*/

/*--------------------------------OBJETOS-------------------------------------------------*/

/*Crie um objeto com os seus dados pessoais. Deve possuir pelo menos duas propriedades = nome e sobrenome */
const Meusdados = {
  nome: "marcos",
  sobrenome: "silva lima",
  idade: 31,
};

/*CRIE UM MÉTODO NO OBJETO ANTERIOR QUE MOSTRE O SEU NOME COMPLETO */
Meusdados.meunomecompleto = function () {
  return `${this.nome}  ${this.sobrenome}`;
};
// console.log(Meusdados.meunomecompleto());

/*CRIE UM OBJETO CACHORRO QUE REPRESENTE UM LABRADOR, PRETO COM 10 ANOS, QUE LATE AO VER UM HOMEM */
let cachorro = {
  raça: "labrador",
  cor: "preto",
  idade: 10 + " anos",
  Latir(verpessoa) {
    if (verpessoa === "Homem") {
      return "Latir";
    } else {
      return "Não latir";
    }
  },
};

/*NOMEIE 3 MÉTODOS OU PROPRIEDADES DE UM STRING*/

// console.log(string.length);
// console.log(string.toLowerCase());
// console.log(string.match());

/*NOMEIE 3 MÉTODOS OU PROPRIEDADES DE UM ARRAY*/

/*NOMEIE 5  MÉTODOS OU PROPRIEDADES DE ELEMENTOS DO DOM*/

/*---------------------ARRAYS E LOOP----------------------------*/

/*CRIE UMA ARRAY COM OS ANOS QUE O BRASIL GANHOU A COPA: 1959, 1962, 1970, 1994, 2002. INTERAJA COM A ARRAY UTILIZANDO UM LOOP PARA MOSTRAR NO CONSOLE A SEGUINTE MENSAGEM : ` O BRASIL GANHOU A COPA DE ${ANO}` */
let Brasilcampeao = [1959, 1962, 1970, 1994, 2002];
for (let anos = 0; anos < Brasilcampeao.length; anos++) {
  // console.log(`O BRASIL GANHOU A COPA DE ${Brasilcampeao[anos]}`);
}

/*INTERAJA COM UM LOOP NAS FRUTAS ABAIXO E PARE AO CHEGAR EM PERA */
// var frutas = ["banana", "maçã", "pera", "uva", "melância"];
var frutas = ["banana", "maçã", "pera", "uva", "melância"];
for (let i = 0; i < frutas.length; i++) {
  // console.log(frutas[i]);
  if (frutas[i] === "pera") {
    break;
  }
}

/*COLOQUE A ULTIMA FRUTA DA ARRAY EM UMA VARIAVEL SEM REMOVER A MESMA DA ARRAY */
var ultimafruta = frutas[frutas.length - 1];
// console.log(ultimafruta);

/*-------------------------ATRIBUIÇÃO E TERNÁRIO---------------------------------------*/
/*SOME 500 AO VALOR DE SCROLL ABAIXO, ATRIBUINDO O NOVO VALOR A SCROLL var scroll = 1000; */

/*ATRIBUA TRUE  PARA A VARIAVEL DARCREDITO, CASO O CLIENTE POSSUA CARRO E CASA, E FALSE CASO CONTRÁRIO
var possuicarro = true;
var possuicasa = true;
var darcredito */

var possuicarro = true;
var possuicasa = true;
var darcredito = possuicarro && possuicasa ? "dar credito" : "Negar crédito";
// console.log(darcredito);
/*-----------------------------------------------------------------------------------------*/

/*----------------------------------DOOM-------------------------------- */
/*RETORNE O URL DA PÁGINA ATUAL UTILIZANDO O OBJETO WINDOW */
let retornurl = window.location.href;
console.log(retornurl);

/*SELECIONE O PRIMEIRO ELEMENTO DA PÁGINA QUE POSSUA A CLASSE ATIVO */
let pegaelemento = document.querySelector(".ativo");
console.log(pegaelemento);

/*RETORNE A LINGUAGEM DO NAVEGADOR */
let lingnav = window.navigator.language;
console.log(lingnav);

/*RETORNE A LARGURA DA JANELA */
let janelalarg = window.innerWidth;
console.log(janelalarg);

/*----------------------------------------------------------------------------------- */
// 1 - Crie um círculo com uma div de width: 16px, height: 16px e background: #999;
// 2 - Adicione ao window uma função que ocorre ao "mousemove";
// 3 - Na função mude as propriedades top e left do círculo com base no mouse.
// 4 - Você pode usar elemento.style.propriedade para mudar o CSS diretamente.
let circulo = document.querySelector(".circulo");
function movermouse(event) {
  circulo.style.top = event.y + "px";
  circulo.style.left = event.x + "px";
}

window.addEventListener("mousemove", movermouse);

/*----------------------------------------------------------------------------------- */

/*1 - Crie um botão com nome de Adicionar.  "CRIADO NO HTML"
2 - Adicione uma função (somar) ao clique desse botão
3 - Só adicione a função se o botão existir na tela.
4 - Crie uma div com o texto 0 dentro dela: <div>0</div> "CRIADO NO HTML"
5 - Na função do botão, pegue o total que estiver dentro da div e adicione + 1.
6 - Mude o valor da div para o novo total MAS...
7 - Mude o valor apenas se o total for menor que 10.
8 - Quando não for mais possível adicionar, mostre uma mensagem no console. */

function BottuonAdiciona() {
  const botao = document.querySelector("button");
  function somar() {
    const div = document.querySelector("#div-zero");
    const total = Number(div.innerText) + 1;
    if (total < 10) {
      div.innerText = total;
    } else {
      console.log("não é possivel adicionar mais números meu parceiro lindo");
    }
  }
  if (botao) {
    botao.addEventListener("click", somar);
  }
}
BottuonAdiciona();

/*----------------------------------------------------------------------------------- */

// 1 - Adicione uma navegação (nav) com 3 links: ./, ./produto.html e ./contato.html
// 2 - Crie as páginas produto.html e contato.html com o mesmo conteúdo de index.html
// 3 - Selecione os links da navegação.
// 4 - Para cada link execute uma função (ativarLink);
// 5 - Na função, extraia o href do elemento.
// 6 - Verifique se o href é igual ao URL da página (document.location.href)
// 7 - Se for igual mude o backgroundColor para black e a color para white do link.

const links = document.querySelectorAll("nav a");

function ativarLink(link) {
  const extrairhref = link.href;
  const extrairurl = document.location.href;
  if (extrairhref === extrairurl) {
    link.style.backgroundColor = "black";
    link.style.Color = "white";
  }
}
links.forEach(ativarLink);

/*DOOM PARA INICIANTES O CURSO DE JAVASCRIPT COMPLETO E6 */

// Retorne no console todas as imagens do site
const todasimagens = document.querySelectorAll("img");
console.log(todasimagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgsap = document.querySelectorAll("img[src^='./img/imagem']");
console.log(imgsap);

// Selecione todos os links internos (onde o href começa com #)
const linkinternos = document.querySelectorAll("[href^='#']");
console.log(linkinternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroh2 = document.querySelector(".animais-descricao h2");
console.log(primeiroh2);

// Selecione o último p do site
const selecionaP = document.querySelectorAll("p");
console.log(selecionaP[selecionaP.length - 1]);

/*------------------------------------------------------------------------- */

// Mostre no console cada paragrafo do site "aquele esquema exibe detalhado o objeto no console"
const paragrafo = document.querySelectorAll("p");
paragrafo.forEach((batata) => {
  console.log(batata);
});

// Mostre o texto dos parágrafos  acima  no console 'só o texto'
paragrafo.forEach((text) => {
  console.log(text.innerText);
});

// Como corrigir os erros abaixo:

/*const imgs = document.querySelectorAll('img');

imgs.forEach(item, index => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( => {
  console.log(i++);
});

imgs.forEach(() => i++);
*/

// const imgs = document.querySelectorAll("img");

// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);

/////////////////////////////////

/*------------------JÁ FAZ PARTE DAS NOVA AULAS------------------------ */

// Adicione a classe ativo a todos os itens link do menu
const menusaddativo = document.querySelectorAll(".menu a");
menusaddativo.forEach((item) => {
  item.classList.add("ativo");
});
// console.log("🚀 ~ file: script.js:288 ~ menusaddativo", menusaddativo);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
const removeativo = document.querySelectorAll(".menu a");
removeativo.forEach((item) => {
  item.classList.remove("ativo");
});
removeativo[0].classList.add("ativo");
// console.log(removeativo);

// Verifique se as imagens possuem o atributo alt
const pegaimg = document.querySelectorAll("img");
pegaimg.forEach((img) => {
  const verificaativo = img.hasAttribute("alt");
  // console.log(img, verificaativo);
});

// Modifique o href do link externo no menu
const pegalinks = document.querySelector('.menu a[href^="http"]');
pegalinks.setAttribute("href", "https://www.google.com/");
// console.log(pegalinks);

////////////////////////////////////////////////////////////////////////////////

// Verifique a distância da primeira imagem em relação ao topo da página

// Retorne a soma da largura de todas as imagens

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas  com o dedo. (48px/48px de acordo com o google)

// Se o browser for menor que 720px, dicione a classe menu-mobile ao menu a

////////////////////////////////////////////////////////////////////////////////

/* Quando o usuário clicar nos links internos do site,
adicione a classe ativo ao item clicado e remova dos
demais itens caso eles possuam a mesma. Previna
 o comportamento padrão desses links */

/* Selecione todos os elementos do site começando a partir do body,
 ao clique mostre exatamente quais elementos estão sendo clicados */

/* Utilizando o código anterior, ao invés de mostrar no console,
remova o elemento que está sendo clicado, o método remove() remove um elemento.*/

/* Se o usuário clicar na tecla (t), aumente todo o texto do site.
(crie no css o estilo html.'nomedaclasse' e bota a font-size sendo grande) */

////////////////////////////////////////////////////////////////////////////////
/*-------------------------Traversing e Manipulação---------------------------- */
// Duplique o menu e adicione ele em copy

////////////////////////////////////////////////////////////////////////////////
// Selecione o primeiro DT da dl de Faq

////////////////////////////////////////////////////////////////////////////////
// Selecione o DD referente ao primeiro DT (dd é tag de descrição após o dt)

//////////////////////////////////////////////////////////////////////////////////
// Substitua o conteúdo html de .faq pelo de .animais
