const readline = require(`readline`);
const fs = require('fs');

let path = '';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function askQuestion(){

    rl.question(`What file do you want to delete? `, (file) => {
    console.log(`Deleting file: ${file}`);
    path = file;

try {
  fs.unlinkSync(path)
  //file removed
} catch(err) {
  console.error(err)
}
console.log("Delete Successful!");
rl.close();
    });
}

askQuestion();