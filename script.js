const circle = document.querySelector('.circle');
const shape = document.querySelector('.shape');
const changeColorBtn = document.getElementById('changeColorBtn');
const changeShapeBtn = document.getElementById('changeShapeBtn');


const shapes = [
    'square', 'rectangle', 'oval', 'triangle', 'pentagon', 
    'hexagon', 'octagon', 'star', 'rhombus', 'parallelogram', 
    'trapezoid', 'heart', 'cross'
];

changeColorBtn.addEventListener('click', () => {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // Change the background color of the circle
    circle.style.backgroundColor = randomColor;


    changeShapeBtn.addEventListener('click', () => {
        // Remove all shape classes
        shapes.forEach(shapeClass => shape.classList.remove(shapeClass));

        // Select a random shape
        const randomIndex = Math.floor(Math.random() * shapes.length);
        const newShapeClass = shapes[randomIndex];

        // Add the new shape class
        shape.classList.add(newShapeClass);

        // Ensure shape background color is white
        shape.style.backgroundColor = 'white';
        if (newShapeClass === 'triangle' || newShapeClass === 'star' || newShapeClass === 'pentagon') {
            shape.style.borderBottomColor = 'white';
        }
    });
});