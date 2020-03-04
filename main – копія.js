console.log("Script ready");

function moveBall(dx, dy) {
  let ballElem=document.getElementById("ball");
  console.log(ballElem.offsetLeft);
  ballElem.style.left=(ballElem.offsetLeft+dx)+"px";
  ballElem.style.top=(ballElem.offsetTop+dy)+"px";
}

function bounceBall() {
  let ballElem=document.getElementById("ball");
  console.log(ballElem.offsetLeft);

  if(ballElem.offsetLeft<1000)
  ballElem.style.left=(ballElem.offsetLeft +1 )+"px";

  if(ballElem.offsetTop<300)
  ballElem.style.top=(ballElem.offsetTop + 1)+"px";
}

setInterval(bounceBall, 10);
