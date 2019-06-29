## Study on using node.JS filesystem 
    https://nodejs.org/api/fs.html

## 1) Create a File - userInputToFile.js

    * Using input from terminal readline prompts, this file will accomplish three things:

        --- Stores File Name input
        --- Store File content input
        --- Creates a new file with the stored information

    * Node.js modules used:
       
        --- rl.question();
        --- fs.writeFile();

## 2) Read a File - readFile.js

    * Using input from terminal readline prompts, this file will accomplish two things:

        --- Stores input for file name
        --- Displays the inner text of the file

    * Node.js modules used:

        --- rl.question();
        --- fs.readFile();

## 3) Delete a File - unlinkFile.js

    * Using input from terminal readline prompts, this file will accomplish two things:

        --- Stores input for file name
        --- Delete the file 

    * Node.js modules used:

        --- rl.question();
        --- fs.unlink();
