/* Questão 
You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example

For inputArray = [1, 1, 1], the output should be
solution(inputArray) = 3.
*/

function solution(inputArray) {
  let moves = 0;
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] <= inputArray[i - 1]) {
      moves += inputArray[i - 1] - inputArray[i] + 1;
      inputArray[i] = inputArray[i - 1] + 1;
    }
  }
  return moves;
}

/* This function iterates through the input array, 
starting from the second element. If the current element
is less than or equal to the previous element, the function 
increases the current element by the difference between the 
current element and the previous element plus 1. This ensures
that the current element is strictly greater than the previous
element. The function keeps a count of the number of moves made,
and finally returns the number of moves.
*/
