# Idempotent

![Common](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Common.png)

<a href="https://developer.mozilla.org/ko/docs/Glossary/Idempotent">#MDN_Idempotent</a>

---

idempotent는 '멱등성(冪等性)'이라는 뜻입니다. 

덮을 멱(冪), 같을 등(等)의 한자를 사용합니다. 

덮을 멱은 '덮다', '거듭제곱' 등의 의미를 가지므로, 멱등성은 '여러 번 똑같은 연산을 적용하여도 같은 결과를 내는 성질'이라는 뜻으로 해석할 수 있습니다.

예를 들어 $f(x)$ = $x**1$이고 $f(f(f(3)))$ = $3$ 이라는 결과가 나올 때 $f(x)$는 멱등성을 가진다고 할 수 있습니다.

프로그래밍에서도 마찬가지입니다. 

멱등성을 가진 함수나 API는 **같은 데이터가 들어왔을 때 여러 번 실행하여도 같은 결과**가 나와야 합니다.

프로그래밍에서 멱등성이 중요한 이유는 함수나 API가 의도하지 않은 결과를 가져오지 않게 하기 위함입니다.

예를 들어 아래의 `toggleSwitch`를 x번 실행한다고 했을 때 switch.value가 true가 될지 false가 될지 100% 예측할 수 있을까요? 
`toggleSwitch`는 switch 엘리먼트의 자신의 상태에 따라 value가 true가 될 수도, false가 될 수도 있습니다.
따라서 toggleSwitch는 멱등성을 가진다고 할 수 없습니다. 

```ts
function toggleSwitch() {
  const switchEl = document.getElementById('switch')
  switchEl.value = !switchEl.value
}
```

이렇게 예측하기 어려운 프로그래밍을 하지 않기 위해 멱등성을 지키는 게 중요합니다.

멱등성을 어기지 않기 위해서는 결정적인 테스트를 짜는 게 도움이 됩니다. 
