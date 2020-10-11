<d-title>

# Debounce

</d-title>

<d-label>

<d-inner>

![Common](../2TAT1C/Label_Common.png)

</d-inner>

<d-inner>

![Frontend](../2TAT1C/Label_Frontend.png)

</d-inner>

</d-label>

<d-origin>

원형 : Debounce

</d-origin>

<d-mean>

의미 : 튕기지 않는

</d-mean>

<d-pronunciation>

발음 : 디바운스

</d-pronunciation>

<d-content>

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

([미디엄 @pks2974님 블로그](https://medium.com/@pks2974/throttle-%EC%99%80-debounce-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-2335a9c426ff))

위 예제에서 입력이 끝난 500ms 동안 동일한 이벤트가 계속해서 발생 한다면, <span style='color:#FFCC00; font-weight:bold;'>입력이 끝날때, 가장 마지막 이벤트만</span>을 실행하여, 성능성 유리함을 가져올 수 있다.
([github - 예제](https://github.com/niksy/throttle-debounce))

</d-content>

<d-relation>

## 관련 기술

<d-inner>

1. Throttle

</d-inner>

<d-inner>

2. Client (React, Vue등 ...)

</d-inner>

<d-inner>

3. Lodash

</d-inner>

</d-relation>
