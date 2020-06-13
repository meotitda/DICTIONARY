# Invariant

원형 : invariant

의미  : 불변

발음 : 인베리언트

invariant는 variable(변수) 보다 좀 더 개념적(conceptual)입니다. 일반적으로, 이것은 <span style="color:#FFBF00; font-weight:bold;">항상 true인 프로그램 상태의 속성</span>입니다. 불변함을 보장하는 위한 함수 혹은 메소드는 invariant를 유지한다고 합니다.

예를 들어 binary search tree(이진 탐색트리)에는 모든 노드에 대해 노드의 왼쪽 자식 키가 노드 자신의 키보다 작은 것이 invariant를 가질 수도 있습니다.

예를 들어, 이진 검색 트리는 모든 노드에 대해 불변성(invariant)을 가질수 있는데 노드의 왼쪽 자식 키가 노드의 자체 키보다 작은 것이 그러합니다. (이진 탐색트리의 왼쪽 자식은 그 부모보다 항상 작은 값을 가진다.)

여러분이 알 수 있듯, <span style="color:#00FFCC; font-weight:bold;">당신의 변수에 저장할 수 있는 종류의 것은 아닙니다.</span> (개념적이다):


As you can tell, that's not the sort of thing you can store in a variable: it's more a statement about the program. By figuring out what sort of invariants your program should maintain, then reviewing your code to make sure that it actually maintains those invariants, you can avoid logical errors in your code.

([참고](https://stackoverflow.com/questions/112064/what-is-an-invariant))

## 관련 기술
1. 예시 1

2. 예시 2

