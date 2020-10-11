---
title: Dispatch
label: [Common,Frontend,Backend]
origin: Dispatch
pronunciation: 디스패치
mean: 보내다
relation: [javascript의dispatchEvent ,Reduxdispatch ,staticdispatch와dynamicdispatch ]
slug: /D/Dispatch
---

<content>


<ol>
<li><p>프로그램이 어떤 메소드를 호출할 것인가를 결정하여 그것을 실행하는 과정을 말한다.</p></li>
<li><p>일단 Message에 대해서 알아보자.<br />
메시지는 보통 인자와 같은 추가적인 오브젝트와 함께 하나의 오브젝트에서 또 다른 오브젝트로 보내질 수 있는 것이다.<br />
예를 들면 다음과 같다.</p></li>
</ol>
<pre><code>account withdraw: 100</code></pre>
<p>여기서 <code>withdraw</code> 가 메시지입니다. ( 보통 프로그래밍 언어에서는 account.withdraw(100)처럼 쓰여지는거 같아요. )</p>
<p>메시지를 수신하는 객체를 수신자(receiver) 라고 부르고 여기선 <code>account</code>가 그 역할입니다.</p>
<p>메소드는 메시지에 대한 응답으로 호출 할 수있는 구현체입니다.</p>
<p>이러한 아이디어는 다른 이름으로 다양한 객체 지향 언어에서 공유됩니다. 예를 들어, C ++는 메시지를 'virtual member function'라고 부릅니다.</p>
<p>메소드 디스패치는 <span style="color:#FFBF00; font-weight:bold;">메시지에 응답하여 호출 할 메소드를 결정</span>하는 데 사용되는 알고리즘입니다. 알고리즘은 언어마다 크게 다릅니다.</p>
<p>(<a href="https://stackoverflow.com/questions/1805510/what-is-method-dispatch">참고 - 스택오버플로우</a>)</p>
<ol start="3">
<li>어딘가에 무엇을 보내는 행위<br />
(<a href="https://medium.com/ingeniouslysimple/static-and-dynamic-dispatch-324d3dc890a3">참고 - 미디엄</a>)</li>
</ol>


</content>
