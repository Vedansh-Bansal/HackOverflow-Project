const easyBtn = document.querySelector("div .easyButton");
const hardBtn = document.querySelector("div .hardButton");
const newColorBtn = document.querySelector("body");
const rgbCode = document.querySelector("header .randomNumbers")
const bottomBox = document.querySelector("main .bottomThree");
const boxes = document.querySelector("main");
const boxColoring = document.querySelectorAll("main .box");
const header = document.querySelector("header");
const tryAgain = document.querySelector("body section p");

//box color engine
function boxColor(){
    Array.from(boxColoring).forEach(function(box){
        const color = randomColor();
        // console.log(color);
        box.style.backgroundColor = color;
    });
}

// random color generator
function randomColor(){
    let hash = "#";
    const hexCode = "0123456789ABCDEF";
    
    for(i=0; i<6; i++){
        hash += hexCode[Math.floor(Math.random()*16)];
    }
    return hash;
}

boxColor();

easyBtn.addEventListener('click', function(e){
    // console.log(easyBtn);
    bottomBox.style.display = "none";
    let j = Math.floor(Math.random()*3);
    const randomRGB = boxColoring[j].style.backgroundColor;
    rgbCode.innerHTML = randomRGB;
});

hardBtn.addEventListener('click', function(e){
    // console.log(hardBtn);
    bottomBox.style.display = "initial";
});

let j = Math.floor(Math.random()*6);
// console.log(j);

newColorBtn.addEventListener("click", function(e){
    if(e.target.className == "newColorButton"){
        // console.log(e.target);
        e.target.innerHTML = "NEW COLORS";
        boxColor();
        // boxes.style.display = "none"
        const randomRGB = boxColoring[j].style.backgroundColor;
        rgbCode.innerHTML = randomRGB;
        header.style.backgroundColor = "rgb(255, 217, 0)"
    };
});

const randomRGB = boxColoring[j].style.backgroundColor;
// console.log(randomRGB);

rgbCode.innerHTML = randomRGB;


boxes.addEventListener("click", function(e){
    if(e.target.className == "box"){
        if(e.target.style.backgroundColor == randomRGB){
            Array.from(boxColoring).forEach(function(box){
                box.style.backgroundColor = randomRGB;
            });
            
            let btn = document.getElementById("newColorButton");
            // console.log(btn);
            btn.innerHTML = "PLAY AGAIN";
            header.style.backgroundColor = randomRGB;
        }
        else{
            e.target.style.backgroundColor = "rgb(32, 32, 32)";
            // let node = document.createElement("p");
            // node.setAttribute("class", "tryAgain");
            // let tryAgn = document.createTextNode("TRY AGAIN");
            // tryAgn.appendChild(node);
            // tryAgn.style.color = "red";
            // tryAgain.appendChild(tryAgn);
            // console.log(tryAgain);
        }
    }
});