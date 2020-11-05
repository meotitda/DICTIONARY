# Resolver(Resolve)

![Frontend](../../2TAT1C/Label_Frontend.png)
![Backend](../../2TAT1C/Label_Backend.png)

<a href="">#DNS</a>
<a href="https://www.apollographql.com/docs/apollo-server/data/resolvers/">#Graphql Resolver</a>
<a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve#:~:text=Promise.resolve(value)%20%EB%A9%94%EC%84%9C%EB%93%9C,%ED%94%84%EB%A1%9C%EB%AF%B8%EC%8A%A4%EA%B0%80%20%EB%B0%98%ED%99%98%EB%90%A9%EB%8B%88%EB%8B%A4.">#Javascript Promise</a>

일반적으로 해결하다. 라는 뜻을 가지고 있습니다.

프로그래밍에서는 값을 제공 받고, 그에 대한 응답을 제공하는 기능 및 함수를 의미하는데, 여러 분야에서 다양하게 사용되고 있습니다.

<h3>DNS</h3>

DNS Resolver는 <span style="color:#FFBF00; font-weight:bold;">도메인 이름을 IP 주소로 변환</span>하는 인터넷상의 서버입니다.

<h3> Grahpql </h3>
<span style="color:#FFBF00; font-weight:bold;">GraphQL 쿼리에 대한 응답을 생성</span>하는 함수 모음입니다. 간단히 말하면, Resolver는 <span style="color:#FFBF00; font-weight:bold;">GraphQL 쿼리 핸들러</span> 역할을합니다.

<h3>Javascript Promise Resovle</h3>

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