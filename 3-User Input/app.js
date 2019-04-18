//Take command line input from user 

//1.Readline : sum of two numbers

//Fetch the readLine module 
const readline = require('readline');
//Create interface for standard input : 'process.stdin' and standard ouptut : process.stdout
let rl =  readline.createInterface({input : process.stdin, output: process.stdout});

//Create two random numbers from Math.random and add them
let n1 = Math.floor((Math.random() * 10) +1 ),n2 = Math.floor((Math.random() * 10) +1 );
let sum = n1+n2;

/** 
 * Ask the user to enter the sum of n1,n2 and compare for truth value
 * method : question
 * arg0 : String => The text to display on user input prompt
 * arg1 : Callback to handle user input, provides the string user types as arg
*/
rl.question(`What is the value of ${n1} + ${n2} ?\n`,
(input) =>{
    if(input.trim() == sum){
        console.log("Correct answer");
    } else {
        console.log("Wrong answer !!!");
    }
    //Close the ReadLine interface (so that we can terminate app)
    rl.close();
}
);



