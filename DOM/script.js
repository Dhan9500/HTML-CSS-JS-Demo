var h1 = document.querySelector('h1')
var p = document.querySelector('p')
var h2a = document.getElementsByTagName('h2')[0]
var h2b = document.getElementsByTagName('h2')[1]
var ul = document.querySelector('ul')
var ol = document.querySelector('ol')
var a = document.querySelector('a')

var anc=document.querySelector('a')
anc.setAttribute('href','https://www.google.com')
anc.innerHTML='<h2>Google</h2>'


function getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (let i = 0; i < 6; i++) {
        var c = Math.floor(Math.random() * 16)
        color = color + letters[c];
    }
    return color;
}
function colorChange() {
    h1.style.color = getRandomColor()
    p.style.color = getRandomColor()
    h2a.style.color = getRandomColor()
    h2b.style.color = getRandomColor()
    ul.style.color = getRandomColor()
    ol.style.color = getRandomColor()
    a.style.color = getRandomColor()
    document.body.style.backgroundColor=getRandomColor()
}
colorChange()
// setInterval(colorChange, 1000)




