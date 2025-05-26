import Konva from 'konva';
const stageWidth = window.innerWidth;
const stageHeight = window.innerHeight;
const stage = new Konva.Stage({
    container: 'content',
    width: stageWidth,
    height: stageHeight,
 });
// create a grid of dots
export function createGrid(spacing,radius,dotColor,dotOpacity) {
  const rows = Math.floor(stageHeight / spacing);
  const cols = Math.floor(stageWidth / spacing);
  const layer = new Konva.Layer();
  for (let row = 0; row <= rows; row++) {
    for (let col = 0; col <= cols; col++) {
      const dot = new Konva.Circle({
        x: col * spacing,
        y: row * spacing,
        radius: radius,
        fill: dotColor,
        opacity: dotOpacity,
        listening: false,
      });
      layer.add(dot);
    }
  }
  stage.add(layer);
  window.addEventListener('resize', () => location.reload());
}
createGrid(50,1,'rgb(150, 150, 150)',0.2);

//create rectangular block lines like note book
export function createLines(spacing,lineColor,lineOpacity) {
  const layer = new Konva.Layer();
  for (let i = 0; i <= stageWidth; i += spacing) {
    const line = new Konva.Line({
      points: [i, 0, i, stageHeight],
      stroke: lineColor,
      strokeWidth: 1,
      opacity: lineOpacity,
      listening: false,
    });
    layer.add(line);
  }
  for (let j = 0; j <= stageHeight; j += spacing) {
    const line = new Konva.Line({
      points: [0, j, stageWidth, j],
      stroke: lineColor,
      strokeWidth: 1,
      opacity: lineOpacity,
      listening: false,
    });
    layer.add(line);
  }
  stage.add(layer);
}
//createLines(50,'rgb(150, 150, 150)',0.2);

// create horizontal lines like note book
export function createHorizontalLines(spacing,lineColor,lineOpacity){
  const layer = new Konva.Layer();
  for(let i = 0 ; i < window.innerHeight/spacing; i++){
    const line = new Konva.Line({
      points: [window.innerWidth/22.5+500, i * spacing, stageWidth-100, i * spacing],
      stroke: lineColor,
      opacity: lineOpacity,
      listening: false,
    });
    layer.add(line);
  }
  stage.add(layer);
  window.addEventListener('resize', () => location.reload()); 
}
//createHorizontalLines( 35, '#ffffff', 0.1) 