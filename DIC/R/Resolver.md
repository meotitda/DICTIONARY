<d-title>

# Resolver (Resolve)

</d-title>

<d-label>

<d-inner>

![Frontend](../2TAT1C/Label_Frontend.png)

</d-inner>

<d-inner>

![Backend](../2TAT1C/Label_Backend.png)

</d-inner>

</d-label>

<d-origin>

원형 : Resolve

</d-origin>

<d-mean>

의미 : 해결하다.

</d-mean>

<d-pronunciation>

발음 : 리졸버

</d-pronunciation>

<d-content>

값을 제공 받고, 그에 대한 응답을 제공하는 기능 및 함수.

</d-content>

<d-relation>

## 관련 기술

<d-inner>

1. DNS

</d-inner>

> 리졸버라고도하는 DNS 리졸버는 <span style="color:#FFBF00; font-weight:bold;">도메인 이름을 IP 주소로 변환</span>하는 인터넷상의 서버입니다.

<d-inner>

2. Graphql Resolver

</d-inner>

> 리졸버는 <span style="color:#FFBF00; font-weight:bold;">GraphQL 쿼리에 대한 응답을 생성</span>하는 함수 모음입니다. 간단히 말하면, 리졸버는 <span style="color:#FFBF00; font-weight:bold;">GraphQL 쿼리 핸들러</span> 역할을합니다.

<d-inner>

3. Javascript Resovle

</d-inner>

```js
var _promise = function (param) {
  return new Promise(function (resolve, reject) {
    window.setTimeout(function () {
      if (param) {
        resolve('Success')
      } else {
        reject(Error('Fail'))
      }
    }, 3000)
  })
}

_promise(true).then(
  function (text) {
    console.log(text) // Success
  },
  function (error) {
    console.error(error)
  },
)

_promise(false).then(
  function (text) {
    console.log(text)
  },
  function (error) {
    console.error(error) // Fail
  },
)
```

</d-relation>
