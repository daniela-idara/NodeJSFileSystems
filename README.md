## Study on using node.JS filesystem 
    https://nodejs.org/api/fs.html

## 1) Create a File - userInputToFile.js - makeNewFile();

    * Using input from terminal readline prompts, this file will accomplish three things:

        --- Stores File Name input
        --- Store File content input
        --- Creates a new file with the stored information

    * Node.js modules used:
       
        --- rl.question();
        --- fs.writeFile();

## 2) Read a File - readFile.js - readFile();

    * Using input from terminal readline prompts, this file will accomplish two things:

        --- Stores input for file name
        --- Displays the inner text of the file

    * Node.js modules used:

        --- rl.question();
        --- fs.readFile();

## 3) Copy a File - copyFile.js - copyFile();

    * Using input from terminal readline prompts, this file will accomplish three things:

        --- Stores input for original file name
        --- Stores input for new file name
        --- Creates a new file, duplicating the contents of the original file

    * Node.js modules used:

        --- rl.question();
        --- fs.copyFile();

## 4) Update a File - updateFile.js - updateFile();

    * Using input from terminal readline prompts, this file will accomplish two things:

        --- Stores input for file name
        --- Appends updated content to the end of the file

    * Node.js modules used:

        --- rl.question();
        --- fs.appendFile();        

## 5) Delete a File - unlinkFile.js - deleteFile();

    * Using input from terminal readline prompts, this file will accomplish two things:

        --- Stores input for file name
        --- Delete the file 

    * Node.js modules used:

        --- rl.question();
        --- fs.unlink();
