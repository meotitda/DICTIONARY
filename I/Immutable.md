# Immutable

동사 원형 : Immutable

의미  : 불변의

발음 : 이뮤터블

객체 지향 프로그래밍에 있어서 불변객체(immutable object)는 생성 후 그 <span style="color:#FFBF00; font-weight:bold;">상태를 바꿀 수 없는 객체</span>를 말한다. 반대 개념으로는 가변(mutable) 객체로 생성 후에도 상태를 변경할 수 있다. 객체 전체가 불변인 것도 있고, C++에서 const 데이터 멤버를 사용하는 경우와 같이 일부 속성만 불변인 것도 있다. 또, 경우에 따라서는 내부에서 사용하는 속성이 변화해도 외부에서 그 객체의 상태가 변하지 않은 것 처럼 보인다면 불변 객체로 보기도 한다. 예를 들어, 비용이 큰 계산의 결과를 캐시하기 위해 메모이제이션(Memoization)을 이용하더라도 그 객체는 여전히 불변하다고 볼 수있다. 불변 객체의 초기 상태는 대개 생성 시에 결정되지만 객체가 실제로 사용되는 순간까지 늦추기도 한다.

불변 객체를 사용하면 <span style="color:#FFBF00; font-weight:bold;">복제나 비교를 위한 조작을 단순화 할 수 있고, 성능 개선에도 도움</span>을 준다. 하지만 객체가 변경 가능한 데이터를 많이 가지고 있는 경우엔 불변이 오히려 부적절한 경우가 있다. 이 때문에 많은 프로그래밍 언어에서는 불변이나 가변 중 하나를 선택할 수 있도록 하고 있다.

불변 객체는 <span style="color:#FFBF00; font-weight:bold;">객체를 복제할 때 객체 전체가 아니라 단순히 참조만 복사</span>하고 끝난다. 참조는 보통 객체 그 자체보다 훨씬 작아서(전형적으로 포인터 크기), <span style="color:#FFBF00; font-weight:bold;">메모리가 절감되며 프로그램의 성능</span>에도 좋다. 가변 객체는 참조 복사 기법으로 다루기 곤란하다. 이유는 가변 객체의 참조를 가지고 있는 어떤 장소에서 객체를 변경하면 참조를 공유하는 모든 장소에서 그 영향을 받기 때문이다. 이것이 의도한 동작이 아니라면 참조를 가지고 있는 다른 장소에 변경 사실을 통지하고 대처하는 추가 대응이 필요하다. 이런 경우 비용은 조금 들지만 참조가 아닌 객체 전체를 방어적 복사(defensive copy) 하는 간단한 방법으로 대응할 수 있다. 또는, Observer 패턴을 가변 객체의 변경에 대처하는 방법으로 사용할 수 있다.




.([위키백과](https://ko.wikipedia.org/wiki/%EB%B6%88%EB%B3%80%EA%B0%9D%EC%B2%B4)))

## 관련 기술
1. React Immutable
> React가 State를 비교하여 리렌더링 할 때, Immutable한 객체를 비교.

2. Javascript의 원시 타입(primitive data type)은 변경 불가능한 값(immutable value)이다.
> Primitive Type :
Boolean
null
undefined
Number
String
Symbol (New in ECMAScript 6)

```
ex) Immutable한 Number 값의 복사
a = 1
b = a
a = 2
a // 2
b // 1

** 값을 복사해서 a, b 값이 다름.

ex) mutable한 Object 값의 참조
a = { a : 1 }
b = a
a.a = 2

a // {a: 2}
b // {a: 2}

** 주소를 참조해서 a,b 모두 값이 바뀜
```