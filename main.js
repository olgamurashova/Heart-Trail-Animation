const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event)=>{
    
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const span = document.createElement("span");
    span.style.left = xPos + "px";
    span.style.top = yPos + "px";
    bodyEl.appendChild(span);

})