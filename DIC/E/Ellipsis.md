<d-title>

# Ellipsis

</d-title>

<d-label>

<d-inner>

![Common](../../2TAT1C/Label_Common.png)

</d-inner>

<d-inner>

![Frontend](../../2TAT1C/Label_Frontend.png)

</d-inner>

</d-label>

<d-origin>

원형 : Ellipsis

</d-origin>

<d-mean>

의미 : 생략, <span style="color:#FFBF00; font-weight:bold;">줄임표</span>

</d-mean>

<d-pronunciation>

발음 : 엘립시스

</d-pronunciation>

<d-content>

Ellipsis 는 <span style="color:#FFBF00; font-weight:bold;">...</span> 이다. (줄임표)
([참고 - 위키피디아](https://ko.wikipedia.org/wiki/%EC%A4%84%EC%9E%84%ED%91%9C))

</d-content>

<d-relation>

## 관련 기술

<d-inner>

1. Javascript ES6 Destructuring

</d-inner>

```js
var [a, ...b] = [1, 2, 3]
console.log(a) // 1
console.log(b) // [2, 3]
```

<d-inner>

2. Java 등 프로그래밍 언어에서의 args

</d-inner>

엘립시스로 표현된 인자

```java
public void PrintWithEllipsis(String...setOfStrings) {
    for (String s : setOfStrings)
        System.out.println(s);
}
```

결과

```java
obj.PrintWithEllipsis(); // prints nothing
obj.PrintWithEllipsis("first"); // prints "first"
obj.PrintWithEllipsis("first", "second"); // prints "
```

<d-inner>

3. CSS Text overflow

</d-inner>

</d-relation>
