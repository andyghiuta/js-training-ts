export default abstract class Shape {
  protected x: number;

  protected y: number;

  protected fill: string;

  constructor(x: number, y: number, fill = 'rgba(0, 0, 200, 0.5)') {
    this.x = x;
    this.y = y;
    this.fill = fill;
  }

  draw(ctx: CanvasRenderingContext2D) {
    window.requestAnimationFrame(() => {
      this.drawFrame(ctx);
    });
  }

  abstract drawFrame(ctx: CanvasRenderingContext2D): void;
}
