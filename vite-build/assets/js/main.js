let icons = [];
let brushTypes;
let brushColors;
let brushSizes;
let eraser;

icons = [
['https://i.ibb.co/TmrPvLp/round-brush.png', 'brush 01'],
['https://i.ibb.co/TmrPvLp/round-brush.png', 'brush 02'],
['https://i.ibb.co/TmrPvLp/round-brush.png', 'brush 03'],
['https://i.ibb.co/TmrPvLp/round-brush.png', 'brush 04']]

brushTypes = document.getElementById('brush-types');
for (let index = 0; index < 4; index++) {
    brushTypes.innerHTML += `
    <div class="brush-type">
        <img class="logo" src="${ icons[index][0] }" alt="">
        <p class="name">${ icons[index][1] }</p>
    </div>
    ` 
};

brushColors = document.getElementById('brush-colors');
brushColors.innerHTML = `
    <div class="brush-color">
        <div class="custom-color-picker" id="custom-brush-color-picker">
        <input type="color" class="color-value" id="brush-color-value" name="favcolor" value="#ff0000">
        </div>
        <p id="lol" class="name">Brush</p>
    </div>

    <div class="brush-color">
        <div class="custom-color-picker" id="custom-stroke-color-picker">
        <input type="color" class="color-value" id="stroke-color-value" name="favcolor" value="#ff0000">
        </div>
        <p class="name">Stroke</p>
    </div>
`;

brushSizes = document.getElementById('brush-sizes');
brushSizes.innerHTML = `
    <div class="brush-size" id="brush-size">
        <span>50</span>
        <p class="name">Brush size</p>
    </div>

    <div class="brush-size" id="stroke-size">
        <span>02</span>
        <p class="name">Stroke size</p>
    </div>
`;

eraser = document.getElementById('eraser');
eraser.innerHTML = `
    <img class="logo" src="https://i.ibb.co/TmrPvLp/round-brush.png" alt="">
    <p class="name">Eraser</p>
`;