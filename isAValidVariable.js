/*
Questão
Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.

Example

For name = "var_1__Int", the output should be
solution(name) = true;
For name = "qq-q", the output should be
solution(name) = false;
For name = "2w2", the output should be
solution(name) = false.
*/
/*  Solução  */
function solution(name) {
  const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  return regex.test(name);
}

/* explicação

A função acima, chamada solution, recebe uma string name como argumento e retorna um valor booleano indicando se o nome é válido ou não como uma variável em JavaScript.

A primeira coisa que a função faz é criar uma expressão regular (regex) para validar o nome da variável. A expressão regular é definida com o operador ^, que indica o início da string, seguido por um conjunto de caracteres que a variável pode começar. Nesse caso, o conjunto é composto por letras maiúsculas, minúsculas, o caractere $ e o caractere _. Em seguida, a expressão regular permite zero ou mais ocorrências de qualquer caractere alfanumérico, $ e _ usando [a-zA-Z0-9_$]*. Por fim, a expressão regular é finalizada com o operador $, que indica o final da string.

Em resumo, a expressão regular ^[a-zA-Z_$][a-zA-Z0-9_$]*$ significa que o nome da variável deve começar com uma letra maiúscula, minúscula, $ ou _, e pode conter qualquer número de caracteres alfanuméricos, $ ou _.

A segunda parte da função utiliza o método test() da expressão regular para verificar se o nome da variável passado como argumento corresponde à expressão regular definida anteriormente. O método test() retorna true se a string passada como argumento corresponder à expressão regular, ou false caso contrário.

Assim, a função solution retorna true se o nome da variável passado como argumento corresponder à expressão regular, indicando que o nome é válido como uma variável em JavaScript. Caso contrário, retorna false.

Em resumo, a função solution verifica se uma string name corresponde a uma expressão regular que define um padrão para nomes de variáveis em JavaScript, retornando true se o nome é válido como uma variável em JavaScript ou false caso contrário.
*/
