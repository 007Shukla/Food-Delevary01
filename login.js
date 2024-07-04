let input=document.querySelectorAll('input');
let email=input[0].value;
let password=input[1].value;

// let logINButton=document.querySelector('#logINButton');
// let forGetPass=document.querySelector('a');
// let createAccount=document.querySelector('#createAccount');
// let popup=document.getElementById('box');
// function openpopupbox(){
// document.getElementById('box').classList.add("open-popup")
// }
// function closepopup(){
// popup.classList.remove("open-popup");
// window.open(`index.html`)
// }

const match=()=>{
let input=document.querySelectorAll('input');
    let isLogin=false;
    // let arr=[input[0].value,input[1].value];
    let data=JSON.parse(localStorage.getItem("adminData"));
    Array.from(data).forEach((e)=>{
        for (const i of e) {
            if(i===input[0].value||i===input[1].value){
                isLogin=true;
                    }  
        }
                });
        if(isLogin){
let go=confirm(`you are login what you want to go home page`); 
(go)?window.open(`index.html`):"thanks";           
        }
        else{
            alert('email or password invalid invalid')
        }
    }

    logINButton.addEventListener('click',(e)=>{
        e.preventDefault();
            match();
        });
        logINButton.addEventListener('keyup',(e)=>{
            e.preventDefault();
            if(e.code==='Enter'){
                match();
            }
            });