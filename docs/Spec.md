# DICTIONARY SPEC DEFINITION
해당 페이지에서는 DICTIONARY에서 필요한 스펙을 정의합니다.

[1.Syntax](#Syntax)

[2.File Location](#File-Location)


## Syntax

### Word [Required]

**Description**

단어 명을 나타냅니다.

**resolution**

```markdown
# Word
```

1. `#`으로 시작합니다.
2. 하나 이상의 공백이 존재합니다.
3. 공백 뒤에 단어가 존재합니다.
4. 줄바꿈과 함께 종료 됩니다.

**Restrictions**

하나의 문서에는 하나의 `WORD` 만 가질 수 있습니다. 만약 두 개 이상이라면 `Duplicate Error` 가 발생합니다.

### Label [Optional]

**Description**

단어의 카테고리를 나타냅니다.

**resolution**

```markdown
![Common](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Common.png)
```

1. `![카테고리](카테고리_이미지)` 인 경우에만 허용합니다.
이 때 `카테고리` 및 `카테고리_이미지` 는 아래와 같은 타입이 존재합니다.
    
    
    | 카테고리  | 카테고리_이미지 |
    | --- | --- |
    | Common | https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Common.png |
    | Frontend | https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Frontend.png |
    | Backend | https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Backend.png |
    | Batabase | https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Database.png |
    | Devops | https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Devops.png |
2. 다음 `Label` 은 줄바꿈으로 구분합니다.

**Restrictions**

중복된 `Label` 은 허용하지 않습니다. 만약 중복된 라벨이 존재한다면,  `Duplicate Error` 가 발생합니다.

### Tag [Optional]

**Description**

단어에 연관된 다른 키워드 혹은 정보를 나타냅니다.

**resolution**

```markdown
<a href="https://github.com/meotitda/DICTIONARY">#딕셔너리</a>
```

1. 기본적으로 html의 [a tag syntax](https://html.spec.whatwg.org/#the-a-element) 를 따릅니다.
2. 자식 텍스트 노드는 아래와 같이 해석합니다.
    
     1. a 태그 종료를 나타내는 닫는 꺽쇠(`>`) 다음 `#` 가 존재합니다.
    
    1. `Tag`명이 존재합니다. 
    2.  열린 꺽쇠(`<`)가 나오면 `Tag` 명을 종료 합니다.
3. 다음 `Tag` 는 줄바꿈으로 구분합니다.

**Restrictions**

 

### Body [Required]

**Description**

단어의 설명을 나타냅니다.

**resolution**

```markdown
---
단어의 내용
```

1. 수평선을 나타내는 `---` 로 시작합니다. 그 외 `* * *` 와 같은 다른 수평선은 허용하지 않습니다.
2. 수평선 이후에 하나 이상의 줄바꿈이 존재합니다.
3. 단어의 내용이 존재합니다. `Body` 는 종료문이 별도로 없기 때문에 위의 문법들은 모두 단어의 내용으로 해석됩니다.

**Restrictions**

문서 내에 Body는 필수 입니다. Body가 존재하지 않는다면 `Non Body Error` 가 발생합니다.

## File Location

각각의 단어들은 DIC 디렉토리의 내 단어의 첫번째 알파벳 디렉토리에 위치합니다.

예시) Example.md
```
./DIC/E/Example.md
```

