let cursor = document.getElementById("fake-cursor");
let callToAction = document.getElementById("call-to-action");
let width = callToAction.clientWidth;
let height = callToAction.clientHeight;
let showCursor = true;

window.addEventListener("mousemove", function(e){
  if(showCursor){
    let clientX = e.clientX;
    let clientY = e.clientY;

    let box = callToAction.getBoundingClientRect();
    let left = box.left + width/2;
    let top = box.top + height/2;

    let deg = angle(clientX, clientY, left, top);

    cursor.style = `position: absolute; left: ${clientX}px; top: ${clientY}px; transform: rotate(${deg + 115}deg); transform-origin: top left;`;
  }
});

function angle(cx, cy, ex, ey) {
  var dy = ey - cy;
  var dx = ex - cx;
  var theta = Math.atan2(dy, dx);
  theta *= 180 / Math.PI;
  return theta;
}

function clicked(){
  document.getElementById("call-to-action").style = "display: none";
  document.getElementById("done").style = "display: block";
  document.body.style = "cursor: auto";
  cursor.style = "display: none";
  showCursor = false;
}