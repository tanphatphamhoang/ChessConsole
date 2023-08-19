import * as promptSync from 'prompt-sync';

const prompt = promptSync.default();

const name=prompt("insert your name: ");
console.log(`Welcome ${name} to toxic world!`);
