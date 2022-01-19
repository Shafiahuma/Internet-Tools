const ctx = document.getElementById('canvas').getContext('2d');
window.addEventListener('resize',resize);
resize();
let mousePos={
    X:0,
    Y:0
}
window.addEventListener('mousemove',draw);
window.addEventListener('mousedown',mousePosition);
window.addEventListener('mouseenter',mousePosition);

function mousePosition(e)
{
    mousePos.X =e.clientX;
    mousePos.Y = e.clientY;
}

function resize()
{
    ctx.canvas.width=window.innerWidth;
    ctx.canvas.height= window.innerHeight;
}

function draw(e)
{
    if(e.buttons !==1)
        return;
    ctx.beginPath();
    ctx.lineCap = 'round' ;
    ctx.strokeStyle = '#421';
    ctx.lineWidth =5;
    ctx.moveTo(mousePos.X,mousePos.Y);
    mousePosition(e);
    ctx.lineTo(mousePos.X,mousePos.Y);
    ctx.stroke();
}