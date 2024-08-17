let val = document.querySelector(".val");
let length = document.querySelector(".show h4");
let eye = document.querySelector(".show i");
let chk1 = document.querySelector(".check1");
let chk2 = document.querySelector(".check2");
let chk3 = document.querySelector(".check3");
let chk4 = document.querySelector(".check4");
let chk5 = document.querySelector(".check5");
let reset_btn = document.querySelector(".reset");

let visible = false;

reset_btn.addEventListener("click", function(){
    val.value = "";
    length.innerText = `Length : ${val.value.length}`;
    reset();
});

eye.addEventListener("click", function(){
    if(visible === false){
        eye.setAttribute("class", "fa-regular fa-eye");
        val.setAttribute("type", "text");
        visible = true;
    }else{
        eye.setAttribute("class", "fa-regular fa-eye-slash");
        val.setAttribute("type", "password");
        visible = false;
    }
});

val.addEventListener("input", function(){
    let numerical = false;
    let special = false;
    let n = val.value;
    
    length.innerText = `Length : ${n.length}`;

    n.length>5 ? chk1.classList.add("valid") : chk1.classList.remove("valid");
    n.length<10 ? chk2.classList.add("valid") : chk2.classList.remove("valid");
    
    for(let i = 0; i<n.length; i++){
        if(n.charCodeAt(i) >=48 && n.charCodeAt(i)<=57){
            numerical = true;
            break;
        }
    }
    numerical === false ? chk3.classList.remove("valid") : chk3.classList.add("valid");

    for(let i = 0; i<n.length; i++){
        if(n.charCodeAt(i) >=33 && n.charCodeAt(i)<=47){
            special = true;
            break;
        }
    }
    special === false ? chk4.classList.remove("valid") : chk4.classList.add("valid");

    n.indexOf(" ") == -1 ? chk5.classList.add("valid") : chk5.classList.remove("valid");

    if(n.length == 0){
        reset();
    }
});
function reset(){
    chk1.classList.remove("valid");
    chk2.classList.remove("valid");
    chk3.classList.remove("valid");
    chk4.classList.remove("valid");
    chk5.classList.remove("valid");
}