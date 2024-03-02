var btn = document.querySelector('button')
var tdata = document.querySelectorAll('td')
console.log(tdata)
var h3 = document.querySelector('h3')
var h2 = document.querySelectorAll('h2')
var tr1 = document.getElementById('tr1')
var tr2 = document.getElementById('tr2')
var tr3 = document.getElementById('tr3')

function chanceX() {
    h2[0].style.backgroundColor = 'green';
    h2[0].style.color = 'red';
    h2[1].style.backgroundColor = 'grey';
    h2[1].style.color = 'white';
}
function chanceO() {

    h2[1].style.backgroundColor = 'green';
    h2[1].style.color = 'red';
    h2[0].style.backgroundColor = 'grey';
    h2[0].style.color = 'white';
}
chanceX();

function disableClick() {
    tr1.style.pointerEvents = 'none';
    tr2.style.pointerEvents = 'none';
    tr3.style.pointerEvents = 'none';
}
function enableClick() {
    tr1.style.pointerEvents = 'auto';
    tr2.style.pointerEvents = 'auto';
    tr3.style.pointerEvents = 'auto';
}

function reset() {
    for (let i = 0; i <= 8; i++) {
        tdata[i].textContent = ""
        tdata[i].style.textDecoration='none'
    }
    count = 1;
    h3.textContent = '';
    h3.style.color='Black';
    enableClick();
    chanceX();
}
btn.addEventListener('click', reset)

function result() {
    if ((tdata[0].textContent == 'X' && tdata[1].textContent == 'X' && tdata[2].textContent == 'X') || (tdata[0].textContent == 'O' && tdata[1].textContent == 'O' && tdata[2].textContent == 'O')) {
        if (tdata[0].textContent == 'X') {
            h3.textContent = "Congratulations X You win the game";
            disableClick();
            tdata[0].style.textDecoration='line-through'
            tdata[1].style.textDecoration='line-through'
            tdata[2].style.textDecoration='line-through'
            
        }
        else {
            h3.textContent = "Congratulations O You win the game";
            disableClick();
            tdata[0].style.textDecoration='line-through'
            tdata[1].style.textDecoration='line-through'
            tdata[2].style.textDecoration='line-through'
            
        }
    }
    if ((tdata[3].textContent == 'X' && tdata[4].textContent == 'X' && tdata[5].textContent == 'X') || (tdata[3].textContent == 'O' && tdata[4].textContent == 'O' && tdata[5].textContent == 'O')) {
        if (tdata[3].textContent == 'X') {
            h3.textContent = "Congratulations X You win the game";
            disableClick();
            tdata[3].style.textDecoration='line-through'
            tdata[4].style.textDecoration='line-through'
            tdata[5].style.textDecoration='line-through'
            
        }
        else {
            h3.textContent = "Congratulations O You win the game";
            disableClick();
            tdata[3].style.textDecoration='line-through'
            tdata[4].style.textDecoration='line-through'
            tdata[5].style.textDecoration='line-through'
            
        }
    }
    if ((tdata[6].textContent == 'X' && tdata[7].textContent == 'X' && tdata[8].textContent == 'X') || (tdata[6].textContent == 'O' && tdata[7].textContent == 'O' && tdata[8].textContent == 'O')) {
        if (tdata[6].textContent == 'X') {
            h3.textContent = "Congratulations X You win the game";
            disableClick();
            tdata[6].style.textDecoration='line-through'
            tdata[7].style.textDecoration='line-through'
            tdata[8].style.textDecoration='line-through'
            
        }
        else {
            h3.textContent = "Congratulations O You win the game";
            disableClick();
            tdata[6].style.textDecoration='line-through'
            tdata[7].style.textDecoration='line-through'
            tdata[8].style.textDecoration='line-through'
            
        }
    }
    if ((tdata[0].textContent == 'X' && tdata[3].textContent == 'X' && tdata[6].textContent == 'X') || (tdata[0].textContent == 'O' && tdata[3].textContent == 'O' && tdata[6].textContent == 'O')) {
        if (tdata[0].textContent == 'X') {
            h3.textContent = "Congratulations X You win the game";
            disableClick();
            tdata[0].style.textDecoration='line-through'
            tdata[3].style.textDecoration='line-through'
            tdata[6].style.textDecoration='line-through'
            
        }
        else {
            h3.textContent = "Congratulations O You win the game";
            disableClick();
            tdata[0].style.textDecoration='line-through'
            tdata[3].style.textDecoration='line-through'
            tdata[6].style.textDecoration='line-through'
            
        }
    }
    if ((tdata[1].textContent == 'X' && tdata[4].textContent == 'X' && tdata[7].textContent == 'X') || (tdata[1].textContent == 'O' && tdata[4].textContent == 'O' && tdata[7].textContent == 'O')) {
        if (tdata[1].textContent == 'X') {
            h3.textContent = "Congratulations X You win the game";
            disableClick();
            tdata[1].style.textDecoration='line-through'
            tdata[4].style.textDecoration='line-through'
            tdata[7].style.textDecoration='line-through'
            
        }
        else {
            h3.textContent = "Congratulations O You win the game";
            disableClick();
            tdata[1].style.textDecoration='line-through'
            tdata[4].style.textDecoration='line-through'
            tdata[7].style.textDecoration='line-through'
            
        }
    }
    if ((tdata[2].textContent == 'X' && tdata[5].textContent == 'X' && tdata[8].textContent == 'X') || (tdata[2].textContent == 'O' && tdata[5].textContent == 'O' && tdata[8].textContent == 'O')) {
        if (tdata[2].textContent == 'X') {
            h3.textContent = "Congratulations X You win the game";
            disableClick();
            tdata[2].style.textDecoration='line-through'
            tdata[5].style.textDecoration='line-through'
            tdata[8].style.textDecoration='line-through'
            
        }
        else {
            h3.textContent = "Congratulations O You win the game";
            disableClick();
            tdata[2].style.textDecoration='line-through'
            tdata[5].style.textDecoration='line-through'
            tdata[8].style.textDecoration='line-through'
            
        }
    }
    if ((tdata[0].textContent == 'X' && tdata[4].textContent == 'X' && tdata[8].textContent == 'X') || (tdata[0].textContent == 'O' && tdata[4].textContent == 'O' && tdata[8].textContent == 'O')) {
        if (tdata[0].textContent == 'X') {
            h3.textContent = "Congratulations X You win the game";
            disableClick();
            tdata[0].style.textDecoration='line-through'
            tdata[4].style.textDecoration='line-through'
            tdata[8].style.textDecoration='line-through'
            
        }
        else {
            h3.textContent = "Congratulations O You win the game";
            disableClick();
            tdata[0].style.textDecoration='line-through'
            tdata[4].style.textDecoration='line-through'
            tdata[8].style.textDecoration='line-through'
            
        }
    }
    if ((tdata[2].textContent == 'X' && tdata[4].textContent == 'X' && tdata[6].textContent == 'X') || (tdata[2].textContent == 'O' && tdata[4].textContent == 'O' && tdata[6].textContent == 'O')) {
        if (tdata[2].textContent == 'X') {
            h3.textContent = "Congratulations X You win the game";
            disableClick();
            tdata[2].style.textDecoration='line-through'
            tdata[4].style.textDecoration='line-through'
            tdata[6].style.textDecoration='line-through'
            
        }
        else {
            h3.textContent = "Congratulations O You win the game";
            disableClick();
            tdata[2].style.textDecoration='line-through'
            tdata[4].style.textDecoration='line-through'
            tdata[6].style.textDecoration='line-through'
            
        }
    }
}

var count = 1;

tdata[0].addEventListener('click', function () {
    if (count % 2 == 0 && tdata[0].textContent == '') {
        chanceX();
        tdata[0].textContent = 'O';
        count++;
    }
    else if (count % 2 != 0 && tdata[0].textContent == '') {
        chanceO();
        tdata[0].textContent = 'X';
        count++;
    }
    result();
    if(count==10 && h3.textContent==''){
        h3.textContent='Game Tie';
        h3.style.color='red';
    }

})
tdata[1].addEventListener('click', function () {
    if (count % 2 == 0 && tdata[1].textContent == '') {
        chanceX();
        tdata[1].textContent = 'O';
        count++;
    }
    else if (count % 2 != 0 && tdata[1].textContent == '') {
        chanceO();
        tdata[1].textContent = 'X';
        count++;
    }
    result();
    if(count==10 && h3.textContent==''){
        h3.textContent='Game Tie';
        h3.style.color='red';
    }

})
tdata[2].addEventListener('click', function () {
    if (count % 2 == 0 && tdata[2].textContent == '') {
        chanceX();
        tdata[2].textContent = 'O';
        count++;
    }
    else if (count % 2 != 0 && tdata[2].textContent == '') {
        chanceO();
        tdata[2].textContent = 'X';
        count++;
    }
    result();
    if(count==10 && h3.textContent==''){
        h3.textContent='Game Tie';
        h3.style.color='red';
    }

})
tdata[3].addEventListener('click', function () {
    if (count % 2 == 0 && tdata[3].textContent == '') {
        chanceX();
        tdata[3].textContent = 'O';
        count++;
    }
    else if (count % 2 != 0 && tdata[3].textContent == '') {
        chanceO();
        tdata[3].textContent = 'X';
        count++;
    }
    result();
    if(count==10 && h3.textContent==''){
        h3.textContent='Game Tie';
        h3.style.color='red';
    }
})
tdata[4].addEventListener('click', function () {
    if (count % 2 == 0 && tdata[4].textContent == '') {
        chanceX();
        tdata[4].textContent = 'O';
        count++;
    }
    else if (count % 2 != 0 && tdata[4].textContent == '') {
        chanceO();
        tdata[4].textContent = 'X';
        count++;
    }
    result();
    if(count==10 && h3.textContent==''){
        h3.textContent='Game Tie';
        h3.style.color='red';
    }
})
tdata[5].addEventListener('click', function () {
    if (count % 2 == 0 && tdata[5].textContent == '') {
        chanceX();
        tdata[5].textContent = 'O';
        count++;
    }
    else if (count % 2 != 0 && tdata[5].textContent == '') {
        chanceO();
        tdata[5].textContent = 'X';
        count++;
    }
    result();
    if(count==10 && h3.textContent==''){
        h3.textContent='Game Tie';
        h3.style.color='red';
    }
})
tdata[6].addEventListener('click', function () {
    if (count % 2 == 0 && tdata[6].textContent == '') {
        chanceX();
        tdata[6].textContent = 'O';
        count++;
        console.log(count)
    }
    else if (count % 2 != 0 && tdata[6].textContent == '') {
        chanceO();
        tdata[6].textContent = 'X';
        count++;
    }
    result();
    if(count==10 && h3.textContent==''){
        h3.textContent='Game Tie';
        h3.style.color='red';
    }
})
tdata[7].addEventListener('click', function () {
    if (count % 2 == 0 && tdata[7].textContent == '') {
        chanceX();
        tdata[7].textContent = 'O';
        count++;
    }
    else if (count % 2 != 0 && tdata[7].textContent == '') {
        chanceO();
        tdata[7].textContent = 'X';
        count++;
    }
    result();
    if(count==10 && h3.textContent==''){
        h3.textContent='Game Tie';
        h3.style.color='red';
    }
})
tdata[8].addEventListener('click', function () {
    if (count % 2 == 0 && tdata[8].textContent == '') {
        chanceX();
        tdata[8].textContent = 'O';
        count++;
    }
    else if (count % 2 != 0 && tdata[8].textContent == '') {
        chanceO();
        tdata[8].textContent = 'X';
        count++;
    }
    result();
    if(count==10 && h3.textContent==''){
        h3.textContent='Game Tie';
        h3.style.color='red';
    }
})


