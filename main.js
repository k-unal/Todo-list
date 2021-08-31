const inputBox=document.querySelector(".inputFeild input");
const addBtn=document.querySelector(".inputFeild button");
const todolist=document.querySelector(".todolist");
const deleteall=document.querySelector(".button");

inputBox.onkeyup=()=>{
    let userdata=inputBox.value;
    if(userdata.trim()!=0){
        addBtn.classList.add("active");
    }
    else{
        addBtn.classList.remove("active");
    }
}
show();
//ADD BUTTON
addBtn.onclick=()=>{
    let userdata=inputBox.value;
    let getLocalStorage = localStorage.getItem("new Todo");
    if (getLocalStorage==null){//if local storage is Null
        listArr=[];//creating blank array
    }
    else{
        listArr=JSON.parse(getLocalStorage);
    }
        listArr.push(userdata);
        localStorage.setItem("new Todo",JSON.stringify(listArr));
        show();
        
    }
    //SHOWING TASKS
    function show(){
        let getLocalStorage = localStorage.getItem("new Todo");
        if (getLocalStorage==null){//if local storage is Null
            listArr=[];//creating blank array
        }
        else{
            listArr=JSON.parse(getLocalStorage);
        }
        const pending =document.querySelector(".pending");
        pending.textContent=listArr.length;
        if(listArr.length>0){
            deleteall.classList.add("active");
        }else{
            deleteall.classList.remove("active");
        }
           let newLiTag='';
           listArr.forEach((element,index)=>{
               newLiTag +=`<li> ${element}<span onclick="delet(${index})";><i class="fas fa-trash"></i></span></li>`;
               
           });

    todolist.innerHTML=newLiTag;
    inputBox.value=" ";
        }
        function delet(index){
            let getLocalStorage = localStorage.getItem("new Todo");
            listArr=JSON.parse(getLocalStorage);
            listArr.splice(index,1);
            localStorage.setItem("new Todo",JSON.stringify(listArr));
            show();
        }
        deleteall.onclick=()=>{
            listArr=[];
            localStorage.setItem("new Todo",JSON.stringify(listArr));
            show();
                }

    

