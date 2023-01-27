/* Questão 
Proper nouns always begin with a capital letter, followed by small letters.

Correct a given proper noun so that it fits this statement.

Example

For noun = "pARiS", the output should be
solution(noun) = "Paris";
For noun = "John", the output should be
solution(noun) = "John".
*/

function solution(noun) {
  let primeiraLetra = noun[0].toUpperCase(); // Transformo a primeira letra em maiúscula
  let restante = noun.slice(1).toLowerCase(); // Transformo todo o restante em minúscúla
  return primeiraLetra + restante; // retorno a união da primeira letra com o restante da palavra
}
