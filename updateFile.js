const readline = require(`readline`);
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

let newAnswer = "";
let newInfo = "";

function updateFile(){
    rl.question(`What is the name of the file you want to append? `, (answer) => {
    console.log(`Updating file: ${answer}`);
    newAnswer = answer;
    
    
    rl.question(`What do you want to add? `, (addition) => {
      console.log(`Adding to file: ${addition}`);
      newInfo = addition;
      return appendingFile();
      });
    
    });
    }

updateFile();

function appendingFile(){

fs.appendFile(newAnswer, newInfo, (err) => {
  if (err) throw err;
  console.log("Updates saved!");
  rl.close();
});
}