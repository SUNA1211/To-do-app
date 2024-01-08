const inputTask = document.getElementById("input_task");
const list = document.getElementById("list");

function add(){
    if (inputTask.value === ""){
        alert("Write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputTask.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputTask.value = "";
}

list.addEventListener("click", function(i){
    if(i.target.tagName === "LI"){
        i.target.classList.toggle("checked");
    }
    else if(i.target.tagName == "SPAN"){
        i.target.parentElement.remove();
    }
}, false);