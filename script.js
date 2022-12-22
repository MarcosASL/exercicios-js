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

/**/
