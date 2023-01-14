/*
Given an array of integers, find the maximal absolute difference 
between any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
solution(inputArray) = 3.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

Guaranteed constraints:
3 ≤ inputArray.length ≤ 10,
-15 ≤ inputArray[i] ≤ 15.

[output] integer

The maximal absolute difference.
*/
function solution(inputArray) {
    let dif = 0;
    let temp = 0;
    for( let i = 0; i < inputArray.length - 1 ; i++ )
    {
        //Calculando a diferença entre os adjacentes 
        temp = (inputArray[i+1] - inputArray[i]);
        if( temp < 0 )
        {
            temp *= -1; // Tornando a dirença em um valor positivo 
        }
        if(temp > dif)
        {
            dif = temp; // Se a diferença atual for maior que a anterior, substituir 
        }
    }
    return dif;
}
