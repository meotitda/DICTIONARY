# Infer(Inference)

![Common](../../2TAT1C/Label_Common.png)

<a href="">#Type 언어</a>

일반적으로 <span style="color:#FFBF00; font-weight:bold;">추론하다</span>라는 뜻을 가진다.

Type infer는 프로그래밍 언어에서 식의 데이터 형식을 자동으로 감지하는 것을 말합니다.

```javascript
 add_one(x) {
     var result;  /* variable result는 inferred-type(추론 타입) */
     result = x + 1; /* variable result는 +1을 통해 int로 추론되어짐 */
     return result;
 }
```

<a href="https://en.wikipedia.org/wiki/Type_inference#:~:text=Type%20inference%20refers%20to%20the,some%20strongly%20statically%20typed%20languages">위키 백과</a>