# Debounce

![Common](../../2TAT1C/Label_Common.png)
![Frontend](../../2TAT1C/Label_Frontend.png)

<a href="https://github.com/MoonSupport/DICTIONARY/blob/master/DIC/T/Throttle.md">#Throttle</a>
<a href="https://www.google.com/search?sxsrf=ALeKk00TU5JzsuvOY63L_MbyKH23R8QAcg%3A1604558984556&ei=iKCjX9LQIdmtoASOorBw&q=react+debounce+%EB%9E%80&oq=react+debounce+%EB%9E%80&gs_lcp=CgZwc3ktYWIQAzIECAAQRzIECAAQRzIECAAQRzIECAAQRzIECAAQRzIECAAQRzIECAAQRzIECAAQR1DGA1jgBGD5BWgAcAN4AIABlwGIAakCkgEDMC4ymAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=psy-ab&ved=0ahUKEwjStK6C6OrsAhXZFogKHQ4RDA4Q4dUDCA0&uact=5">#Client App(React, Vue등 ...)</a>
<a href="https://lodash.com/docs/4.17.15#debounce">#코드를 지연처리 할때 쓰는 함수명</a>

---

일반적으로 튕기지 않는 이라는 의미를 가진다.

Debounce 는 여러번 발생하는 이벤트에서, 가장 마지막 이벤트 만을 실행 되도록 만드는 개념이다.

예제 코드

```js
var debounce = null

function keyUpFn(el) {
  clearTimeout(debounce)

  debounce = setTimeout(() => {
    console.log('debounce', el.target.value, new Date().getTime())
  }, 500)
}

document.getElementById('search').addEventListener('keyup', keyUpFn)
```


위 예제에서 입력이 끝난 500ms 동안 동일한 이벤트가 계속해서 발생 한다면, <span style='color:#FFCC00; font-weight:bold;'>입력이 끝날때, 가장 마지막 이벤트만</span>을 실행하여, 성능성 유리함을 가져올 수 있다.
<a href="https://github.com/niksy/throttle-debounce">예제 코드</a>

