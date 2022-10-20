import { UndefinedLabelError } from "./errors";
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
    test("![카테고리](카테고리_이미지) 로 모든 라벨을 tokenize 한다.", () => {
      const parser = new Parser();

      const labels = parser.searchLabels(`
               # First
               ![Backend](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Backend.png)
               
               ddd
               
               ![Common](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Common.png)

               dd

            `);
      expect(labels.map((label) => label.content)).toStrictEqual([
        "Backend",
        "Common",
      ]);
    });

    test("전역 컨텍스트인 경우에 ![]()를 사용하면서 카테고리에 없는 값을 입력할 경우에는 UndefinedLabel Error이다.", () => {
      const parser = new Parser();

      expect(() =>
        parser.searchLabels(`
      # First
      ![Backend](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Backend.png)
      
      ddd
      
      ![Cobmon](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Cobmon.png)

      dd

   `)
      ).toThrowError(new UndefinedLabelError("Co는 존재하지 않는 라벨입니다."));
    });
  });

  describe("searchTags", () => {
    test("a tag가 열리고, 자식 노드가 텍스트 노드이며, 첫 시작이 #로 시작하고 a tag가 닫히면 TagToken이다.", () => {
      const parser = new Parser();
      const tags = parser.searchTags(`
      <a href="https://github.com/meotitda/DICTIONARY">#딕셔너리</a>
      <a href="#">#멋</a>
   `);

      expect(tags.map((tags) => tags.content)).toStrictEqual([
        "딕셔너리",
        "멋",
      ]);
      expect(tags.map((tags) => tags.url)).toStrictEqual([
        "https://github.com/meotitda/DICTIONARY",
        "#",
      ]);
    });

    test("태그는 여러 속성을 가질 수 있다.", () => {
      const parser = new Parser();
      const tags = parser.searchTags(`
      <a href="#" fewjiof avl="dadsa">#멋</a>
   `);

      expect(tags.map((tags) => tags.content)).toStrictEqual(["멋"]);
      expect(tags.map((tags) => tags.url)).toStrictEqual(["#"]);
    });

    test("자식 노드가 #으로 시작하지 않는 경우, 에러이다.", () => {
      const parser = new Parser();

      expect(() =>
        parser.searchTags(`
      <a href="#">멋</a>
   `)
      ).toThrowError();
    });

    test("닫는 꺽쇠가 </a> 가 아니다.", () => {
      const parser = new Parser();

      expect(() =>
        parser.searchTags(`
      <a href="#">#멋< /a>
   `)
      ).toThrowError();
      expect(() =>
        parser.searchTags(`
    <a href="#">#멋</ a>
 `)
      ).toThrowError();
      expect(() =>
        parser.searchTags(`
  <a href="#">#멋</a >
`)
      ).toThrowError();
    });
  });

  describe("searchBody", () => {
    test("-가 3개 이상이며 그 외에는 줄바꿈이 존재하고, 다음 줄에는 빈 줄이 존재하고 그 아래를 Token화 한다.  ", () => {
      const parser = new Parser();
      const body = parser.searchBody(`
      dooop
      --------

      This is Content Body :)`);

      expect(body.content).toBe("      This is Content Body :)");
    });

    test("body 줄바꿈이 적용된 후에 공백이 없다면 Syntax 에러가 발생한다. ", () => {
      const parser = new Parser();

      expect(() =>
        parser.searchBody(`
        dooop
        --------
        This is Content Body :)`)
      ).toThrowError(
        new Error("Invalid Syntax: You need to put a new line after body line")
      );
    });

    test("body 줄바꿈에 텍스트가 섞여 있으면 Body가 아니다.", () => {
      const parser = new Parser();
      const body = parser.searchBody(`
      dooop
      ------ddd
      This is Content Body :)`);
      expect(body).toBe(null);
    });
  });
});
