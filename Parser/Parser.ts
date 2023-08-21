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
    if(move.length != 4){
      return false;
    }

    const isStandardized = new RegExp("^[a-h][1-8][a-h][1-8]$").test(move);
    const isDifferentSquare = move[0] != move[2] || move[1] != move[3];
    return isStandardized && isDifferentSquare;
  }
}

export default Parser;