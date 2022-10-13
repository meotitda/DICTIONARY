const  fs = require("fs"); 
const path = require("path");
const { argv } = require("process");

const PROCESS_STATE = {
   SUCCESS : "success",
   ERROR : "ERROR",
   INFO : "info",
   WARNING : "warning",
};
const ENV = argv[2];
const D_API = process.env.D_API;
const ALL_DIC_DIRECTORY = fs.readdirSync(path.join(__dirname, "./" ,"DIC/"));

const __OUTPUT_DIRECTORY = "./output";

const CONTENT_DIVIDER = "---";

const HASH_TAG_REGEX = /<a[\s]+([^>]+)>(?:.(?!\<\/a\>))*#((?:.(?!\<\/a\>))*.)<\/a>/;
const NON_HASH_TAG_REGEX = /<a[\s]+([^>]+)>(\n?)((?!#).*)((?:.(?!\<\/a\>))*.)<\/a>/;
const LABEL_REGEX = /!\[((Common)|(Backend)|(Database)|(Frontend)|(Devops))\]\(https:\/\/raw.githubusercontent.com\/meotitda\/DICTIONARY\/master\/2TAT1C\/Label_((Common)|(Backend)|(Database)|(Frontend)|(Devops)).png\)/;
const NON_EXIST_LABEL_REGEX = /!\[((?!Common)(?!Backend)(?!Database)(?!Frontend)(?!Devops)).*\]\((.*).png\)/;

const cursor = {
   totalReadLine: 0,
   position: 0,
   file : null,
   last: {
      label: 0,
      hashTag: 0,
      content: 0,
   },
   warning: false
};

const ERROR = {
   NO_CONTENT : function(){
      return new Error(`
   ${cursor.file} 파일에서 에러가 발생했습니다.
   ${CONTENT_DIVIDER}는 필수 값입니다.
   Content를 나누기 위해 하나 이상 이용하시길 바랍니다..
   `);
   },
   NON_EXIST_LABEL_ERROR : function(label) {
      return new Error(`
   ${cursor.file} 파일에서 에러가 발생했습니다.
   ${label}는 존재하지 않는 라벨명입니다.
   `);
   },
   NON_EXIST_HASH_ERROR : function(hash) {
      return new Error(`
   ${cursor.file} 파일에서 에러가 발생했습니다.
   해시태그 ${hash}에 #는 필수입니다.
   `);
   },
};

const WARNING = {
   LABEL_WARNING : function(){
      cLog(`${cursor.file} 파일의 Label에 문제가 발생했었을 수 있습니다. 다시 한 번 양식을 확인해주세요.`, PROCESS_STATE.WARNING);
      cursor.warning = true;
      if(ENV == "production") {
         throw new Error(`${cursor.file}: LABEL_WARNING`);
      }
   },
   HASHTAG_WARNING:  function(){
      cLog(`${cursor.file} 파일의 HashTag에 문제가 발생했었을 수 있습니다. 다시 한 번 양식을 확인해주세요.`, PROCESS_STATE.WARNING);
      cursor.warning = true;
      if(ENV == "production") {
         throw new Error(`${cursor.file}: HASHTAG_WARNING`);
      }
   },
};

function main() {
   cLog("작업 시작",PROCESS_STATE.INFO);
   const results = ALL_DIC_DIRECTORY.map((alpabet) => {
      const filenames = fs.readdirSync(path.join(__dirname, "./", `DIC/${alpabet}`));

      if (!fs.existsSync(path.join(__dirname, "./", `${__OUTPUT_DIRECTORY}/${alpabet}`) )&& ENV==="debug") {
         fs.mkdirSync(path.join(__dirname, "./", `${__OUTPUT_DIRECTORY}/${alpabet}`));
      }
      
      const parseResults = filenames.map((filename) => {
         const text = fs.readFileSync(path.join(__dirname, "./", `DIC/${alpabet}/${filename}`)).toString();
         cursor.file = filename;

         const result = parse(text);
         const output = extractJSON(result);

         if(ENV==="debug") {
            const output = extractJSON(result);
            fs.writeFile(
               path.join(__dirname, "./", `${__OUTPUT_DIRECTORY}/${alpabet}/${filename.slice(0,-3)}.json`),
               output,
               function (err) {
                  if (err)
                     throw err;
                  cLog(`${filename} is created successfully.`,PROCESS_STATE.SUCCESS);
               }
            );
         }
         return output;
      });
      return parseResults;
   });
   if(!cursor.warning) {
      cLog("작업 완료",PROCESS_STATE.SUCCESS);
   }
   return results.flat();
}

function parse(text) {
   const lines = nomalizedText(text);
   const title = lines[0].replace("#","").trim();
   const labels = extractLabels(lines);
   const hashTags  = extractHashTags(lines);
   const content = extractContent(lines);
   
  return {
     title, 
     labels: labels, 
     hashTags: hashTags,
     content: content.join("\n"),
     slug: `/${title.charAt(0)}/${title}`
   };
}

function extractJSON(result) {
   const {title, labels, hashTags, content, slug} = result;

   const showdown = require("showdown");

   const converter = new showdown.Converter({
      simpleLineBreaks: true,
      omitExtraWLInCodeBlocks: true,
      ghCodeBlocks: true,
    });
  
   const html = converter.makeHtml(content);
   const output = {
      title,
      label: labels,
      hashTag: hashTags,
      content: html,
      slug,   
   };

   return output;
}

function extractLabels(lines) {
   const labels = [];
   lines.map((line,index) => {
      const match = line.match(LABEL_REGEX);
      const nonExistedMatch = line.match(NON_EXIST_LABEL_REGEX);

      if(match) {
         //only label
         labels.push(match[1]);
         cursor.position = index;
      }

      if(nonExistedMatch) {
         throw ERROR.NON_EXIST_LABEL_ERROR(nonExistedMatch[0]);
      }
   });
   cursor.last.label = cursor.position;
   return labels;
}

function extractHashTags(lines) {
   const hashTags = [];
   let findFirstHash = false;
   let isContinue = true;
   let isExpectedContentStart = false;
   lines.map((line,index) => {
      if((findFirstHash && !isContinue) | isExpectedContentStart) {
         return;
      }
      const match = line.match(HASH_TAG_REGEX);
      const nonExistedMatch = line.match(NON_HASH_TAG_REGEX);
      if(match) {
         if(!findFirstHash) {
            findFirstHash = true;
            if(cursor.last.label + 1 !== index) {
               WARNING.LABEL_WARNING();
            }
         }
         //only hashTag
         hashTags.push({
            name: match[2],
            url: match[1].slice(6,-1)
         });

         cursor.position = index;
         return;
      }

      if(nonExistedMatch) {
         throw ERROR.NON_EXIST_HASH_ERROR(nonExistedMatch[0]);
      }

      if(line.includes(CONTENT_DIVIDER)) {
         isExpectedContentStart = true;
      }

      if(findFirstHash) isContinue = false;
   });
   cursor.last.hash = cursor.position;
   return hashTags;
}

function extractContent(lines) {
   const content = [];
   cursor.last.content = findContentEdge(lines);

   for (let i = cursor.position+1; i<lines.length; i++) {
      content.push(lines[i]);
      cursor.last.content++;
   }
   return content;
}

function findContentEdge(lines) {
   resetCursorPosition();
   let isFindContentEdge = false;

   lines.map((line,index) => {
      if (!line.includes(CONTENT_DIVIDER) && !isFindContentEdge) {
         cursor.position++;
      } else{
         if(!isFindContentEdge) {
            if(cursor.last.hash+1 !== index) {
               WARNING.HASHTAG_WARNING();
            }
         }
         isFindContentEdge = true;
      }  
   });
   if(!isFindContentEdge) {
      throw ERROR.NO_CONTENT();
   }

   return cursor.position;
}

function resetCursorPosition() {
   cursor.position = 0;
}

function nomalizedText(text) {
   const rowLines = text.split("\n");
   const filteredLines = rowLines.filter((line)=>line.trim()!=="");
   return filteredLines.map((filteredLine)=>filteredLine.trim());
}

function init() {
   const BASE_PATH  = path.join(__dirname, "./", __OUTPUT_DIRECTORY);
   try {
      if (!fs.existsSync(BASE_PATH) && ENV) {
         console.log(`${BASE_PATH}가 존재 하지 않아 생성합니다.`);
         fs.mkdirSync(BASE_PATH,{ recursive: true });
      }
   }catch(e) {
      console.error(e);
      throw new Error("Node js 10.12.0 이하 버전에서 작동하지 않을 수 있습니다. 확인 바랍니다.");
   }
}

 function cLog(message, color = "\x1b[0m", decoration = color) {
   switch (color) {
     case PROCESS_STATE.SUCCESS:
       color = "\x1b[32m";
       decoration = "✔";
       break;
     case PROCESS_STATE.INFO:
       color = "\x1b[36m";
       decoration = "ℹ";
       break;
     case PROCESS_STATE.ERROR:
       color = "\x1b[31m";
       decoration = "✖";
       break;
     case PROCESS_STATE.WARNING:
       color = "\x1b[33m";
       decoration = "⚠";
       break;
     default:
       color = color;
       decoration="";
   }
   console.log("\x1b[0m",color, `${decoration} ${message}`,"\x1b[0m");
 }

init();
const results = main();

if(ENV==="production") {
   const axios = require("axios");
   axios({
      method: "post",
      url: D_API,
      data: results
    }).catch(function (error) {
      throw new Error(error);
    });
}

