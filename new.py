import os.path                                         # 메소드 call을 위한 module불러오기
import sys

if len(sys.argv) < 2 :
   raise Exception('파일을 추가해주세요') 

fileName = sys.argv[1].capitalize()

example = """
# %s

![Common](../../2TAT1C/Label_Common.png)
![Frontend](../../2TAT1C/Label_Frontend.png)
![Backend](../../2TAT1C/Label_Backend.png)
![Database](../../2TAT1C/Label_Database.png)
![Devops](../../2TAT1C/Label_Devops.png)

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

""" % fileName

prefix = fileName[0]

dir = './DIC/%s/%s.md' % (prefix, fileName)

if os.path.exists(dir): 
   raise Exception('이미 존재하는 파일입니다.')


with open(dir, 'w') as file:
      file.write(example)

print('%s 가 생성되었습니다!' % dir)