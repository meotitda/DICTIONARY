
# Coroutine

![Backend](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Backend.png)

<a href="https://www.google.com/search?sxsrf=ALeKk03zog5lS3DHG1ukJ-Oe8vo_x_CCrw%3A1604558151428&ei=R52jX_HlGY62mAWMkqWABA&q=coroutines+Generator%EB%9E%80&oq=coroutines+Generator%EB%9E%80&gs_lcp=CgZwc3ktYWIQAzIECAAQRzIECAAQRzIECAAQRzIECAAQRzIECAAQRzIECAAQRzIECAAQRzIECAAQR1DLGViYG2C5HGgAcAJ4AIABmgGIAa4CkgEDMC4ymAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=psy-ab&ved=0ahUKEwixpYz15OrsAhUOG6YKHQxJCUAQ4dUDCA0&uact=5">#C#, Javascript, Python의 Generator</a>
<a href="https://www.google.com/search?sxsrf=ALeKk00vOZcf7yh2ZaOiTap_bDrwMrJDDQ%3A1604558155857&ei=S52jX8qBNPyKr7wP2bmv-A0&q=Kotlin%EC%9D%98+Coroutine&oq=Kotlin%EC%9D%98+Coroutine&gs_lcp=CgZwc3ktYWIQAzIECAAQRzIECAAQRzIECAAQRzIECAAQRzIECAAQRzIECAAQRzIECAAQRzIECAAQR1D9b1j9b2DbcGgAcAV4AIABAIgBAJIBAJgBAKABAqABAaoBB2d3cy13aXrIAQjAAQE&sclient=psy-ab&ved=0ahUKEwiK05r35OrsAhV8xYsBHdncC98Q4dUDCA0&uact=5">#Kotlin의 Coroutine</a>

---

일반적으로 Coroutine는 동시적인, 반복적인 틀이라는 뜻입니다.

Coroutine은 실행이 <span style='color:#FFCC00; font-weight:bold;'>**일시 중지되고 재개**</span> 될 수 있도록하여 <span style='color:#FFCC00; font-weight:bold;'>비선점형</span> 멀티 태스킹을 위해 서브 루틴을 일반화하는 컴퓨터 프로그램 구성 요소입니다. Coroutine은 협력 작업, 예외, 이벤트 루프, 반복자, 무한 목록 및 파이프와 같은 친숙한 프로그램 구성 요소를 구현하는 데 적합합니다.
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
