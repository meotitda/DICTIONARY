---
title: Coroutine
label: [Backend]
origin: Coroutine(Concurrency Routine)
pronunciation: 코루틴
mean: 동시적인 반복적인 틀
relation: [C,Javascript,Python의Generator ,Kotlin의코루틴 ]
slug: /C/Coroutine
---

<content>


<p>코 루틴은 실행이 <span style='color:#FFCC00; font-weight:bold;'><strong>일시 중지되고 재개</strong></span> 될 수 있도록하여 <span style='color:#FFCC00; font-weight:bold;'>비선점형</span> 멀티 태스킹을 위해 서브 루틴을 일반화하는 컴퓨터 프로그램 구성 요소입니다. 코 루틴은 협력 작업, 예외, 이벤트 루프, 반복자, 무한 목록 및 파이프와 같은 친숙한 프로그램 구성 요소를 구현하는 데 적합합니다.<br />
(<a href="https://en.wikipedia.org/wiki/Coroutine">위키 백과</a>)</p>
<p>Example</p>
<pre><code class="js language-js">function TreeNode(val, left = EMPTY, right = EMPTY) {
  this.val = val
  this.left = left
  this.right = right
}
TreeNode.prototype[Symbol.iterator] = function* iterator() {
  yield* this.left
  yield this.val
  yield* this.right
}</code></pre>


</content>
