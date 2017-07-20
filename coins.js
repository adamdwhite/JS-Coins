console.log("let's count these coins!");

// Write a program that will convert a dollar amount 
// to the number of coins that make up the amount. 
// Use the common American coins of quarters, dimes, nickels, and pennies.

/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

//Present a prompt
let input = prompt("Please enter a cash amount:");
//and log the input
console.log(input);
//define the coin sorting function
function coinSorter() {
    let cash = input * 100;
    console.log("(Cash in cents, FYI:)", cash);
    console.log("And we have this many of each coin")
    let quarters = parseInt(cash / 25);
    console.log("Number of QUARTERS:", quarters);
    cash = cash % 25;
    let dimes = parseInt(cash / 10);
    console.log("Number of DIMES:", dimes);
    cash = cash % 10;
    let nickels = parseInt(cash / 5);
    console.log("Number of NICKELS:", nickels);
    cash = cash % 5;
    let pennies = cash;
    console.log("Number of PENNIES:", pennies);
};
//and call the function:
coinSorter();