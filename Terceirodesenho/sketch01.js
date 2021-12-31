const canvasSketch = require('canvas-sketch');
/*Aqui eu já iniciei algo mais sofisticado, agora estou rodando o
código com node.js, também mudei o fundo do quadrado para preto e 
o stroke para branco, para deixar diferente.*/ 
//Também fiz alguns ajustes nas dimensões.
const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.strokeStyle='white';
    context.fillRect(0, 0, width, height);
    context.lineWidth=width*0.01;
      const gap=width*0.03;
      const w=width*0.10;
      const h=height*0.10;
      const ix=width*0.17;
      const iy=height*0.17;
      const off =width*0.02;
      let x, y;
    for(let i=0;i<5;i++){
      for(j=0;j<5;j++){
      x=ix+(w+gap)*i;
      y=iy+(h+gap)*j;
      context.beginPath();
      context.rect(x,y,w,h);
      context.stroke();
      if(Math.random()>0.5){
          context.beginPath();
          context.rect(x+off/2,y+off/2,w-off,h-off);
          context.stroke();
      }
      }
  }
  };
};

canvasSketch(sketch, settings);
