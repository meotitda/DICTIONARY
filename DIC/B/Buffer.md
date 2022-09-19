# Buffer

![Common](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Common.png)
![Backend](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Backend.png)

<a href="https://tk-one.github.io/2018/08/28/nodejs-buffer/">#Nodejs_Buffer</a>

---

Buffer는 `서버에 부담을 주지 않기 위해 임시로 데이터를 저장하는 공간`입니다.

통신할 때 상대 컴퓨터에 한번에 너무 많은 데이터를 전송하거나, 전송 속도보다 상대 컴퓨터의 처리 속도가 느린 경우 상대 컴퓨터에 부하가 생길 수 있고 이 과정에서 데이터가 손실될 수 있습니다. 이런 문제를 방지하기 위해 데이터 통신할 때 데이터를 전송하는 쪽에서는 Buffer라는 완충재를 두어서 상대 컴퓨터에 부담이 되지 않도록 Buffer에 조금씩 모아서 전송합니다. 

통신 뿐만 아니라 컴퓨터 자체에서 연산을 수행할 때도 연산 비용이 크거나 너무 잦은 연산이 실행되는 경우 컴퓨터에 부담이 될 수 있으므로 Buffer를 사용합니다. 

이런 의미에서 서버에서 처리할 때 까지 데이터를 쌓아놓고 기다리는 `대기열 큐(queue)`도 Buffer의 일종입니다. 

스트리밍 영상의 경우에도 데이터의 용량이 크기 때문에 한번에 모두 전송하지 않고 Buffer를 사용해 조금씩 나눠 보냅니다. 유튜브에서 로딩할 때 시간이 걸리면 '버퍼링이 걸린다'고도 하는데, 버퍼를 사용해 데이터를 나눠서 전송하는 것을 `버퍼링`이라고도 합니다.
