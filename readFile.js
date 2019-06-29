/*
Ask the user a questions. What file do you want to read?
When the user answers the questions, read the appropriate file and output the contents to the screen
*/


const readline = require(`readline`);
const fs = require(`fs`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//placeholder for the user input

let newAnswer = "";

// this function prompts for user input
function askQuestion(){

    rl.question(`What file do you want to read? `, (answer) => {
    console.log(`Reading file: ${answer}`);
    newAnswer = answer;

    fs.readFile(newAnswer, "utf8", function (err,data) {
        if (err) {
            return console.log(err);
        }
            console.log(data);
        });
        rl.close();
    });

}

askQuestion();






