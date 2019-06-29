const readline = require(`readline`);
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

let newAnswer = "";
let newName = "";

function copyFile(){
    rl.question(`What is the name of the file you want to copy? `, (answer) => {
    console.log(`Copying file: ${answer}`);
    newAnswer = answer;
    
    
    rl.question(`What do you want name the new file? `, (copy) => {
      console.log(`Naming new file: ${copy}`);
      newName = copy;
      return makeCopyFile();
      });
    
    });
    }

copyFile();

function makeCopyFile(){
// destination.txt will be created or overwritten by default.
fs.copyFile(newAnswer, newName, (err) => {
  if (err) throw err;
  console.log(`${newAnswer} was copied to ${newName}`);
  rl.close();
});
}