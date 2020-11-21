# Unobtrusive

![Frontend](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Frontend.png)
![Backend](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Backend.png)

<a href="https://en.wikipedia.org/wiki/Unobtrusive_JavaScript">#Unobtrusive_JavaScript</a>
<a href="http://www.passportjs.org/">#passport.js</a>

---

<span style="color:#FFBF00; font-weight:bold;">눈에 거슬리지 않는</span>

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


