import Shape from './shape';

export default class Circle extends Shape {
  private r: number;

  constructor(x: number, y: number, r: number, fill = 'rgba(0, 0, 200, 0.5)') {
    super(x, y, fill);
    this.r = r;
  }

  drawFrame(ctx: CanvasRenderingContext2D) {
    // fill with a blue color, 50% opacity
    ctx.fillStyle = this.fill;
    ctx.beginPath();
    // an arc starting at x/y position, "r"px radius, start at 0, end at PI*2 (end of the circle)
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); // Outer circle
    ctx.fill();
  }
}
