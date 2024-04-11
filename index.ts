// Q9: Write a simple JavaScript program that 
// checks if a person is eligible for a CNIC 
// (show a message with the person's name).

import inquirer from "inquirer";

let data = await inquirer.prompt([
{
    message : "Enter Your Good Name!",
    name : "perName",
    type: "input"
},
{
    message : "Enter Your Age!",
    name : "perAge",
    type: "input"
}
]); 

if (data.perAge >= 18) {
    console.log(`${data.perName}! You Are Eligible For a CNIC!`);
}
 else if (data.perAge <= 17) {
    console.log(`Sorry ${data.perName}! You Are Not Eligible For a CNIC!`);
 }





