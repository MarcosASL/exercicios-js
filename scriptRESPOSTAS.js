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
// escreve: cachorro.Latir("Homem") R: Latir

/*NOMEIE 3 MÉTODOS OU PROPRIEDADES DE UM STRING*/
var nome3 = "Marcos";
nome3.concat;
nome3.endsWith;
nome3.indexOf;

/*NOMEIE 3 MÉTODOS OU PROPRIEDADES DE UM ARRAY*/
var Videogames = ["switch", "ps4", "xbox"];
Videogames.pop();
Videogames.push("3DS");
Videogames.length;

/*NOMEIE 5 MÉTODOS OU PROPRIEDADES DE ELEMENTOS DO DOM*/
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

var listaMercado = ["cenoura", "leite", "carne", "sabão", "biscoito"];
for (var h = 0; h < listaMercado.length; h++) {
  console.log(listaMercado[h]);
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

/*----------------------------------------------------------------------------------- */

/*1 - Crie um botão com nome de Adicionar.
2 - Adicione uma função (somar) ao clique desse botão
3 - Só adicione a função se o botão existir na tela.
4 - Crie uma div com o texto 0 dentro dela: <div>0</div>
5 - Na função do botão, pegue o total que estiver dentro da div e adicione + 1.
6 - Mude o valor da div para o novo total.
7 - Mude o valor apenas se o total for menor que 10.
8 - Quando não for mais possível adicionar, mostre uma mensagem no console. */

const botao = document.querySelector("#b-botao");

function somar() {
  const div = document.querySelector("#div-zero");
  const total = Number(div.innerText) + 1;
  if (total < 10) {
    div.innerText = total;
  } else {
    console.log("Não é possivel adicionar mais");
  }
}
if (botao) {
  botao.addEventListener("click", somar);
}
/*----------------------------------------------------------------------------------- */

// 1 - Adicione uma navegação (nav) com 3 links: ./, ./produto.html e ./contato.html
// 2 - Crie as páginas produto.html e contato.html com o mesmo html de index.html
// 3 - Selecione os links na navegação.
// 4 - Para cada link execute uma função (ativarLink);
// 5 - Na função, extraia o href do elemento.
// 6 - Verifique se o href é igual ao URL da página (document.location.href)
// 7 - Se for igual mude o backgroundColor para black e a color para white do link.

const links = document.querySelectorAll("nav a");
function ativarLink(link) {
  const href = link.href;
  const url = document.location.href;
  if (href === url) {
    link.style.backgroundColor = "black";
    link.style.color = "white";
  }
}
links.forEach(ativarLink);

/*DOOM PARA INICIANTES O CURSO DE JAVASCRIPT COMPLETO E6 */

// Retorne no console todas as imagens do site
const todasimg = document.querySelectorAll("img");
console.log(todasimg);

//retorne no console apenas as imagens que começarem com a palavra imagem
const Iniciaimg = document.querySelectorAll('img[src^="./img/imagem"]');
console.log(Iniciaimg);
//selecione todos os links internos (onde o href começa com #)
const linksInternob = document.querySelectorAll('[href^="#"]');
console.log(linksInternob);
//selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector(".animais-descricao h2");
console.log(primeiroH2);
//selecione o último p do site
const ultimoP = document.querySelectorAll("p"); //25
console.log(ultimoP[ultimoP.length - 1]);
/*sem o -1 ele já me retornaria o ultimo 'p', porém o ultimo é base 0 e n tem o conteúdo dentro, então devemos subtrair -1, assim retorna o penultimo que é o último conteúdo! opção 2: botar --ultimoP.length */

/*------------------------------------------------------------------------- */

// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll("p");
paragrafos.forEach((item) => {
  console.log(item);
});
// Mostre o texto dos parágrafos'só o texto' no console
paragrafos.forEach((item) => {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:const imgs = document.querySelectorAll('img');

// imgs.forEach(item, index => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach( => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

/*------------------------------------------ */
//adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll(".menu a");
itensMenu.forEach((item) => {
  item.classList.add("ativo");
});

//remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
  item.classList.remove("ativo");
});
itensMenu[0].classList.add("ativo");

//verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute("alt");
  console.log(possuiAtributo);
});

//modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute("href", "https://www.google.com/");
console.log(link);
