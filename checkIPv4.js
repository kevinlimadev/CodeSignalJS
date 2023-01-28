/* Questão 
An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

Given a string, find out if it satisfies the IPv4 address naming rules.

Example

For inputString = "172.16.254.1", the output should be
solution(inputString) = true;

For inputString = "172.316.254.1", the output should be
solution(inputString) = false.

316 is not in range [0, 255].

For inputString = ".254.255.0", the output should be
solution(inputString) = false.
*/

function solution(inputString) {
  let parts = inputString.split(".");
  if (parts.length !== 4) {
    return false;
  }
  for (let part of parts) {
    if (
      !part.length ||
      isNaN(part) ||
      part < 0 ||
      part > 255 ||
      (part.startsWith("0") && part.length > 1)
    ) {
      return false;
    }
  }
  return true;
}

/*
The previous function is designed to validate whether a given
string is a valid IPv4 address or not. An IPv4 address is a 
numerical label assigned to each device participating in a 
computer network that uses the Internet Protocol for communication.

The function begins by using the JavaScript built-in split() 
method to divide the input string into an array of 4 parts, 
representing the four octets of an IPv4 address. It then checks 
that the array has exactly 4 parts, which is a requirement for a 
valid IPv4 address.

Next, the function uses a for-loop to iterate through each part of 
the array and checks that the part is not an empty string, and that 
it is a number using the isNaN() method. It also checks that the value 
of the part is between 0 and 255, which is the valid range for each 
octet of an IPv4 address.

Finally, the function also checks that each part of the IP address is
a valid number, it should not be a number starting with 0 and it's 
length greater than one, which is not a valid number in IP address.

If any of these conditions are not met, the function returns false, 
indicating that the input string is not a valid IPv4 address. If all 
conditions are met, the function returns true, indicating that the 
input string is a valid IPv4 address.

Overall, this function provides a reliable and efficient way to validate IPv4 addresses, ensuring that the input string is a valid IP address before it is used in any further processing or networking operations.
*/
