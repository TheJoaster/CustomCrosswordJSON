const containerHTML = `<div class="inline" id="wsgridcontainer"></div>`;
const rowHTML = `<div class="wsrow"></div>`;
const itemHTML = `<div class=wsletter><input class="wsletterinput" type="text"></div>`;
class WSGrid {
    letters = [[]];
    height = 5;
    width = 5;
    constructor (height, width, letters) {
        this.height = height;
        this.width = width;
        this.spawnContainer();
        
        this.spawnBlankGrid(height, width);
        
    }
    spawnContainer() {
        let gameContainer = document.getElementById('gamecontainer');
        let containerElement = document.createElement('div');
        containerElement.setAttribute("class", "inline");
        containerElement.setAttribute("id", 'wsgridcontainer');
        gameContainer.appendChild(containerElement);
    }
    spawnBlankGrid(height, width) {
        let gridContainer = document.getElementById('wsgridcontainer');
        for(let h = 0; h < height; h++) {
            let rowElement = document.createElement('div');
            rowElement.setAttribute("class", "wsrow");
            this.letters.push([]);
            for (let w = 0; w < width; w++) {
                let itemElement = document.createElement('div');
                let itemTextBox = document.createElement('input');
                itemElement.setAttribute('class', 'wsletter');
                itemTextBox.setAttribute('class', 'wsletterinput');
                itemTextBox.setAttribute('placeholder', '?');
                this.letters[h].push(itemTextBox.value);
                itemElement.appendChild(itemTextBox);
                rowElement.appendChild(itemElement);
            
            }
            
            gridContainer.appendChild(rowElement);
            //gridContainer.appendChild(document.createElement('br'));
        }
    }
}
module.exports = WSGrid;