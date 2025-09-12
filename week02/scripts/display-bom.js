const input = document.querySelector("#favchap");
const addButton = document.querySelector("button");
const list = document.querySelector("#list");

addButton.addEventListener("click", function () {
    if (input.value.trim() != "") {
        const li = document.createElement("li");
        const dltButton = document.createElement("button");

        li.textContent = input.value;
        dltButton.textContent = "❌";
        dltButton.setAttribute("aria-label", "Remove Alma 5");

        li.append(dltButton);

        list.append(li);

        dltButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        });
    } else {
        input.focus();
        alert("Please enter your favorite chapter!");
    }
    input.value = "";
    input.focus();
});


