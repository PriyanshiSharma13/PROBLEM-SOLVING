// Check whether the year is Leap year or not.

// Write a program which takes an year N as input from the user and find out whether the given year is a Leap Year or not.

// Note: You have to complete Check_Leap function. No need to take any input.

const Check_Leap = (year) => 
{
    if((year % 400 === 0) || (year % 100 !== 0) && (year % 4 === 0))
    {
        return "Leap Year";
    }
    else{
        return "Non Leap Year";
    }
};
console.log(Check_Leap(1900));
console.log(Check_Leap(2012));