# yarn-plugin-d-runner

DIC내의 딕셔너리 컨텐츠를 파싱하는 플러그인입니다.

## 목차

- [실행](#실행)
- [옵션](#옵션)

## 실행

```
yarn d runner
```

## 옵션

### --output -o

파싱한 결과물을 단어(`IWord 타입`) 로 정규화하여 파일로 반환한다.

**실행**

```
yarn d runner --output ./output.json
```

**결과**

```json
//${cwd}/output.json
[{
   "title": "example",
   "labels": ["Common", "Frontend"],
   ...
}]
```
