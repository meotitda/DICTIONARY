import os
import markdown2
import copy
import sys
from os import listdir
from os.path import isfile, join


keywords = ['---', '---']
reserved_words = {'title' : '', 'label' : '', 'hashtag' : '', 'slug' : ''}
lines = []
contents = ''
CURSOR = 0

class Error(Exception):
    pass

class ContentsSplitError(Error):
    def __init__(self, message):
        self.message = message

class TitleError(Error):
    def __init__(self, message):
        self.message = message

class LabelReduplicationError(Error):
    def __init__(self, message):
        self.message = message

class LabelTypoError(Error):
    def __init__(self, message):
        self.message = message

class HashtagTypoError(Error):
    def __init__(self, message):
        self.message = message

def inspect_file(path):
    with open(path, 'r', encoding = 'utf-8') as file:
        lines = file.readlines()
        
        create_CURSOR(lines)
        create_keywords(lines)
        
        make_reserved_words()
        make_contents(lines)

def make_reserved_words():
    create_title()
    create_label()
    create_hashtag()
    create_slug()

def make_contents(lines):
    global contents

    contents_temp_list = []
    contents_temp_str = ''

    for i in range(CURSOR + 1, len(lines)):
        contents_temp_list.append(lines[i])
    
    for j in range(len(contents_temp_list)):
        contents_temp_str += contents_temp_list[j]
 
    contents = markdown2.markdown(contents_temp_str)

    return contents

def create_CURSOR(lines):
    global CURSOR
    CURSOR_COUNT = 0

    for i in range(len(lines)):
        if lines[i].find('---') != -1:
            CURSOR = i
            CURSOR_COUNT += 1

    if CURSOR == 0:
        raise ContentsSplitError("[%s file Error] 내용을 나누는 '---'과 같은 구분자는 필수입니다." % reserved_words['title'])

    return CURSOR

def create_keywords(lines):
    lines = list(map(lambda s: s.strip(), lines))

    for i in range(CURSOR):
        keywords.insert(-1, lines[i])

    return keywords

def create_title():
    keywords_temp_list = copy.copy(keywords)

    delete_NULL_in_list(keywords_temp_list)

    title = ''
    title = keywords_temp_list[1]
    title = title[1:].strip()

    if title == '':
        raise TitleError('[%file Error] 제목이 없습니다.' % reserved_words['title'])

    reserved_words['title'] = title

    return reserved_words

def create_label():
    label = ''
    label_list = []
    label_original = [
        '[Common]', 
        '[Frontend]', 
        '[Backend]', 
        '[Database]', 
        '[Devops]']

    keywords_str = ''.join(keywords)

    for i in label_original:
        if keywords_str.count(i) > 1:
            raise LabelReduplicationError('[%s file Error] label에 중복이 있습니다.' % reserved_words['title'])
            
        elif keywords_str.count(i) == 1:
            label_list.append(i)
    
    if len(label_list) != keywords_str.count('!['):
        raise LabelTypoError('[%s file Error] label에 오타가 있습니다.' % reserved_words['title'])

    elif len(label_list) == 0:
        print("[확인] label이 없습니다.")

        reserved_words['label'] = ''

        return reserved_words
    
    else:
        label = ''.join(label_list)    
        label = label.replace('][', ', ')

        reserved_words['label'] = label

        return reserved_words

def delete_NULL_in_list(keywords):
    NON_COUNT = keywords.count('')
    
    if NON_COUNT == 0:
        return
        
    while NON_COUNT > 0:
        NON_COUNT -= 1
        keywords.remove('')
    
    return keywords

def create_hashtag():
    hashtag = []
    hashtag_temp_list = []
    label_original = [
        '[Common]', 
        '[Frontend]', 
        '[Backend]', 
        '[Database]', 
        '[Devops]']

    keywords_temp_list = copy.copy(keywords)

    delete_NULL_in_list(keywords_temp_list)
    del keywords_temp_list[-1]
    del keywords_temp_list[1]
    del keywords_temp_list[0]

    for i in label_original:
        for j in keywords_temp_list:
            if j.find(i) != -1:
                keywords_temp_list.remove(j)
    
    keywords_temp_str = ''.join(keywords_temp_list)
    HASHTAG_CURSOR = keywords_temp_str.count('<a href')

    if HASHTAG_CURSOR != len(keywords_temp_list):
       raise HashtagTypoError('[%s file Error] hashtag에 오타가 있습니다.' % reserved_words['title'])

    elif HASHTAG_CURSOR == 0:
        print("[확인] hashtag가 없습니다.")
        reserved_words['hashtag'] = ''
        
        return reserved_words
    
    else:
        hashtag_temp_list = keywords_temp_str.split('<a href')
        del hashtag_temp_list[0]

        for i in hashtag_temp_list:
            HASHTAG_CURSOR2 = i.find('>#')
            hashtag.append(i[HASHTAG_CURSOR2 + 2 : i.find('</a>')])
        
        reserved_words['hashtag'] = hashtag

        return(reserved_words)

def create_slug():
    slug = ''

    title = reserved_words['title']
    slug = title[0].upper() + '/' + title
    
    reserved_words['slug'] = slug

    return reserved_words

def make_output(path):
    if path is None:
        return
    
    file_title = reserved_words['title'].capitalize() + '.md'
    file_path = path + '/' + reserved_words['slug'][0] + '/' + file_title
    complete_directory = path + '/' + reserved_words['slug'][0]

    try:
        if not os.path.exists(complete_directory):
            os.makedirs(complete_directory)
        
    except OSError:
        print("Failed to create directory.")
    
    with open(file_path, 'w') as file:
        file.write(keywords[0] + '\n')
        file.write('title: ' + reserved_words['title'] + '\n')
        file.write('label: ' + reserved_words['label'] + '\n')
        file.write('hashtag: ' + str(reserved_words['hashtag']) + '\n')
        file.write('slug: ' + reserved_words['slug'] + '\n')
        file.write(keywords[-1] + '\n')
        file.write('---' + '\n')
        file.write(contents)

mypath = './DIC'

output_path = './dictionary-client/src/markdown-pages' if len(sys.argv) > 1 and sys.argv[1] == 'production' else './output' if len(sys.argv) > 1 and sys.argv[1] == 'debug' else None
alpabets = listdir(mypath)

for alpabet in alpabets:
    dir_path = mypath+"/"+alpabet
    file_names = listdir(mypath+"/"+alpabet)
    for file_name in file_names:
        print(file_name + ' -> start')
        keywords = ['---', '---']
        inspect_file(dir_path+"/"+file_name)
        print(file_name + ' -> complete')
        make_output(output_path)