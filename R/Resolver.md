# Resolver, Resolve

동사 원형 : Resolve
의미  : 해결하다.
발음 : 리졸버

값을 제공 받고, 그에 대한 응답을 제공하는 기능 및 함수.


관련 기술
1. DNS
> 리졸버라고도하는 DNS 리졸버는 **도메인 이름을 IP 주소로 변환**하는 인터넷상의 서버입니다.

2. Graphql Resolver
> 리졸버는 **GraphQL 쿼리에 대한 응답을 생성**하는 함수 모음입니다. 간단히 말하면, 리졸버는 **GraphQL 쿼리 핸들러** 역할을합니다.

3. Javascript Resovle
```
var _promise = function (param) {
	return new Promise(function (resolve, reject) {
		window.setTimeout(function () {
			if (param) {
				resolve("Success");
			}
			else {
				reject(Error("Fail"));
			}
		}, 3000);
	});
};

_promise(true) 
.then(function (text) {
	console.log(text); // Success
}, function (error) {
	console.error(error);
});

_promise(false)
.then(function (text) {
	console.log(text);
}, function (error) {
	console.error(error);  // Fail
});
```
