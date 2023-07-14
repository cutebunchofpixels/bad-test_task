/*
Typescript and Npm-package ts-node were used to solve the problem:
    https://www.npmjs.com/package/typescript
    https://www.npmjs.com/package/ts-node
To run the code, do the following:
    Install needed packages via "npm install" command
    Run the script via "npm start" or "npx ts-node bad-test_task.ts" commands
*/

import * as readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

function getFirstUnique(input: string): string {
    const splitted = input.split(" ");
    const uniqueCharsInText: string[] = [];

    for (const word of splitted) {
        for (const char of word) {
            if (word.indexOf(char) === word.lastIndexOf(char)) {
                uniqueCharsInText.push(char);
                break;
            }
        }
    }

    for (const char of uniqueCharsInText) {
        if (uniqueCharsInText.indexOf(char) === uniqueCharsInText.lastIndexOf(char)) {
            return char;
        }
    }

    return "";
}

//Example of receiving console input in Node.js. NOTE: Node.js v17.0.0 or above is required for this approach
async function main() {
    const rl = readline.createInterface({ input: stdin, output: stdout });

    const input = await rl.question("");
    const firstUnique = getFirstUnique(input);
    console.log(firstUnique);

    rl.close();
}

main();
