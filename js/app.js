const add = document.querySelector("#add");
const board = document.querySelector("#board");
let tarefa = document.querySelector(".tarefa");
let input = document.querySelector("#novaTarefa");


function cadastro(){
    board.innerHTML += `<div class="tarefa">
    <div class="col-md-8">${input.value}</div>
    <div class="col-md-2"><img class="icon" src="img/check.png"></div> 
</div>`;
    input.value ="";
    input.style.border= "black";
} // pode ser com creatElement criando div por div

add.addEventListener('click', function (){

    if(input.value.trim().length == 0){
        input.style.border= "solid 4px red";
        alert("Não pode ser vazio");
        return
    } else cadastro();
})

input.addEventListener('keypress', function (e){

    if(e.keyCode === 13 && input.value.trim().length == 0){
        input.style.border= "solid 4px red";
        alert("Não pode ser vazio");
        return
    }
    if(e.keyCode === 13 && input.value.trim().length > 0){
        cadastro();
    }
})


board.addEventListener('click',function(e){
    if(e.target.tagName == 'IMG'){
        e.path[2].remove()
    }
})

console.log(event);


//novaTarefa.addEventListener("key")

//usar o trim