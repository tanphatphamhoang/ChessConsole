import promptSync from "prompt-sync";

class Parser{
  private static instance: Parser;
  prompt : promptSync.Prompt;

  private constructor(){
    this.prompt = promptSync();
  }

  public static getInstance(): Parser {
    if (!Parser.instance) {
        Parser.instance = new Parser();
    }
    return Parser.instance;
  }

  public promptMove(currentPlayer: string ): string{
    var move = prompt('Player ' + currentPlayer + ' please input your move: ');
    return "Thank you for inputting your move";
  }

  public checkIfInputIsStandardized(move: string): boolean{
    if(move.length < 2){
      return false;
    }
    const regexPawnMove = new RegExp("^[a-h][1-8]$");
    const regexOthersMove = new RegExp("^[KQRBN][a-h][a-h][1-8]$");
    return regexPawnMove.test(move) || regexOthersMove.test(move);
  }
}

export default Parser;