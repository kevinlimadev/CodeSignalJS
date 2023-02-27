/* Question: 
Check if all digits of the given integer are even.

Example

For n = 248622, the output should be
solution(n) = true;
For n = 642386, the output should be
solution(n) = false.
*/
function solution(n) {
  const lista = percorrerAlgarismos(n);
  return lista.every((elemento) => elemento % 2 == 0);
}

function percorrerAlgarismos(numero) {
  var algarismos = [];
  while (numero > 0) {
    algarismos.push(numero % 10);
    numero = Math.floor(numero / 10);
  }
  return algarismos.reverse();
}

/*
O objetivo dessa função é percorrer todos os algarismos do número n e verificar 
se todos eles são pares.

Para fazer isso, a função solution(n) chama outra função chamada 
percorrerAlgarismos(numero), que recebe um número numero como argumento e 
retorna um array contendo todos os seus algarismos. Essa função percorre cada 
algarismo do número, começando pelo último dígito (unidade) e terminando no 
primeiro dígito (maior ordem). Ela faz isso dividindo o número sucessivamente 
por 10 e armazenando o resto da divisão (que é o algarismo atual) em um array. 
Depois de percorrer todos os algarismos, a função inverte a ordem dos elementos 
do array e o retorna.

De volta à função solution(n), ela chama a função percorrerAlgarismos(n) para 
obter a lista de algarismos do número n e armazena essa lista na constante lista. 
Em seguida, a função usa o método every() do array lista para verificar se todos 
os algarismos são pares. O método every() executa uma função de callback para cada 
elemento do array e retorna true se todos os elementos satisfazem uma determinada 
condição. Nesse caso, a condição é que o elemento (que representa um algarismo) deve 
ser divisível por 2 (ou seja, um número par).

Por fim, a função solution(n) retorna true se todos os algarismos do número n são 
pares e false caso contrário.
*/
