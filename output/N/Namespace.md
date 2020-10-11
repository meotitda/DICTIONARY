---
title: Namespace
label: [Backend]
origin: namespace
pronunciation: 네임스페이스
mean: 네임스페이스
relation: []
slug: /N/Namespace
---

<content>


<p>컴퓨팅에서 네임 스페이스는 다양한 종류의 객체를 식별하고 참조하는 데 사용되는 일련의 기호 (이름)입니다. 네임 스페이스는 주어진 모든 개체 집합이 <span style="color:#FFBF00; font-weight:bold;">고유한 이름을 가지므로</span> 쉽게 식별 할 수 있습니다.</p>
<p>프로그래밍 언어에서 Namespace</p>
<pre><code class="c++ language-c++">#include &lt;iostream&gt;

// This is how one brings a name into the current scope.  In this case, it's
// bringing them into global scope.
using std::cout;
using std::endl;

namespace box1 {
    int box_side = 4;
}

namespace box2 {
    int box_side = 12;
}

int main() {
    int box_side = 42;
    cout &lt;&lt; box1::box_side &lt;&lt; endl;  // Outputs 4.
    cout &lt;&lt; box2::box_side &lt;&lt; endl;  // Outputs 12.
    cout &lt;&lt; box_side &lt;&lt; endl;  // Outputs 42.
}</code></pre>
<p>이름 공간(namespace)은 그 안에서 선언된 기호(변수, 클래스, 함수 등)들을 유일한 범위에 두게하는 선언영역(declarative region)이다. 선언된 심벌을 namespace와 연관시킴으로써, 그렇지 않으면 발생할지도 모르는 <span style="color:#FFBF00; font-weight:bold;">이름 충돌(naming conflict)을 피할 수</span> 있다. </p>
<p>[출처] namespace란|작성자 고경삼</p>
<p>(<a href="https://en.wikipedia.org/wiki/Namespace">위키 백과</a>)</p>


</content>
