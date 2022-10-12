class TrieNode {
   value: string
   end: boolean
   child: {}
   constructor(value = ''){
       this.value = value; 
       this.end = false; 
       this.child = {}
   }
}

class Trie {
   private root: TrieNode
   private cursor: TrieNode
    constructor(){
       this.root = new TrieNode();
       this.cursor = this.root
    }

    insert(string){
       let currentNode = this.root; 
   
       for(let i = 0; i <string.length ; i++) {
           
           const currentChar = string[i];

           if(currentNode.child[currentChar] === undefined){
               currentNode.child[currentChar] = new TrieNode(currentChar);
           }

           currentNode = currentNode.child[currentChar]; 
       }
       currentNode.end = true 
    }

    search(str: string) {
        let result = ''
       let currentNode = this.root; 

       for(let i = 0; i <str.length ; i++) {
           const currentChar = str[i]; 
           result+= currentChar
           if(currentNode.child[currentChar]){
               currentNode = currentNode.child[currentChar]; 
           } else {
               return null
           }
       }


       return currentNode.end ? result : null;
    }

    iterateSearch(char: string) {
        if(this.cursor.child[char]){
            this.cursor = this.cursor.child[char]; 
            return true
        } else {
            this.cursor = this.root
            return false
        }
    }
}


export default Trie