---
title: Token
label: [Backend]
origin: token
pronunciation: 토큰
mean: 티켓
relation: []
slug: /T/Token
---

<content>


<p>토큰은 <span style='color:#FFCC00; font-weight:bold;'>
파싱 목적</span>을 위해 분류화를 명시적으로 지시하는 어휘소를 표현하는 구조의 하나이다.</p>
<p>어휘 토큰 혹은 심플한 토큰이라함은 할당되어 있거나 식별된 <span style='color:#FFCC00; font-weight:bold;'>의미를 가진 문자열</span> 입니다. 이것은 한쌍의 토큰 네임과 선택적인 토큰 값으로 구성됩니다. 토큰 이름은 어휘 단위의 카테고리입니다. 일반적으로 토큰 이름들은 다음과 같습니다.</p>
<ul>
<li>identifier: 프로그래머가 선택한 이름</li>
<li>keyword: 프로그래밍 언어가 이미 선택한 이름</li>
<li>separator (punctuators): 문장 부호 문자 그리고 한 쌍인 구분기호</li>
<li>operator: 인자들과 계산 결과를 생성하는 기호</li>
<li>literal: 숫자, 논리, 텍스트, 참조 리터럴</li>
<li>comment: 라인, 블럭, 주석</li>
</ul>
<p>토큰 값의 예</p>
<table>
<thead>
<tr>
<th id="token_name">Token name</th>
<th id="sample_token_values">Sample token values</th>
</tr>
</thead>
<tbody>
<tr>
<td>identifier</td>
<td>x, color, UP</td>
</tr>
<tr>
<td>keyword</td>
<td>if, while, return</td>
</tr>
<tr>
<td>separator</td>
<td>}, (, ;</td>
</tr>
<tr>
<td>operator</td>
<td>+, &lt;, =</td>
</tr>
<tr>
<td>literal</td>
<td>true, 6.02e23, "music"</td>
</tr>
<tr>
<td>comment</td>
<td>/_ Retrieves user data _/, // must be negative</td>
</tr>
</tbody>
</table>
<p>C프로그래밍에서는 다음과 같다.</p>
<pre><code>x = a + b * 2;</code></pre>
<p>이 표현식의 어휘 분석은 다음 순서의 토큰을 생성합니다.</p>
<pre><code>[
    (identifier, x), (operator, =), (identifier, a), (operator, +), (identifier, b), (operator, *), (literal, 2), (separator, ;)
]</code></pre>
<p><a href="https://en.wikipedia.org/wiki/Lexical_analysis#Token">위키 백과</a></p>


</content>
