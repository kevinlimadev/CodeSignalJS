/* 
Questão 
You are given an array of integers representing coordinates of 
obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the 
right. You are allowed only to make jumps of the same length represented
 by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

Example

For inputArray = [5, 3, 6, 7, 9], the output should be
solution(inputArray) = 4.
*/

function solution(inputArray) 
{
    let jump = satisfyingJump(inputArray, 0, 1);
    return jump; 
}


function satisfyingJump( array, f_position, f_jump)
{   
    // se a posição for maior que o maior valor do array, já terminamos de percorrer o array. 
    if( f_position > Math.max(...array))
    {
        return f_jump
    }
    // condição verdadeira, a função é chamada novamente em uma nova posição 
    else if( !array.includes(f_position) )   
    {
        return  satisfyingJump( array, f_position + f_jump , f_jump);
    }         
    // condição falsa , a função é chamada novamente com um novo valor para o pulo.  
    {   
    else 
    {
        return  satisfyingJump( array, 0 , f_jump +1);
    }
    
}