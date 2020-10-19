<d-title>

# Chunk

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

<d-inner>

![Database](../../2TAT1C/Label_Database.png)

</d-inner>

<d-inner>

![Devops](../../2TAT1C/Label_Devops.png)

</d-inner>

</d-label>

<d-origin>

원형 : Chunk

</d-origin>

<d-mean>

의미 : <span style="color:#FFBF00; font-weight:bold;">덩어리</span>, 상당한 양 (단위로 사용)

</d-mean>

<d-pronunciation>

발음 : 청크

</d-pronunciation>

<d-content>

컴퓨터 프로그래밍에서 청크는 여러가지 의미를 가진다.

## 메모리 관리에서

일반적인 모던 소프트웨어 시스템에서 힙이라고 하는 자료구조로 부터 동적으로 메모리를 할당합니다.
메모리를 할당하고 비우기 위해 힙관리 루틴이 호출되어 집니다. 힙 관리는 약간의 계산시간이 필요하며 이것은 성능문제를 유발 할수 있습니다.
청킹은 상황의 특정정보를 사용하여 관련된 메모리 할당 <span style="color:#FFBF00; font-weight:bold;">요청을 집계해서 퍼포먼스 향상</span>을 위한 전략으로 나타내어 집니다.  
예를 들어, 특정 종류의 객체가 일반적으로 각 객체를 <span style="color:#FFBF00; font-weight:bold;">개별적으로 할당 및 해제하는 대신 힙 관리자를 16 번 호출하는 대신 8 개의 그룹으로</span> 필요하다는 것이 알려진 경우 8 개의 배열을 할당하고 해제 할 수 있습니다. 호출 횟수를 2로 줄입니다.

## HTTP 메시지 전송에서

청크는 HTTP 1.1프로토콜의 특별한 기능입니다. 메모리 관리에서와 별개의 의미를 지니는데,
불편하게 <span style="color:#FFBF00; font-weight:bold;">커다란 메시지를 더 작은 "덩어리"로 쪼개는 기능</span>을 나타냅니다.

## 데이터 중복 제거, 데이터 동기화 및 원격 데이터 압축

청킹은 <span style="color:#FFBF00; font-weight:bold;">청킹 알고리즘에 의해 파일을 청크라고하는 작은 조각으로 분할</span>하는 프로세스입니다. 스토리지에서 반복되는 데이터의 중복 사본을 제거하거나 변경된 청크 만 선택하여 네트워크를 통해 전송되는 데이터의 양을 줄일 수 있습니다. 롤링 해시와 같은 CDC (Content-Defined Chunking) 알고리즘과 그 변형은 지난 15 년간 가장 인기있는 데이터 중복 제거 알고리즘이었습니다

([참고 - 위키피디아](<https://en.wikipedia.org/wiki/Chunking_(computing)>))

</d-content>

<d-relation>

## 관련 기술

<d-inner>

1. 힙 메모리 관리

</d-inner>

<d-inner>

2. HTTP 메시지 전송

</d-inner>

<d-inner>

3. 데이터 중복 제거, 데이터 동기화

</d-inner>

<d-inner>

4. Javascript Library인 Lodash

</d-inner>

[Lodash-chunk](https://lodash.com/docs/4.17.15#chunk)

</d-relation>
