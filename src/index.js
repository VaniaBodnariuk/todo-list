let list = [];

const input = document.querySelector("input");
const elemDone = document.querySelector(".done ul");
const elemNotDone = document.querySelector(".notDone ul");

function addNew() {
    if (input.value === "") return;
    list.push({
        task: input.value,
        status: false
    });
    displayList();
    input.value = "";
}
document.getElementById("add").addEventListener("click", () => {
    addNew();
});

function checkNumber(number) {
    if (list[number].status) list[number].status = false;
    else list[number].status = true;
    displayList();
}

function displayList() {
    elemNotDone.innerHTML = "";
    elemDone.innerHTML = "";
    list.forEach((item, i) => {
        const li = document.createElement("li");
        if (item.status) {
            li.addEventListener("click", () => {
                checkNumber(i);
            });
            li.innerHTML = item.task;
            elemDone.append(li);
        } else {
            li.addEventListener("click", () => {
                checkNumber(i);
            });
            li.innerHTML = item.task;
            elemNotDone.append(li);
        }
    });
}
