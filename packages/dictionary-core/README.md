# @dictionary/core

dictionary 공통 모듈입니다.

## 목차

- [설치](#설치)
- [API](#api)

## 설치

```
yarn add @dictionary/core
```

## API

### Parser

dictionary 컨텐츠를 파싱하는 객체

---

**(static method) constructor**

```ts
const parser = new Parser();
```

**(method) parse(content: string)**

- Return: Tokens

**(method) nomalizeToken()**

- Return: IWord

**(method) searchTitle(content: string)**

- Return: TitleToken

**(method) searchLabels(content: string)**

- Return: LabelToken[]

**(method) searchTags(content: string)**

- Return: TagToken[]

**(method) searchBody(content: string)**

- Return: BodyToken

### IWord

정규화된 dictionary 결과 값

```ts
interface IWord {
  slug: string;
  title: string;
  labels: string[];
  tags: ITag[];
  body: string;
}

interface ITag {
  title: string;
  link: string;
}
```
