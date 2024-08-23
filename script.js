let inputBox=document.querySelector("#todo-input");
let listContainer=document.querySelector(".list-container");
function addTask(){
    if(inputBox.value===""){
        alert("You must enter something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
let btn=document.querySelector(".add");
btn.addEventListener("click",addTask);

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){e.target.classList.toggle("checked")
        saveData();}
    else if(e.target.tagName==="SPAN"){e.target.parentElement.remove();
        saveData();
    }
},false);

inputBox.addEventListener("keydown",function(e){
    if(e.key==="Enter"){
        addTask();
    }
})
function saveData(){
localStorage.setItem("data",listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showData();