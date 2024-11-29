class WSList {
    
    wordArray = [];
    
    constructor(wordList){
        
        this.spawnContainers();
        if (wordList != undefined || null) {
            this.wordArray = wordList;
            for (let word of this.wordArray) {
                if (this.wordArray.indexOf(word) != this.wordArray.lastIndexOf(word)) {
                    this.wordArray.splice(this.wordArray.lastIndexOf(word), 1);
                    console.log(`Duplicate word "${word}" removed!`);
                }
            }
            this.spawnWordList();
        }
    }
    
    spawnContainers() {
        console.log(`test!`);
        let mainContainer = document.getElementById("gamecontainer");
        let wordListContainer = document.createElement('div');
        
        wordListContainer.setAttribute('class', 'inline');
        wordListContainer.setAttribute('id', 'wslistcontainer');
        
        mainContainer.appendChild(wordListContainer);
    
    }
    
    spawnWordList() {
        
        let wordListContainer = document.getElementById('wslistcontainer');
        
        for (let word of this.wordArray) {
            let itemElement = document.createElement('div');
            itemElement.setAttribute("class", "wsitem");
            let wordItem = document.createTextNode(word);
            let deleteButton = document.createElement('button');
            deleteButton.setAttribute('class', 'wsdeletebutton');
            deleteButton.appendChild(document.createTextNode("X"));
            deleteButton.onclick = (ev) => {
                ev.preventDefault();
                this.deleteWord(word, itemElement);
            }
            itemElement.appendChild(wordItem);
            itemElement.appendChild(deleteButton);
            wordListContainer.appendChild(itemElement);
        }

    }
    
    addWord(word) {
        console.log(word)
        let wordListContainer = document.getElementById('wslistcontainer');
        this.wordArray.push(word);
        let itemElement = document.createElement('div');
        itemElement.setAttribute("class", "wsitem");
        let wordItem = document.createTextNode(word);
        let deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'wsdeletebutton');
        deleteButton.appendChild(document.createTextNode("X"));
        deleteButton.onclick = (ev) => {
            ev.preventDefault();
            this.deleteWord(word,itemElement);
        }
        itemElement.appendChild(wordItem);
        itemElement.appendChild(deleteButton);
        wordListContainer.appendChild(itemElement);
        this.removeDuplicateWords(itemElement, word);
        console.log(this.wordArray);
    }
    
    removeDuplicateWords(itemElement, word) {
        let wordListContainer = document.getElementById('wslistcontainer');
        let indexValue = this.wordArray.indexOf(word);
        console.log(indexValue);
        if (indexValue != -1) {
            if(this.wordArray.lastIndexOf(word) != indexValue){
                this.wordArray.splice(indexValue, 1);
                wordListContainer.removeChild(itemElement);
                alert(`Word ${word} is already in list!`);
            }
        }
        console.log(this.wordArray);
    }

    deleteWord(word, itemElement) {
        let wordListContainer = document.getElementById('wslistcontainer');
        wordListContainer.removeChild(itemElement);
        let wordRemovable = this.wordArray.indexOf(word)
        if (wordRemovable > -1) {
            this.wordArray.splice(wordRemovable, 1);
        }
        console.log(this.wordArray);
    }
    
    returnWordList() {
        return this.wordArray;
    }
}

module.exports = WSList;