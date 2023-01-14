/*
Questão:
You are given a two-digit integer n. Return the sum of its digits.

Example

For n = 29, the output should be
solution(n) = 11.
*/
function solution(n) { 
    let texto = String(n)
    let a = Number(texto[0])
    let b = Number(texto[1])
    return(a+b)
}

// ou 

function solution2(n) {
    return n%10 + Math.floor(n/10)
}

num = 59
// testando a função 
console.log(solution(num))
console.log(solution2(num))
