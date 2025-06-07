import { createGrid , createHorizontalLines , createLines } from "./paper"; 
import EditorJS from '@editorjs/editorjs';
//createHorizontalLines( 35, '#ffffff', 0.1) 
//createLines(50,'rgb(150, 150, 150)',0.2);


// Inside your script tag or frontend JS/TS file

let mousePos = {
  mouseX: 0,
  mouseY: 0
};

document.addEventListener('mousemove', (e) => {
  mousePos.mouseX = e.clientX;
  mousePos.mouseY = e.clientY;
});


createGrid(50,1,'rgb(150, 150, 150)',0.2);

createTextBlock = ({
  
}) 

TextDiv = {
 tag:"div",
 content:"",
 id:`${Math.random()}`
const editor = new EditorJS({
  holder:'element'
});
