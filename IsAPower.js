/* Determine if the given number is a power of some non-negative integer.

Example

For n = 125, the output should be
solution(n) = true;
For n = 72, the output should be
solution(n) = false.*/

function solution(n) {
    for( let i = 0; i <= 20; i++)
    {        
        for( let j = 2; j<= 10; j++)
        {   
            if((i**j) === n)
            {
                return true  
            }
        }
    }
    return false 
}