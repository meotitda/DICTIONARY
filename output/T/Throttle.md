---
title: Throttle
label: [Common,Frontend]
origin: Throttle
pronunciation: 쓰로틀
mean: 누르다
relation: [Debounce ,Client(React,Vue등...) ,Lodash ]
slug: /T/Throttle
---

<content>


<p>Throttle 는 입력 주기를 방해하지 않고, 일정 시간 동안의 입력을 모와서, 한번씩 출력을 제한한다.</p>
<p>예제 코드</p>
<pre><code class="js language-js">var throttle = null;
function keyUpFn(el) {
  if(!throttle) {
    setTimeout(() =&gt; {
      console.log('throttle', throttle, new Date().getTime());
      throttle = null;
    }, 500);
  }
  throttle = el.target.value;
}
document.getElementById("search").addEventListener('keyup', keyUpFn);</code></pre>
<p>(<a href="https://medium.com/@pks2974/throttle-%EC%99%80-debounce-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-2335a9c426ff">미디엄 <a href="https://github.com/pks2974">@pks2974</a>님 블로그</a>)</p>
<p>위 예제에서 <span style='color:#FFCC00; font-weight:bold;'>
500ms 동안 이벤트 실행을 막고</span>, 한번만 실행 때문에, 잦은 이벤트 발생을 막아 성능상의 유리함을 가져 올 수 있다.<br />
(<a href="https://github.com/niksy/throttle-debounce">github - 예제</a>)</p>


</content>
