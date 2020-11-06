# Token

![Backend](../../2TAT1C/Label_Backend.png)

<a href="https://ko.wikipedia.org/wiki/%EB%82%B1%EB%A7%90_%EB%B6%84%EC%84%9D">#Parser</a>
<a href="">#Compiler</a>

---

Token은 <span style='color:#FFCC00; font-weight:bold;'>
파싱 목적</span>을 위해 분류화를 명시적으로 지시하는 어휘소를 표현하는 구조의 하나이다.

어휘 Token 혹은 심플한 Token이라함은 할당되어 있거나 식별된 <span style='color:#FFCC00; font-weight:bold;'>의미를 가진 문자열</span> 입니다. 이것은 한쌍의 Token 네임과 선택적인 Token 값으로 구성됩니다. Token 이름은 어휘 단위의 카테고리입니다. 일반적으로 Token 이름들은 다음과 같습니다.

- identifier: 프로그래머가 선택한 이름
- keyword: 프로그래밍 언어가 이미 선택한 이름
- separator (punctuators): 문장 부호 문자 그리고 한 쌍인 구분기호
- operator: 인자들과 계산 결과를 생성하는 기호
- literal: 숫자, 논리, 텍스트, 참조 리터럴
- comment: 라인, 블럭, 주석

Token 값의 예
|Token name|Sample token values|
|------|---|
|identifier|x, color, UP|
|keyword| if, while, return
|separator| }, (, ;
|operator| +, <, =
|literal| true, 6.02e23, "music"
|comment| /_ Retrieves user data _/, // must be negative

C프로그래밍에서는 다음과 같다.

```
x = a + b * 2;
```

이 표현식의 어휘 분석은 다음 순서의 Token을 생성합니다.

```
[
    (identifier, x), (operator, =), (identifier, a), (operator, +), (identifier, b), (operator, *), (literal, 2), (separator, ;)
]
```

<a href="https://en.wikipedia.org/wiki/Lexical_analysis#Token">참고 자료</a>
