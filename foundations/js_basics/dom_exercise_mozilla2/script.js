const unOrdered = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

function addToList(input, list) {
    const userIn = input.value;
    input.value = "";
    const newList = document.createElement('li');
    const newSpan = document.createElement('span');
    const newBtn = document.createElement('button');
    newList.appendChild(newSpan);
    newList.appendChild(newBtn);
    newSpan.textContent = userIn;
    newBtn.textContent = "Delete";
    list.append(newList)
    newBtn.addEventListener('click', () => list.removeChild(newList));
    input.focus();
}
btn.addEventListener('click', () => addToList(input, unOrdered));
