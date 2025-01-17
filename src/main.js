import './scss/style.scss';
import './lib/wslist.js';
import WSList from './lib/wslist.js';
import WSGrid  from './lib/wsgrid.js';
let GameGrid = new WSGrid(10, 10);
let WordList = new WSList(["good morning", "hello","whats up", "hello", "good for you", "hello"]);
let addWordButton = document.getElementById("addword");
addWordButton.addEventListener("click", (event) => {
    event.preventDefault();
    let wordElement = document.getElementById('wordinput');
    WordList.addWord(wordElement.value);
});