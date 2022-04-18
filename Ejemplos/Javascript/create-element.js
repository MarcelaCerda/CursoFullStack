const div1 = document.createElement("div");
div1.id = "page"; // 
div1.className = "data";
div1.style = "color:red";
document.body.appendChild(div1);
console.log(div1.isConnected);
div1.innerHTML = "lorem..."