
let toDo=document.querySelector(".to-do");
let txt=document.querySelector(".txt");
console.log(txt);
btnAdd=document.getElementById("add-btn");
btnAdd.addEventListener('click',()=>{
    // console.log('you click')
    let text=txt.value;
        if(text!=""){
        toDo.innerHTML+="<li> <button class='complete-btn'>Complete</button> <button class='delete-btn'>Delete</button> <text class='item'>"+text+"</text><li>"
        eventListner();
        deleteListner();
        
    }else{
            alert("you need to entre new task please");
        }
        txt.value="";

    })
    function eventListner(){

    let btn =document.getElementsByClassName("complete-btn")
    let item = document.getElementsByClassName("item");
    console.log(item)

    for(let i=0;i<btn.length;i++){
        // console.log(j)
        // let j=btn.indexOf(i);
    btn[i].addEventListener('click',(ev)=>{ item[i].classList.toggle('active');
    console.log(btn)
    btn[i].classList.toggle("active")
    
})

}
}


function deleteListner(){
    let btn =document.getElementsByClassName("delete-btn");
    for(let i=0;i<btn.length;i++){
        btn[i].addEventListener('click',()=>{
            btn[i].parentElement.style.display="none";

        })
    }

}