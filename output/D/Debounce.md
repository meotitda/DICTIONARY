---
title: Debounce
label: [Common,Frontend]
origin: Debounce
pronunciation: 디바운스
mean: 튕기지 않는
relation: [Throttle ,Client(React,Vue등...) ,Lodash ]
slug: /D/Debounce
---

<content>


<p>Debounce 는 여러번 발생하는 이벤트에서, 가장 마지막 이벤트 만을 실행 되도록 만드는 개념이다.</p>
<p>예제 코드</p>
<pre><code class="js language-js">var debounce = null

function keyUpFn(el) {
  clearTimeout(debounce)

  debounce = setTimeout(() =&gt; {
    console.log('debounce', el.target.value, new Date().getTime())
  }, 500)
}

document.getElementById('search').addEventListener('keyup', keyUpFn)</code></pre>
<p>(<a href="https://medium.com/@pks2974/throttle-%EC%99%80-debounce-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-2335a9c426ff">미디엄 <a href="https://github.com/pks2974">@pks2974</a>님 블로그</a>)</p>
<p>위 예제에서 입력이 끝난 500ms 동안 동일한 이벤트가 계속해서 발생 한다면, <span style='color:#FFCC00; font-weight:bold;'>입력이 끝날때, 가장 마지막 이벤트만</span>을 실행하여, 성능성 유리함을 가져올 수 있다.<br />
(<a href="https://github.com/niksy/throttle-debounce">github - 예제</a>)</p>


</content>
