import * as promptSync from 'prompt-sync';
import * from 'Board.ts';

const prompt = promptSync.default();

const name=prompt("insert your name: ");
console.log(`Welcome ${name} to toxic world!`);

while(true){
    console.log("Input your next move: ");

}
function thearentedMove() :Array {}

function checkIsCheckmatedOrStalemated(){
    if(JSON.stringify(allAlivePiece)==JSON.stringify(["king"])){
        return isGameOver()="stalemate";
    }
    for ( let piece in allAlivePice){
        let move = [...movable];
        move.push([...threatenedMove]);
        for (let currentMove in move){
            let boardCopy = [...board];
            piece.currentPosition=currentMove;
            if(king.currentPosition != p)
        }
    }
}
