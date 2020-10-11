---
title: Hydrate
label: [Frontend,Backend,Database]
origin: hydrate
pronunciation: 하이드레이트
mean: 수화물
relation: [JavaObject ,ReactDomhydrate ,ORM ]
slug: /H/Hydrate
---

<content>


<p>일반적인 의미의 hydrate</p>
<p>객체를 Hydrating 한다는 것은 <span style="color:#FFBF00; font-weight:bold;">아직 어떤 도메인 데이터('진짜' 데이터)도 포함하지 않은 메모리에 존재하는 객체를 가져옵니다. 그런 후에 도메인 데이터(데이터베이스, 네트워크, 혹은 파일 시스템으로부터)를 채웁니다(Populate).</span></p>
<p>Erick Robertson( 마이크로소프트 IT Manager )에 댓글에 의하면</p>
<blockquote>
  <p><a href="https://github.com/MoonSupport/DICTIONARY/blob/master/S/Serialize.md">deserialization</a> == instantiation + hydration</p>
</blockquote>
<p>만약 치명적인 퍼포먼스에 걱정할 필요가 없고, 내부에 있는 데이터 액세스 API디버깅 퍼포먼스 최적화같은것을 하지 않는다면 아마 hydration를 다룰 필요는 없을 겁니다.<br />
여러분들은 전형적으로 deserialization를 대신해서 사용 할 것이고, 이로써 더 적은 코드를 작성할 수 있을 것입니다. 몇몇 데이터 접근 API는 이런 옵션을 주지 않는데, 그러한 케이스들은 명시적으로 hydration step을 불러야만 할 것입니다.</p>
<p>더 자세한 Hydration 컨셉은 Erick Robertson의 답변을 확인하세요</p>
<p>(<a href="https://stackoverflow.com/questions/6991135/what-does-it-mean-to-hydrate-an-object">참고 - 위키피디아</a>)</p>


</content>
