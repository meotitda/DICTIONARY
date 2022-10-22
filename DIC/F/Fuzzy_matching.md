# Fuzzy matching

![Common](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Common.png)
![Backend](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Backend.png)
![Database](https://raw.githubusercontent.com/meotitda/DICTIONARY/master/2TAT1C/Label_Database.png)

<a href="https://www.google.com/search?sxsrf=ALeKk009Z7XYRHcARt118c8z7if0AFHVMw%3A1605538381477&ei=TZKyX-vmHMKSr7wPlsCl2A4&q=%EC%9C%A0%EC%82%AC+%EB%8B%A4%EC%96%B4+%EA%B2%80%EC%83%89&oq=%EC%9C%A0%EC%82%AC+%EB%8B%A4%EC%96%B4+%EA%B2%80%EC%83%89&gs_lcp=CgZwc3ktYWIQAzIHCCMQsAIQJzIECAAQDToECCMQJzoHCCMQyQMQJzoFCAAQywE6BAgAEEM6AggAOgcIABAUEIcCOgcIABAKEMsBOgIILjoFCC4QywE6BQgAEJECOgcIIxDqAhAnOgoIABCxAxAUEIcCOgUIABCxAzoICAAQsQMQgwE6BAgAEAM6BAgAEB46BggAEAUQHjoGCAAQCBAeOggIABANEAUQHlDEmAdYussHYJ_MB2gGcAB4A4ABtQGIAcgakgEEMC4yM5gBAKABAaoBB2d3cy13aXqwAQrAAQE&sclient=psy-ab&ved=0ahUKEwirwZrHqIftAhVCyYsBHRZgCesQ4dUDCA0&uact=5">#유사 단어 검색</a>
<a href="#">#찾으시는 단어가 이것인가요?</a>
<a href="https://www.google.com/search?sxsrf=ALeKk00EP61SMlS-OCYYTO97flHmVijGRQ%3A1605538377296&ei=SZKyX8nUEce6mAXj_a5Y&q=soundex+%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98&oq=soundex+%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98&gs_lcp=CgZwc3ktYWIQAzICCAA6BAgAEEc6BAgjECc6CAgAEMkDEMsBOgcIABAUEIcCOgQIABBDUP4QWPIZYNgaaANwAngDgAGaAYgBpwuSAQQwLjEwmAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=psy-ab&ved=0ahUKEwiJnZvFqIftAhVHHaYKHeO-CwsQ4dUDCA0&uact=5">#soundex</a>

---

흐린, 애매모호한이라는 뜻을 가진 Fuzzy와 matching가 만나 **애매모호한 매칭**이라는 뜻을 가진다.

Fuzzy matching 알고리즘(또한, 유사성 검색 알고리즘으로 알려짐)들은 철자 검사기와 구글(Google)과 얀덱스(Yandex) 완성된 검색 엔진의 근본을 이루고 있다. 예를 들어, 이 알고리즘들은 **검색 엔진에서 "당신은 ...을 검색하려고 했었나요?**" 와 같은 함수를 제공하는데 이용되어져 왔다.

oracle이나 postgresql에서는 soundex라는 검색 알고리즘 트랜잭션을 제공하는데, 이 역시 Fuzzy한 Search(Match)라고 할 수 있다.
