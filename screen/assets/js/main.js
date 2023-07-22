let icons = [];
let brushTypes;
let brushColors;
let brushSizes;
let eraser;
let clear;

// control panel layout
icons = [
['https://img.icons8.com/sf-regular-filled/48/paint.png', 'brush 01', '42'],
['https://img.icons8.com/ios-filled/50/pencil-tip.png', 'brush 02', '32'],
['https://img.icons8.com/ios-filled/50/splash.png', 'brush 03', '30'],
['https://img.icons8.com/ios-glyphs/30/deodorant-spray.png', 'brush 04', '30']]

brushTypes = document.getElementById('brush-types');
for (let index = 0; index < 4; index++) {
    brushTypes.innerHTML += `
    <div class="brush-type">
        <img width="${ icons[index][2] }" height="${ icons[index][2] }" class="logo" src="${ icons[index][0] }" alt="">
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
        <p id="lol" class="name">color</p>
    </div>
`;

brushSizes = document.getElementById('brush-sizes');
brushSizes.innerHTML = `
    <div class="brush-size">
        <p class="name">Brush size</p>
        <input id="brush-size" type="range" min="1" max="100" value="30">
    </div>
`;

eraser = document.getElementById('eraser');
eraser.innerHTML = `
    <img 
        width="32" 
        height="32" 
        src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/external-eraser-back-to-school-vitaliy-gorbachev-fill-vitaly-gorbachev.png"
        alt="external-eraser-back-to-school-vitaliy-gorbachev-fill-vitaly-gorbachev"/>
    <p class="name">Eraser</p>
`;

clear = document.getElementById('clear');
clear.innerHTML = `
    <img 
        width="37" 
        height="37" 
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
        console.log(index);
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
                localStorage.setItem("brush-type-02", "enabled");
                break;

            case 3:
                setbrushStatus();
                localStorage.setItem("brush-type-03", "enabled");
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
    for (let index = 0; index < 4; index++) {
        localStorage.setItem("brush-type-0" + String(index+1), "disabled");  
    };
    localStorage.setItem("eraser", "disabled");
}

// brush color
customColorPicker = document.getElementsByClassName('custom-color-picker');
brushColorValue = document.getElementById('brush-color-value');
localStorage.setItem("brush-color", "ffffff");

brushColorValue.addEventListener('input', function(){
    customColorPicker[0].style.background = brushColorValue.value;
    localStorage.setItem("brush-color", brushColorValue.value);
});

// brush size
localStorage.setItem("brush-size", 3);
brushSize = document.getElementById('brush-size');
brushSize.addEventListener('input', function(){
    localStorage.setItem("brush-size", brushSize.value);
});


