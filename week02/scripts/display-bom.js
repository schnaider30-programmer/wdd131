const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#li");

const entry = document.createElement("li");
const dltButton = document.createElement("button");

entry.textContent = input.value;
dltButton.textContent = "❌";
dltButton.setAttribute("aria-label", "Remove Alma 5");

entry.append(dltButton);

list.append(entry)