<d-title>

# Dispatch

</d-title>

<d-label>

<d-inner>

![Common](../../2TAT1C/Label_Common.png)

</d-inner>

<d-inner>

![Frontend](../../2TAT1C/Label_Frontend.png)

</d-inner>

<d-inner>

![Backend](../../2TAT1C/Label_Backend.png)

</d-inner>

</d-label>

<d-origin>

원형 : Dispatch

</d-origin>

<d-mean>

의미 : <span style="color:#FFBF00; font-weight:bold;">보내다</span>, 신속히 해치우다.

</d-mean>

<d-pronunciation>

발음 : 디스패치

</d-pronunciation>

<d-content>

1. 프로그램이 어떤 메소드를 호출할 것인가를 결정하여 그것을 실행하는 과정을 말한다.

2. 일단 Message에 대해서 알아보자.
   메시지는 보통 인자와 같은 추가적인 오브젝트와 함께 하나의 오브젝트에서 또 다른 오브젝트로 보내질 수 있는 것이다.
   예를 들면 다음과 같다.

```
account withdraw: 100
```

여기서 `withdraw` 가 메시지입니다. ( 보통 프로그래밍 언어에서는 account.withdraw(100)처럼 쓰여지는거 같아요. )

메시지를 수신하는 객체를 수신자(receiver) 라고 부르고 여기선 `account`가 그 역할입니다.

메소드는 메시지에 대한 응답으로 호출 할 수있는 구현체입니다.

이러한 아이디어는 다른 이름으로 다양한 객체 지향 언어에서 공유됩니다. 예를 들어, C ++는 메시지를 'virtual member function'라고 부릅니다.

메소드 디스패치는 <span style="color:#FFBF00; font-weight:bold;">메시지에 응답하여 호출 할 메소드를 결정</span>하는 데 사용되는 알고리즘입니다. 알고리즘은 언어마다 크게 다릅니다.

([참고 - 스택오버플로우](https://stackoverflow.com/questions/1805510/what-is-method-dispatch))

3. 어딘가에 무엇을 보내는 행위
   ([참고 - 미디엄](https://medium.com/ingeniouslysimple/static-and-dynamic-dispatch-324d3dc890a3))

</d-content>

<d-relation>

## 관련 기술

<d-inner>

1. javascript의 dispatchEvent

</d-inner>

[dispatchEvent](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/dispatchEvent)를 통해 등록된 이벤트를 실행시킨다.

<d-inner>

2. Redux dispatch

</d-inner>

등록된 action을 호출시킨다.

<d-inner>

3. static dispatch와 dynamic dispatch

</d-inner>

[참고 - 미디엄](https://medium.com/ingeniouslysimple/static-and-dynamic-dispatch-324d3dc890a3)

</d-relation>
