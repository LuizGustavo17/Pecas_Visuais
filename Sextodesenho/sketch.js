/*Desenhando agentes circulares na tela, dessa vez separei em classes para ficar mais organizado, também porque pretendo
continuar explorando este desenho no futuro.*/
const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const settings = {
  dimensions: [ 1080, 1080 ]
};
const sketch = ({ context, width, height }) =>{
  const Agents = [];
  for(i=0; i<70;i++){
    const x=random.range(0, width);
    const y=random.range(0, height);
    Agents.push(new Agent(x,y));
  }
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    Agents.forEach(agent =>{
      agent.draw(context);
    })
  };
}

canvasSketch(sketch, settings);

class Point{
  constructor(x, y){
    this.x=x;
    this.y=y;
  }
}

class Agent{
  constructor(x, y){
    this.pos=new Point(x, y);
    this.radius=random.range(4, 20);
  }
   draw(context){
    context.beginPath();
    context.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI*2);
    context.fillStyle='#fc0fc0';
    context.fill();
  }
}

