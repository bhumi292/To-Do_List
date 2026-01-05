const inputbox = document.getElementById("input-box");
const listcontent = document.getElementById("list");

function addtask(){
    if(inputbox.value === ''){
        alert("must be write");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontent.appendChild(li); //appendchild(add new element)
        //add cross icon
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputbox.value = ""; //another value mate
    savedata();
}

//checked unchecked process
listcontent.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);

//add task and save task

function savedata(){
    localStorage.setItem("data", listcontent.innerHTML)
}

function showtask(){
    listcontent.innerHTML = localStorage.getItem("data");
}
showtask();