import os
import markdown2

key_words = ['---', '---']
reserved_words = {'title' : '', 'hashtag' : '', 'relation' : '', 'slug' : ''}
lines = []
contents = ''
CURSOR = 0

def open_file():
    with open("./DIC/_script.md", 'r', encoding = 'utf-8') as file:
        lines = file.readlines()
        
        create_CURSOR(lines)
        create_keywords(lines)
        
        make_reserved_words()
        make_contents(lines)
        

def create_CURSOR(lines):
    global CURSOR
    CURSOR_COUNT = 0    # 1보다 크면 Exception Erorr

    for i in range(len(lines)):
        if lines[i].find('---') != -1:
            CURSOR = i
            CURSOR_COUNT += 1

        
    
    return CURSOR

    

def create_keywords(lines):
    lines = list(map(lambda s: s.strip(), lines))

    for i in range(CURSOR):
        key_words.insert(-1, lines[i])

    return key_words

def make_contents(lines):
    global contents

    contents_temp_list = []
    contents_temp_str = ''

    for i in range(CURSOR + 1, len(lines)):
        contents_temp_list.append(lines[i])
    
    

    for j in range(len(contents_temp_list)):
        contents_temp_str += contents_temp_list[j]
    
    # md to html
    contents = markdown2.markdown(contents_temp_str)

    return contents

def make_reserved_words():
    create_title()
    create_hasgtag()
    create_relation()
    create_slug()

def create_title():
    title = ''
    title = key_words[1]
    title = title[1:].strip()

    reserved_words['title'] = title

    return reserved_words

def create_hasgtag():
    hashtag = ''
    LABEL_CURSOR = 0
    LABEL_COUNT_TEMP = 0

    hashtag_original = ['[Common]', '[Backend]', '[Frontend]', '[Database]', '[Devops]']
    hashtag_original_temp = hashtag_original
    hashtag_temp_list = []
    hashtag_temp_str = ''
    

    for i in range(len(key_words)):
        hashtag_temp_list = key_words[i]
        COUNT_TEMP = hashtag_temp_list.find('![')
    
        if COUNT_TEMP != -1:
            LABEL_CURSOR += 1

    if LABEL_CURSOR == 0:
        reserved_words['hashtag'] = ''
    
    else:
        for i in range(2, 2 + LABEL_CURSOR):
            hashtag_temp_str += key_words[i]

        for j in hashtag_original:
            if hashtag_temp_str.find(j) == -1:
                hashtag_original_temp.remove(j)
    
        hashtag = ''.join(hashtag_original_temp)
        hashtag = hashtag.replace('][', ', ')
        
        reserved_words['hashtag'] = hashtag

        return reserved_words

def create_relation():
    RELATION_CURSOR = 0
    key_words_temp_str = ''
    relation_temp_list = []
    relation = []

    key_words_temp_str = ''.join(key_words)
    RELATION_CURSOR = key_words_temp_str.count('<a href')
    

    if RELATION_CURSOR == 0:
        reserved_words['relation'] = ''
    
    else:
        relation_temp_list = key_words_temp_str.split('<a href')
        del relation_temp_list[0]

        for i in relation_temp_list:
            RELATION_CURSOR2 = i.find('>#')
                
            relation.append(i[RELATION_CURSOR2 + 2 : i.find('</a>')])
        
        reserved_words['relation'] = relation

        return(reserved_words)

def create_slug():
    slug = ''

    title = reserved_words['title']
    slug = title[0].upper() + '/' + title    # slug의 첫 문자는 대문자
    
    reserved_words['slug'] = slug

    return reserved_words

def make_output():
    file_title = reserved_words['title'].capitalize() + '.md'
    file_path = './output/' + reserved_words['slug'][0] + '/' + file_title
    complete_directory = './output/' + reserved_words['slug'][0]

    # folder 없을 시, 생성
    try:
        if not os.path.exists(complete_directory):
            os.makedirs(complete_directory)
        
    except OSError:
        print("Failed to create directory.")
    
    with open(file_path, 'w') as file:
        file.write(key_words[0] + '\n')
        file.write('title: ' + reserved_words['title'] + '\n')
        file.write('hashtag: ' + reserved_words['hashtag'] + '\n')
        file.write('relation: ' + str(reserved_words['relation']) + '\n')
        file.write('slug: ' + reserved_words['slug'] + '\n')
        file.write(key_words[-1] + '\n')
        file.write('---' + '\n')
        file.write(contents)
        
        file.close()

open_file()
make_output()
