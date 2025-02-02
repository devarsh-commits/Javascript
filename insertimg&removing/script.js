let div=document.createElement("div");
div.innerHTML("Hey I have been created")
div.setAttribute("class","inserted");
document.querySelector(".container").append(div);
