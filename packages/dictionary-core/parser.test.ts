import { DSyntaxError, DuplciatedError } from "./errors";
import Parser from "./parser";

describe("Parser", () => {
  describe("parse", () => {
    describe("title", () => {
      test("#으로 시작하고 하나 이상의 공백이 존재하지 않으면 Syntax 에러 이다.", () => {
        const word = "Batch";
        const parser = new Parser();

        expect(() =>
          parser.parse(`
        #${word}
     `)
        ).toThrowError(DSyntaxError);
      });

      test("WordToken이 두 개 이상이라면 Duplicated Error가 발생한다.", () => {
        const word = "First";
        const word2 = "Second";

        const parser = new Parser();

        expect(() =>
          parser.parse(`
        # ${word}
        # ${word2}
  
     `)
        ).toThrowError(DuplciatedError);
      });

      test("searchTitle를 두 번 실행하면 마지막 Word 토큰을 발행한다.", () => {
        const word = "First";
        const word2 = "Second";

        const parser = new Parser();

        const tokens = parser.parse(`
              # ${word}
           `);

        const tokens2 = parser.parse(`
           # ${word2}
        `);

        expect(tokens.title.content).toBe(word);
        expect(tokens2.title.content).toBe(word2);
      });
    });

    describe("labels", () => {
      test("![카테고리](카테고리_이미지) 로 모든 라벨을 tokenize 한다.", () => {
        const parser = new Parser();

        const tokens = parser.parse(`
                 # First
                 ![Backend](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Backend.png)

                 

                 ![Common](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Common.png)

                 

              `);
        expect(tokens.labels.map((label) => label.content)).toStrictEqual([
          "Backend",
          "Common",
        ]);
      });

      test("전역 컨텍스트인 경우에 ![]()를 사용하면서 카테고리에 없는 값을 입력할 경우에는 Syntax Error이다.", () => {
        const parser = new Parser();

        expect(() =>
          parser.parse(`
        # First
        ![Backend](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Backend.png)

        

        ![Cobmon](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Cobmon.png)

        

     `)
        ).toThrowError(
          new DSyntaxError("Co는 존재하지 않는 라벨입니다.", {
            errorCursor: 146,
            errorLineStr:
              "![Cobmon](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Cobmon.png)",
            errorLine: 6,
          })
        );
      });
    });

    describe("tags", () => {
      test("a tag가 열리고, 자식 노드가 텍스트 노드이며, 첫 시작이 #로 시작하고 a tag가 닫히면 TagToken이다.", () => {
        const parser = new Parser();
        const tokens = parser.parse(`
          <a href="https://github.com/meotitda/DICTIONARY">#딕셔너리</a>
          <a href="#">#멋</a>
       `);

        expect(tokens.tags.map((tags) => tags.content)).toStrictEqual([
          "딕셔너리",
          "멋",
        ]);
        expect(tokens.tags.map((tags) => tags.url)).toStrictEqual([
          "https://github.com/meotitda/DICTIONARY",
          "#",
        ]);
      });

      test("태그는 여러 속성을 가질 수 있다.", () => {
        const parser = new Parser();
        const tokens = parser.parse(`
          <a href="#" fewjiof avl="dadsa">#멋</a>
       `);

        expect(tokens.tags.map((tags) => tags.content)).toStrictEqual(["멋"]);
        expect(tokens.tags.map((tags) => tags.url)).toStrictEqual(["#"]);
      });

      test("자식 노드가 #으로 시작하지 않는 경우, 에러이다.", () => {
        const parser = new Parser();

        expect(() =>
          parser.parse(`
          <a href="#">멋</a>
       `)
        ).toThrowError();
      });

      test("닫는 꺽쇠가 </a> 가 아니다.", () => {
        const parser = new Parser();

        expect(() =>
          parser.parse(`
          <a href="#">#멋< /a>
       `)
        ).toThrowError();
        expect(() =>
          parser.parse(`
        <a href="#">#멋</ a>
     `)
        ).toThrowError();
        expect(() =>
          parser.parse(`
      <a href="#">#멋</a >
    `)
        ).toThrowError();
      });
    });

    describe("body", () => {
      test("-가 3개 이상이며 그 외에는 줄바꿈이 존재하고, 다음 줄에는 빈 줄이 존재하고 그 아래를 Token화 한다.  ", () => {
        const parser = new Parser();
        const tokens = parser.parse(`
          
          --------

          This is Content Body :)`);

        expect(tokens.body.content).toBe("          This is Content Body :)");
      });

      test("body 줄바꿈이 적용된 후에 공백이 없다면 Syntax 에러가 발생한다. ", () => {
        const parser = new Parser();
        expect(() =>
          parser.parse(`
            
            --------
            This is Content Body :)`)
        ).toThrowError(
          new DSyntaxError(
            "Body 라인 이후에는 반드시 공백이 하나 더 있어야 합니다.",
            {
              errorCursor: 35,
              errorLine: 3,
              errorLineStr: "This is Content Body :)",
            }
          )
        );
      });

      test("body 줄바꿈에 텍스트가 섞여 있으면 Body가 아니다.", () => {
        const parser = new Parser();
        const token = parser.parse(`
          
          ------ddd
          This is Content Body :)`);
        expect(token.body).toBe(null);
      });
    });
  });

  describe("nomalize e2e", () => {
    test("제대로 작성된 문서를 파싱한다.", () => {
      const parser = new Parser();
      parser.parse(`
      # Mock

      ![Backend](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Backend.png)
      ![Common](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Common.png)

      <a href="#">#모킹</a>
      <a href="#">#테스트</a>

      ----

      테스트 문서입니다.`);

      const results = parser.nomalizeToken();

      expect(results).toStrictEqual({
        title: "Mock",
        slug: "M",
        labels: ["Backend", "Common"],
        tags: [
          { link: "#", title: "모킹" },
          { link: "#", title: "테스트" },
        ],
        body: "      테스트 문서입니다.",
      });
    });
  });
});
