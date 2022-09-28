const Keyword = {
   Sharp: '#',
   Space: ' ',
   LineBreak: '\n'
} as const 

class Token {
   private _content: string
   constructor(content: string){
      this._content = content;
   }

   public get content() {
      return this._content
   }
}

class WordToken extends Token {

}

class Parser {

   public parse() {
      return 'parser'
   }

   public searchWord(text: string) {
      let result = ''
      for(let i=0; i<text.length; i++) {
         const target = text[i]
         
         if(target === Keyword.Sharp && text[i+1] === Keyword.Space) {
            i+=2;
            while(text[i] !== Keyword.LineBreak) {
               result+= text[i++];
            }
         }
      }
      return new WordToken(result);
   }
}

export default Parser

