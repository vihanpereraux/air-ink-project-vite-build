let icons = [];
let brushTypes;
let brushColors;
let brushSizes;
let eraser;
let clear;

// control panel layout
icons = [
['https://i.ibb.co/7zKjHz3/drawing-bush-01.png', 'brush 01', '25'],
['https://i.ibb.co/wBvm5nz/drawing-bush-02.png', 'brush 02', '32'],
['https://i.ibb.co/cbrKTR8/drawing-bush-03.png', 'brush 03', '30'],
['https://i.ibb.co/bRd93VQ/drawing-bush-04.png', 'brush 04', '30'],
['https://i.ibb.co/4Md0J2Z/drawing-bush-05.png', 'brush 05', '30'],
['https://i.ibb.co/B4B3pB9/drawing-bush-06.png', 'brush 06', '30'],
['https://i.ibb.co/tCTLz3G/drawing-bush-07.png', 'brush 07', '30']]

brushTypes = document.getElementById('brush-types');
for (let index = 0; index < 7; index++) {
    brushTypes.innerHTML += `
    <div class="brush-type">
        <img width="${ icons[index][2] }" height="${ icons[index][2] }" class="logo" src="${ icons[index][0] }" alt="">
        <p class="name">${ icons[index][1] }</p>
    </div>
    ` 
};

brushColors = document.getElementById('brush-colors');
// brushColors.innerHTML = `
//     <div class="brush-color">
//         <div class="custom-color-picker" id="custom-brush-color-picker">
//             <input type="color" class="color-value" id="brush-color-value" name="favcolor" value="#ff0000">
//         </div>
//         <p id="lol" class="name">color</p>
//     </div>
// `;

brushSizes = document.getElementById('brush-sizes');
brushSizes.innerHTML = `
    <div class="brush-size">
        <p class="name">Brush size</p>
        <input id="brush-size" type="range" min="1" max="100" value="10">
    </div>
`;

eraser = document.getElementById('eraser');
eraser.innerHTML = `
    <img 
        width="28" 
        height="28" 
        src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/external-eraser-back-to-school-vitaliy-gorbachev-fill-vitaly-gorbachev.png"
        alt="external-eraser-back-to-school-vitaliy-gorbachev-fill-vitaly-gorbachev"/>
    <p class="name">Eraser</p>
`;

clear = document.getElementById('clear');
clear.innerHTML = `
    <img 
        width="33" 
        height="33" 
        src="https://img.icons8.com/fluency/48/cancel.png" 
        alt="cancel"/>
    <p class="name">clear</p>
`


// control panel functions
let brushColorValue;
let strokeColorValue;
let customColorPicker;
let brushSize;
let getBrushTypes;

// enabling brushes
setbrushStatus();
getBrushTypes = document.getElementsByClassName('brush-type');
// event listners for brushes
for (let index = 0; index < getBrushTypes.length; index++) {
    getBrushTypes[index].addEventListener('click', function(){
        switch (index) {
            case 0:
                setbrushStatus();
                localStorage.setItem("brush-type-01", "enabled");
                break;

            case 1:
                setbrushStatus();
                localStorage.setItem("brush-type-02", "enabled");
                break;
            
            case 2:
                setbrushStatus();
                localStorage.setItem("brush-type-03", "enabled");
                break;

            case 3:
                setbrushStatus();
                localStorage.setItem("brush-type-04", "enabled");
                break;

            case 4:
                setbrushStatus();
                localStorage.setItem("brush-type-05", "enabled");
                break;

            case 5:
                setbrushStatus();
                localStorage.setItem("brush-type-06", "enabled");
                break;

            case 6:
                setbrushStatus();
                localStorage.setItem("brush-type-07", "enabled");
                break;

            default:
                break;
        }    
    })
};
// event listner for the eraser
eraser.addEventListener('click', function(){
    setbrushStatus();
    localStorage.setItem("eraser", "enabled");
});
// event listner for the clear
clear.addEventListener('click', function(){
    
})

function setbrushStatus(){
    for (let index = 0; index < 7; index++) {
        localStorage.setItem("brush-type-0" + String(index+1), "disabled");  
    };
    localStorage.setItem("eraser", "disabled");
}

// brush color
customColorPicker = document.getElementsByClassName('custom-color-picker');
brushColorValue = document.getElementById('brush-color-value');
localStorage.setItem("brush-color", "#000000");

// brushColorValue.addEventListener('input', function(){
//     customColorPicker[0].style.background = brushColorValue.value;
//     localStorage.setItem("brush-color", brushColorValue.value);
// });

// brush size
localStorage.setItem("brush-size", 10);
brushSize = document.getElementById('brush-size');
brushSize.addEventListener('input', function(){
    localStorage.setItem("brush-size", brushSize.value);
});


