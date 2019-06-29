
/**
 * Write a node program that will ask the user 2 questions
 * 1. What is the name of the file you want to create
 * 2. What do you want to put in the file
 * When the questions are answered: create the file with the content from the user.
 */


const readline = require(`readline`);
const fs = require(`fs`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//placeholders for user input

let newAnswer = "";
let newContent = "";

// this function will ask two questions to the user
// the answers will create the file
// the answer to the first question is saved in the placeholder variable for newAnswer
// the answer to the second question is saved in the placeholder variable for newContent

function makeNewFile(){
rl.question(`What is the name of the file you want to create? `, (answer) => {
console.log(`Created file named: ${answer}`);
newAnswer = answer;


rl.question(`What do you want to put in the file? `, (content) => {
  console.log(`Writing to file: ${content}`);
  newContent = content;
  return createFile();
  });

});
}

// the function is called to prompt for the answers to the questions
makeNewFile();

// this function will create a new file 
// it will take two arguments
// the first argument will name the file based on the newAnswer provided from user input
// the second argument will be the full contents of the file based on user input for newContent

function createFile(){
fs.writeFile(newAnswer, newContent, (err) => {
  if (err) throw err;
  console.log("File successfully saved!");
  rl.close();
  });
  }

