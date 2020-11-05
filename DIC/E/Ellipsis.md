# Ellipsis

![Common](../../2TAT1C/Label_Common.png)
![Frontend](../../2TAT1C/Label_Frontend.png)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">#Javascript ES6 Destructuring</a>
<a href="https://www.google.com/search?sxsrf=ALeKk03n3asQPz_Xqmx_pE7spOOQMuQsRQ%3A1604562308018&ei=hK2jX7BV6pGvvA-5z7qgAg&q=args+ellipsis&oq=args+ellipsis&gs_lcp=CgZwc3ktYWIQAzIGCAAQBxAeMgYIABAHEB4yBggAEAgQHjIGCAAQCBAeMgYIABAIEB46BAgAEEc6BAgjECc6BwgAEMkDEEM6BAgAEEM6AggAOggIABDJAxCRAjoFCAAQkQI6BAguEEM6AgguOgYIABAKEEM6BAgAEAo6CAgAEMkDEMsBOgUIABDLAToHCAAQChDLAToFCAAQyQM6BggAEBYQHjoICAAQFhAKEB5QpoUBWJKwAWDxsQFoAnAEeACAAaoEiAHUD5IBCTAuNy40LTEuMZgBAKABAaoBB2d3cy13aXrIAQjAAQE&sclient=psy-ab&ved=0ahUKEwiwp46z9OrsAhXqyIsBHbmnDiQQ4dUDCA0&uact=5">#프로그래밍 언어에서의 args</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow">#CSS Text overflow</a>

일반적으로 생략, <span style="color:#FFBF00; font-weight:bold;">줄임표</span> 라는 의미를 가진다.

Ellipsis 는 <span style="color:#FFBF00; font-weight:bold;">...</span> 이다. (줄임표)
([참고 - 위키피디아](https://ko.wikipedia.org/wiki/%EC%A4%84%EC%9E%84%ED%91%9C))

또한 프로그래밍 언어에서 다양한 문법으로 쓰인다.

Javascript ES6 Destructuring

```js
var [a, ...b] = [1, 2, 3]
console.log(a) // 1
console.log(b) // [2, 3]
```

프로그래밍 언어에서의 args

```java
public void PrintWithEllipsis(String...setOfStrings) {
    for (String s : setOfStrings)
        System.out.println(s);
}

obj.PrintWithEllipsis(); // prints nothing
obj.PrintWithEllipsis("first"); // prints "first"
obj.PrintWithEllipsis("first", "second"); // prints "
```

또한 CSS Text overflow의 속성으로도 사용된다.