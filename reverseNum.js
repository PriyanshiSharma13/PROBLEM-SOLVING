// Reverse a Number.

// Write a program which takes a number N as input from the user and You need to reverse the number.

// Note: You have to complete Reverse_Number function. No need to take any input.

var Reverse_Number = (N) => 
{
  let num = 0;
  for( let i=0; N > 0; i++)
  {
    num = num * 10 + N % 10;
    N = parseInt(N / 10);
  }
  return num;
};
console.log(Reverse_Number(1900));
console.log(Reverse_Number(2012));