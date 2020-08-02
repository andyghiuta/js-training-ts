System.register("shapes/shape", [], function (exports_1, context_1) {
    "use strict";
    var Shape;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Shape = class Shape {
                constructor(x, y, fill = 'rgba(0, 0, 200, 0.5)') {
                    this.x = x;
                    this.y = y;
                    this.fill = fill;
                }
                draw(ctx) {
                    window.requestAnimationFrame(() => {
                        this.drawFrame(ctx);
                    });
                }
            };
            exports_1("default", Shape);
        }
    };
});
System.register("shapes/circle", ["shapes/shape"], function (exports_2, context_2) {
    "use strict";
    var shape_1, Circle;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (shape_1_1) {
                shape_1 = shape_1_1;
            }
        ],
        execute: function () {
            Circle = class Circle extends shape_1.default {
                constructor(x, y, r, fill = 'rgba(0, 0, 200, 0.5)') {
                    super(x, y, fill);
                    this.r = r;
                }
                drawFrame(ctx) {
                    // fill with a blue color, 50% opacity
                    ctx.fillStyle = this.fill;
                    ctx.beginPath();
                    // an arc starting at x/y position, "r"px radius, start at 0, end at PI*2 (end of the circle)
                    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); // Outer circle
                    ctx.fill();
                }
            };
            exports_2("default", Circle);
        }
    };
});
System.register("drawing", ["shapes/circle"], function (exports_3, context_3) {
    "use strict";
    var circle_1, canvas, canvasDiv, ctx, addShapeBtn, shapeTypeSelect, clearBtn;
    var __moduleName = context_3 && context_3.id;
    function resize() {
        canvas.width = canvasDiv.offsetWidth * (2 / 3);
        canvas.height = canvas.width * (2 / 3);
    }
    // factory
    function createShape(shape) {
        switch (shape.type) {
            case 'Circle':
                return new circle_1.default(parseInt(shape.x, 10), parseInt(shape.y, 10), parseInt(shape.r, 10));
            default:
                throw new Error(`Shape type '${shape.type}' constructor not handled in factory`);
        }
    }
    return {
        setters: [
            function (circle_1_1) {
                circle_1 = circle_1_1;
            }
        ],
        execute: function () {
            // TODO 1. Create more shapes. EG: Rectangle, Square, Line, Arc, Text
            // TODO 2. Extend the objects with a method that validates the input parameters and prompts the user
            // DONE 3. Load the objects from the "database"
            // TODO 4. Save the objects in the "database"
            canvas = document.getElementById('drawing');
            canvasDiv = document.getElementById('drawingCnt');
            resize();
            ctx = canvas.getContext('2d');
            // add window resize listener
            window.addEventListener('resize', () => {
                // this will update the canvas with/height, which will also redraw it,
                // so we need to redraw all the shapes
                resize();
                console.log('resize');
            }, false);
            addShapeBtn = document.getElementById('addShape');
            // add event listener on the select type
            shapeTypeSelect = document.getElementById('type');
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
                }
                else {
                    addShapeBtn.classList.add('d-none');
                }
            }, false);
            // add event listener on the button
            addShapeBtn.addEventListener('click', () => {
                // read the shape position
                const x = document.getElementById('x').value;
                const y = document.getElementById('y').value;
                const shapeAttr = {
                    type: shapeTypeSelect.value,
                    x,
                    y,
                };
                // get the params for the selected type
                const attrs = document.querySelectorAll(`[name^="${shapeTypeSelect.value}"]`);
                attrs.forEach((node) => {
                    const { value } = node;
                    let { name } = node;
                    // get only the part that we're interested in
                    name = name.replace(/^(.*\[(.*)\])$/, '$2');
                    shapeAttr[name] = value;
                });
                const shape = createShape(shapeAttr);
                shape.draw(ctx);
            }, false);
            clearBtn = document.getElementById('clear');
            clearBtn.addEventListener('click', () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }, false);
        }
    };
});
