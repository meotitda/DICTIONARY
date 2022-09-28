import Parser from "./parser"

describe('Parser', ()=> {
   test("Noop", ()=> {
      expect(true).toBe(true)
   })

   test("#으로 시작하고 하나 이상의 공백이 존재하고 공백 뒤에 단어가 존재하면 Word이다.", ()=> {
      const word = 'Batch'
      const parser = new Parser();

      const token = parser.searchWord(`
         # ${word}
      `)

      expect(token.content).toBe(word)
   })
})