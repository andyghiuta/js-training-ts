import Circle from './shapes/circle';

// TODO 1. Create more shapes. EG: Rectangle, Square, Line, Arc, Text
// TODO 2. Extend the objects with a method that validates the input parameters and prompts the user
// DONE 3. Load the objects from the "database"
// TODO 4. Save the objects in the "database"
const canvas = document.getElementById('drawing') as HTMLCanvasElement;
const canvasDiv = document.getElementById('drawingCnt');
function resize() {
  canvas.width = canvasDiv.offsetWidth * (2 / 3);
  canvas.height = canvas.width * (2 / 3);
}
resize();

const ctx = canvas.getContext('2d');

type ShapeAttr = { [key: string]: string };
// factory
function createShape(shape: ShapeAttr) {
  switch (shape.type) {
    case 'Circle':
      return new Circle(parseInt(shape.x, 10), parseInt(shape.y, 10), parseInt(shape.r, 10));
    default:
      throw new Error(`Shape type '${shape.type}' constructor not handled in factory`);
  }
}

// add window resize listener
window.addEventListener('resize', () => {
  // this will update the canvas with/height, which will also redraw it,
  // so we need to redraw all the shapes
  resize();
  console.log('resize');
}, false);

const addShapeBtn = document.getElementById('addShape');
// add event listener on the select type
const shapeTypeSelect = document.getElementById('type') as HTMLSelectElement;
shapeTypeSelect.addEventListener('change', function typeChange() {
  // hide all "attr" rows
  const allAttrs = document.querySelectorAll('.attr');
  allAttrs.forEach((item) => {
    item.classList.add('d-none');
  });
  // show the selected one
  const shapeAttr = document.getElementById(`attr${this.value}`);
  if (shapeAttr) {
    shapeAttr.classList.remove('d-none');
    addShapeBtn.classList.remove('d-none');
  } else {
    addShapeBtn.classList.add('d-none');
  }
}, false);

// add event listener on the button
addShapeBtn.addEventListener('click', () => {
  // read the shape position
  const x = (document.getElementById('x') as HTMLInputElement).value;
  const y = (document.getElementById('y') as HTMLInputElement).value;
  const shapeAttr: ShapeAttr = {
    type: shapeTypeSelect.value,
    x,
    y,
  };
  // get the params for the selected type
  const attrs = document.querySelectorAll(`[name^="${shapeTypeSelect.value}"]`);
  attrs.forEach((node: HTMLInputElement) => {
    const { value } = node;
    let { name } = node;
    // get only the part that we're interested in
    name = name.replace(/^(.*\[(.*)\])$/, '$2');
    shapeAttr[name] = value;
  });
  const shape = createShape(shapeAttr);
  shape.draw(ctx);
}, false);

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}, false);
