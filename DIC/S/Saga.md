# Saga

![Common](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Common.png)
![Frontend](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Frontend.png)
![Backend](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Backend.png)

<a href="https://learn.microsoft.com/ko-kr/azure/architecture/reference-architectures/saga/saga">#Saga</a>
<a href="https://learn.microsoft.com/ko-kr/azure/architecture/guide/architecture-styles/microservices">#MSA</a>
<a href="https://waspro.tistory.com/734">#분산트랜잭션</a>
<a href="https://meetup.toast.com/posts/136">#ReduxSaga</a>

---

Saga는 아이슬란드어로는 '역사', '말로 전하다'라는 뜻을 가지고 있습니다.

프로그래밍에서 Saga라 하면 '**일련의 작업들을 어떻게 관리할지**' 또는 '**일련의 작업을 수행하고, 만약 실패할 시 이전 작업들의 결과를 어떻게 처리할 지**'에 관한 방법입니다.

예를 들어 리덕스 사가에서는 dispatch를 통해 일련의 작업들을 트리거합니다. 한편, MSA에서의 Saga 패턴은 분산트랜잭션 처리 시 마이크로 서비스 간의 데이터 일관성을 관리하는 방법입니다. Saga는 이벤트를 전송해 다음 트랜잭션 단계를 트리거하는 일련의 트랜잭션입니다. 단계가 실패하면 Saga는 이전 트랜잭션 결과를 상쇄하는 보상 트랜잭션을 실행합니다.
