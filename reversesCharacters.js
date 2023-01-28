/* Questão 
Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

For inputString = "(bar)", the output should be
solution(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
solution(inputString) = "foorabbaz";
For inputString = "foo(bar)baz(blim)", the output should be
solution(inputString) = "foorabbazmilb";
For inputString = "foo(bar(baz))blim", the output should be
solution(inputString) = "foobazrabblim".
Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
*/

function solution(inputString) {
  let stack = [];
  let result = "";

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === "(") {
      stack.push(result);
      result = "";
    } else if (inputString[i] === ")") {
      let reversed = result.split("").reverse().join("");
      result = stack.pop() + reversed;
    } else {
      result += inputString[i];
    }
  }

  return result;
}
