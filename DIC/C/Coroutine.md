<d-title>

# Coroutine

</d-title>

<d-label>

<d-inner>

![Backend](../2TAT1C/Label_Backend.png)

</d-inner>

</d-label>

<d-origin>

원형 : Coroutine(Concurrency Routine)

</d-origin>

<d-mean>

의미 : 동시적인 반복적인 틀

</d-mean>

<d-pronunciation>

발음 : 코루틴

</d-pronunciation>

<d-content>

코 루틴은 실행이 <span style='color:#FFCC00; font-weight:bold;'>**일시 중지되고 재개**</span> 될 수 있도록하여 <span style='color:#FFCC00; font-weight:bold;'>비선점형</span> 멀티 태스킹을 위해 서브 루틴을 일반화하는 컴퓨터 프로그램 구성 요소입니다. 코 루틴은 협력 작업, 예외, 이벤트 루프, 반복자, 무한 목록 및 파이프와 같은 친숙한 프로그램 구성 요소를 구현하는 데 적합합니다.
([위키 백과](https://en.wikipedia.org/wiki/Coroutine))

Example

```js
function TreeNode(val, left = EMPTY, right = EMPTY) {
  this.val = val
  this.left = left
  this.right = right
}
TreeNode.prototype[Symbol.iterator] = function* iterator() {
  yield* this.left
  yield this.val
  yield* this.right
}
```

</d-content>

<d-relation>

## 관련 기술

<d-inner>

1. C#, Javascript, Python의 Generator

</d-inner>

<d-inner>

2. Kotlin의 코루틴

</d-inner>

</d-relation>
