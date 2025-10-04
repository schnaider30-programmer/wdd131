const { js } = require("js-beautify/js/src");

const input = document.querySelector("#favchap");
const addButton = document.querySelector("button");
const list = document.querySelector("#list");
let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
    displayList(chapter);
});

function displayList(item)
{
    const li = document.createElement("li");
    const dltButton = document.createElement("button");

    li.textContent = item;
    dltButton.textContent = "❌";
    dltButton.setAttribute("aria-label", "Remove Alma 5");
    dltButton.classList.add("delete")
    li.append(dltButton);

    list.append(li);

    dltButton.addEventListener("click", function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.Slice(0, chapter.lenght - 1); //the method returns a portion of the array selected from start to end(end not included) index.
    chaptersArray = chaptersArray.filter(item => item !== chapter); //Creates a new array with all elements that pass the test implemented by the provided callback function.
    setChapterList();
}

addButton.addEventListener("click", function ()
{
    if (input.value.trim() != "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();

    }
    else {
        input.focus();
        alert("Please enter your favorite chapter!");
    }
    input.value = "";
    input.focus();
});






