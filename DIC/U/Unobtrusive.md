<d-title>

# Unobtrusive

</d-title>

<d-label>

<d-inner>

![Frontend](../../2TAT1C/Label_Frontend.png)

</d-inner>

<d-inner>

![Backend](../../2TAT1C/Label_Backend.png)

</d-inner>

</d-label>

<d-origin>

원형 : Unobtrusive

</d-origin>

<d-mean>

의미  : <span style="color:#FFBF00; font-weight:bold;">눈에 거슬리지 않는</span>

</d-mean>

<d-pronunciation>

발음 : 어놉트루시브

</d-pronunciation>

<d-content>

코드를 레이어 단위로 분리됨을 의미하는 단어

Javascript Unobtrusive

Unobtrusive JavaScript는 웹 페이지에서 JavaScript를 접근하는 일반적인 방법입니다. 이 용어는 공식적으로 정의되어 있지는 않지만, 기본 원칙은 

1 .일반적으로 웹 페이지의 구조 / 콘텐츠 및 프리젠 테이션에서 기능 ("behavior layer")을 분리하여

2 지원하지 않을 수있는 사용자 에이전트와 JavaScript를 비활성화 한 사용자들을 지원하기 위함입니다.

예제

Separation of behavior from markup

```html
<input type="text" name="date" onchange="validateDate()" />
```

위의 코드는 behaviour and presentation가 섞여 있기 때문에 Unobtrusive 하지 않다.

```html
<input type="text" name="date" id="date" />

window.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('date').addEventListener("change", validateDate);
});
```

위의 코드는 Unobtrusive 하다.

([위키 백과](https://en.wikipedia.org/wiki/Unobtrusive_JavaScript))

</d-content>

<d-relation>

## 관련 기술

<d-inner>

1. Javascript

</d-inner>

<d-inner>

2. Passport js

</d-inner>

<d-inner>

3. 그 외 언어로 작성된 코드

</d-inner>

</d-relation>

