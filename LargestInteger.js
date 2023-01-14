/*Questão 
Given an integer n, return the largest number that contains exactly n digits.

Example:

For n = 2, the output should be
solution(n) = 99.

Input/Output

    [execution time limit] 4 seconds (js)

    [input] integer n

    Guaranteed constraints:
    1 ≤ n ≤ 9.

    [output] integer

    The largest integer of length n.
*/

function solution(n) {
    return(10**n - 1)
}
//Testando o código de uma maneira mais visual 
let j = 1;

for( let i = 1; i < 10 ; i++)
{   
    console.log(` O maior número com elementos ${j} é ${solution(i)} \n`);
    j++;
}