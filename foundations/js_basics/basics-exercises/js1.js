// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);
// create a p with red texts
const firstP = document.createElement("p");
firstP.style.color = 'red';
firstP.textContent = "Hey I'm red!";
container.appendChild(firstP);

//create a h3 with blue text
const firstH3 = document.createElement("h3");
firstH3.style.color = 'blue';
firstH3.textContent = "I'm a blue h3!";
container.appendChild(firstH3);

//create a div with black border and pink bg color
const newDiv = document.createElement("div");
newDiv.style.borderWidth = '10px';
newDiv.style.borderRadius = "3px";
newDiv.style.borderStyle = "solid";
newDiv.style.borderColor = "black";
newDiv.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
newDiv.appendChild(h1);

const p2 = document.createElement("p");
p2.textContent = "ME TOO!";
newDiv.appendChild(p2);

container.appendChild(newDiv);
