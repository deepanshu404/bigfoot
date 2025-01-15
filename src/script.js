// function loadimage(){
//     document.getElementById('bigfoot').src="/img/bigfoot.png"
// }
function imgDisplay(){
    document.getElementById('a').src="/img/bigfoot.png"
}
function moveImg(){
    alert("You have Won!!")
    var picture = document.getElementById('a')
    var x = Math.random()*300;
    var y = Math.random()*300;
    picture.style.top = x + 'px';
    picture.style.left = y + 'px';
    
}