<d-title>

# Serialize

</d-title>

<d-label>

<d-inner>

![Backend](../../2TAT1C/Label_Backend.png)

</d-inner>

</d-label>

<d-origin>

원형 : Serialize

</d-origin>

<d-mean>

의미 : 직렬화, 연속으로 ~하다.

</d-mean>

<d-pronunciation>

발음 : 시리얼라이즈

</d-pronunciation>

<d-content>

특정 시스템 내부에서 사용되는 Object 또는 Data를 외부의 특정 시스템에서도 사용할 수 있도록 byte 형태로 데이터를 변환하는 기술.

직렬화(直列化) 또는 시리얼라이제이션(serialization)은 컴퓨터 과학의 데이터 스토리지 문맥에서 <span style="color:#FFBF00; font-weight:bold;">데이터 구조나 오브젝트 상태를 동일하거나 다른 컴퓨터 환경에 저장</span>(이를테면 파일이나 메모리 버퍼에서, 또는 네트워크 연결 링크 간 전송)하고 나중에 <span style="color:#FFBF00; font-weight:bold;">재구성할 수 있는 포맷으로 변환</span>하는 과정이다.

오브젝트를 직렬화하는 과정은 오브젝트를 마샬링한다고도 한다.[2] 반대로, 일련의 바이트로부터 데이터 구조를 추출하는 일은 역직렬화 또는 디시리얼라이제이션(deserialization)이라고 한다.
([위키 백과](https://ko.wikipedia.org/wiki/%EC%A7%81%EB%A0%AC%ED%99%94))

</d-content>

<d-relation>

## 관련 기술

<d-inner>

1. 자바 직렬화

</d-inner>

> 자바 직렬화란 자바 시스템 내부에서 사용되는 객체 또는 데이터를 외부의 자바 시스템에서도 사용할 수 있도록 바이트(byte) 형태로 데이터 변환하는 기술.

> 시스템적으로 이야기하자면 JVM(Java Virtual Machine 이하 JVM)의 메모리에 상주(힙 또는 스택)되어 있는 객체 데이터를 바이트 형태로 변환하는 기술과 직렬화된 바이트 형태의 데이터를 객체로 변환해서 JVM으로 상주시키는 형태.

> CSV, JSON ,ORM 등 다른 포멧의 값으로 데이터를 변환하여 추출할 때 사용

<d-inner>

2. Django Serialize

</d-inner>

> 자바와 동일

<d-inner>

3. DeSerialize 역직렬화

</d-inner>

> 직렬화의 반대 개념. 언어 차원에서 쓰려고 만든 직렬화된 데이터를 다시 원래의 객체구조로 변형시키는 것.

<d-inner>

4. passport js

</d-inner>

> 참고 : http://www.passportjs.org/

<d-inner>

5. parser

</d-inner>

</d-relation>
