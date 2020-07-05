# Ellipsis
![Common](../2TAT1C/Label_Common.png)
![Frontend](../2TAT1C/Label_Frontend.png)

원형 : Ellipsis

의미  : 생략, <span style="color:#FFBF00; font-weight:bold;">줄임표</span>

발음 : 엘립시스

Ellipsis 는 <span style="color:#FFBF00; font-weight:bold;">...</span> 이다. (줄임표) 
([참고 - 위키피디아](https://ko.wikipedia.org/wiki/%EC%A4%84%EC%9E%84%ED%91%9C))

## 관련 기술
1. Javascript ES6 Destructuring

```js
var [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
```

2. Java 등 프로그래밍 언어에서의 varargs

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

3. CSS Text overflow