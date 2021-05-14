let list = []

const input = document.querySelector("input");
const elemDone = document.querySelector(".done ul");
const elemNotDone = document.querySelector(".notDone ul");

function addNew() {
    if (input.value === "") return;
    list.push(
        {
            "task": input.value,
            "status": false
        }
    )
    displayList();
    input.value = "";
}

function displayList(){
    elemNotDone.innerHTML = "";
    elemDone.innerHTML = "";
    list.forEach((item, i) => {
        if(item.status)
            elemDone.innerHTML += "<li onclick = \"checkNumber(" + i + ") \">" + item.task + "</li>";
        else
            elemNotDone.innerHTML += "<li onclick = \"checkNumber(" + i + ") \">" + item.task + "</li>";
    });
}

function checkNumber(number){
    if(list[number].status) list[number].status = false;
    else list[number].status = true;
    displayList();
}
