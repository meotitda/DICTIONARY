import Parser from "./parser";

describe("Parser", () => {
  describe("searchWord", () => {
    test("#으로 시작하고 하나 이상의 공백이 존재하고 공백 뒤에 단어가 존재하면 Word이다.", () => {
      const word = "Batch";
      const parser = new Parser();

      const token = parser.searchWord(`
            # ${word}
         `);

      expect(token.content).toBe(word);
    });

    test("#으로 시작하고 하나 이상의 공백이 존재하지 않으면 Word 토큰을 발행하지 않는다.", () => {
      const word = "Batch";
      const parser = new Parser();

      const token = parser.searchWord(`
            #${word}
         `);

      expect(token).toBeNull();
    });

    test("WordToken이 두 개 이상이라면 첫번째 Word만 토큰을 발행한다.", () => {
      const word = "First";
      const word2 = "Second";

      const parser = new Parser();

      const token = parser.searchWord(`
            # ${word}
            # ${word2}
   
         `);

      expect(token.content).toBe(word);
    });

    test("searchWord를 두 번 실행하면 마지막 Word 토큰을 발행한다.", () => {
      const word = "First";
      const word2 = "Second";

      const parser = new Parser();

      const token = parser.searchWord(`
            # ${word}
         `);

      const token2 = parser.searchWord(`
         # ${word2}
      `);

      expect(token.content).toBe(word);
      expect(token2.content).toBe(word2);
    });


    test("공백이 있으면 tokenize를 종료한다.", () => {
      const word = "First";

      const parser = new Parser();

      const token = parser.searchWord(`
            # First
            Line
         `);


      expect(token.content).toBe(word);
    });
  });

  describe("searchLabels", () => {
      test('![카테고리](카테고리_이미지) 로 모든 라벨을 tokenize 한다.', ()=> {
         const parser = new Parser();

   
         const labels = parser.searchLabels(`
               # First
               ![Backend](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Backend.png)
               
               ddd
               
               ![Common](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Common.png)

               dd

            `);
   expect(labels.map((label)=> label.content)).toStrictEqual(['Backend', 'Common'])
      })
   })
});
