// Perfect Number Check.

// Have you heard of Perfect numbers? If not let me tell you what is it, Perfect Numbers are integers that are equal to the sum of all its divisors except that number itself.

// Now, You are given an integer N, write a program to check whether the given number is a Perfect Number or not.

// Note: You have to complete Perfect _Check function. No need to take any input.

const Perfect_Check = (N) => 
{
    let num = 1;
    for(let i = 1; i*i<=N; i++)
    {
        if(i % N == 0)
        {
            if( i*i!==N )
            num = num + i + (N/i);
            else{
                num = num + i;
            }
        }
    }
    if( num === N || N == 1)
    {
        return "YES"
    }
    else{
        return "NO"
    }
};
console.log(Perfect_Check(1));
console.log(Perfect_Check(96345));

