---
title: Coherence
label: [Common]
origin: Coherence
pronunciation: 코히런스
mean: 통일, 일관성
relation: [캐시 ]
slug: /C/Coherence
---

<content>


<h2 id="memory-coherence">Memory Coherence</h2>
<p>Memory Coherence 두 개 이상의 프로세서 또는 코어가 공통 메모리 영역을 공유하는 컴퓨터 시스템 설계에 영향을 미치는 문제입니다. </p>
<p>단일 프로세서 시스템에서 (오늘날 용어에는 하나의 코어 만 있음) 모든 작업을 수행하는 처리 요소는 하나뿐이므로 지정된 메모리 위치에서 읽거나 쓸 수있는 처리 요소는 하나뿐입니다. 결과적으로, 값이 변경되면 해당 메모리 위치의 모든 후속 읽기 조작은 캐시 된 경우에도 업데이트 된 값을 보게됩니다.</p>
<p>반대로, 다중 프로세서 (또는 멀티 코어) 시스템에는 동시에 작동하는 둘 이상의 처리 요소가 있으므로 동일한 메모리 위치에 동시에 액세스 할 수 있습니다. 이 위치의 데이터를 변경하지 않으면 무기한 공유하고 원하는대로 캐시 할 수 있습니다. 그러나 사용자가 위치를 업데이트하자마자 다른 사용자는 예를 들어 로컬 캐시에있는 오래된 복사본으로 작업 할 수 있습니다. 결과적으로 모든 처리 요소에 공유 값의 변경 사항을 알리려면 일부 체계가 필요합니다. 이러한 방식은 메모리 일관성 프로토콜 (memory coherence protocol)로 알려져 있으며, 이러한 프로토콜이 채택되면 시스템은 일관성있는 메모리를 갖는다 고한다.<br />
(<a href="https://en.wikipedia.org/wiki/Memory_coherence">참고 - 위키피디아</a>)</p>
<h2 id="cache-coherence">Cache Coherence</h2>
<p>캐시 일관성(영어: cache coherence)이란 공유 메모리 시스템에서 각 클라이언트(혹은 프로세서)가 가진 로컬 캐시 간의 일관성을 의미한다.</p>
<p><img src="../2TAT1C/Coherence_1.png" alt="일관성" /></p>
<p>각 클라이언트가 자신 만의 로컬 캐시를 가지고 다른 여러 클라이언트와 메모리를 공유하고 있을 때, 캐시의 갱신으로 인한 데이터 불일치 문제가 발생한다. 예를 들어 변수 X에 대해서 두 클라이언트가 변수 X를 공유하고 있고 그 값이 0이라고 하자. 이때 클라이언트 1(그림의 윗쪽)이 X에 1을 대입하였고 클라이언트 2(그림의 아래쪽)가 변수 X를 읽어들이게 되면 클라이언트 2는 클라이언트 1에 의해 수정된 값인 1을 받아들이는 것이 아니라 현재 자신의 로컬 캐시에 있는 0을 읽어들이게 된다. 따라서 캐시 1, 2는 같은 X라는 변수에 대해 다른 값을 가지게 되므로 데이터 불일치 문제가 발생한다. 캐시 일관성을 유지한다고 하는 것은 이러한 데이터 불일치 현상을 없애는 것을 의미한다.<br />
(<a href="https://ko.wikipedia.org/wiki/%EC%BA%90%EC%8B%9C_%EC%9D%BC%EA%B4%80%EC%84%B1">참고 - 위키피디아</a>)</p>


</content>