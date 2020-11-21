const fs = require('fs') 
const path = require('path')
const { argv } = require('process')

if(!argv[2]) {
   throw new Error(`
      파일명을 입력해주세요.
      ex)
      node new.js (파일명)
   `)
}

const fileName = capitalize(argv[2])

const example = `
# ${fileName}

![Common](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Common.png)
![Frontend](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Frontend.png)
![Backend](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Backend.png)
![Database](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Database.png)
![Devops](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Devops.png)

<a href="">#해시태그</a>

---

샘플 내용입니다.

반드시 DICTIONARY는 타이틀 > 라벨 > 해시태크 > 내용순으로 작성되어야 합니다.

타이틀에 #을 꼭 붙혀주세요.

라벨들 끼리는 줄바꿈이 이루워져야 합니다. 불필요한 라벨은 지워서 사용하시면 됩니다.
해시태크 역시 줄바꿈이 이루어져야 합니다.

내용을 입력할 때는 --- 로 내용의 시작을 알려야 합니다.

내용의 줄바꿈을 하려면 위의 내용처럼 빈 공백라인이 존재해야 합니다.

<a href="">내용에서 링크는 이렇게 추가합니다.</a>

<img src="">내용에서 이미지는 이렇게 추가합니다.

** 이미지 추가 시, 프로젝트 내에 추가해야 한다면 2TAT1C 파일에 넣어주세요.

` 

const prefix = fileName.charAt(0).toUpperCase()

const dir = `./DIC/${prefix}/${fileName}.md`

if (fs.existsSync(dir)) {
   throw new Error('이미 존재하는 파일입니다.')
}

fs.writeFileSync(dir, example)

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(`${dir}가 생성되었습니다!`)