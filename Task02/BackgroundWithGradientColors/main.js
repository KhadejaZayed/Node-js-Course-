const body= document.querySelector('body'),
        input1= document.querySelector('.greenIn'),
        input2= document.querySelector('.blueIn'),
        lightBtn= document.querySelector('.lightBtn'),
        darkBtn= document.querySelector('.darkBtn'),
        h1txt= document.querySelector('h1'),
        randBtn= document.querySelector('.randBtn');

function setBackgroundGradience(){
    body.style.background = `linear-gradient(to right, ${input1.value}, ${input2.value})`;
}

function changeToLight(){
    body.style.background = "#ffffff";
    h1txt.style.color ="#000";

}

function changeToDark(){
    body.style.background= "#0f0f0f";
    h1txt.style.color = "#fff";

}

function changeToRandomBgColor(){
    function chooseRandomColor(){
        let colors = ['green','blue', 'red', 'yellow', 'silver', 'pink', 'violet', 'purple', 'white', 'black' , 'brown', 'lemon'];
        let randColor= colors[Math.floor(Math.random()* colors.length)];
        return randColor
    }

    body.style.background = chooseRandomColor();
    h1txt.style.color = '#357faa';
}

input1.addEventListener('input',setBackgroundGradience);
input2.addEventListener('input',setBackgroundGradience);
lightBtn.addEventListener('click',changeToLight );
darkBtn.addEventListener('click',changeToDark );
randBtn.addEventListener('click',changeToRandomBgColor);
