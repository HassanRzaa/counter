let conter= 0;

const incrimentButton = document.getElementById('incriment');
const restButton = document.getElementById('rest');
const conterDisplay = document.getElementById('conter');

incrimentButton.addEventListener('click', () =>{
    conter++;
    updateConterDisplay();
});

restButton.addEventListener('click', () => {
    conter = 0;
    updateConterDisplay();
});

function updateConterDisplay (){
    conterDisplay.textContent = conter;
}