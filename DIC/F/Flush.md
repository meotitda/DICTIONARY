<d-title>

# Flush

</d-title>

<d-label>

<d-inner>

![Backend](../../2TAT1C/Label_Backend.png)

</d-inner>

</d-label>

<d-origin>

원형 : Flush

</d-origin>

<d-mean>

의미  : 홍조, <span style="color:#FFBF00; font-weight:bold;">한꺼번에 쏟다, 붓다</span>

</d-mean>

<d-pronunciation>

발음 : 플러시

</d-pronunciation>

<d-content>

버퍼 flush란 일시적인 저장 공간에서 컴퓨터의 영구적인 메모리로 데이터를 전송하는 것입니다.

파일을 스트림으로 전송할 경우 i/o 횟수를 줄이기 위해 버퍼에 쌓았다가, 버퍼에 데이타가 쌓이면 한꺼번에 보냅니다. 예를 들어 C 이나 자바의 i/o관련 라이브러리 api를 보면 flush라는 메소드를 찾아볼 수 있습니다. IO시에 미처 전송되지 못한 데이터를 close() 전에 모두 전송하기 위해서 쓰이곤 합니다.

([에디터 API에서의 실제 사용 예제](https://github.com/ProseMirror/prosemirror-view/blob/3a8bed5b73ee8db94b34242b16b2098bff9a6707/src/input.js#L249))

</d-content>

<d-relation>

## 관련 기술

<d-inner>

1. IO 

</d-inner>

</d-relation>
