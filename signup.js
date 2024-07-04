
let input=document.querySelectorAll('input');
let email=input[0].value;
let password=input[1].value;

const saveData=()=>{
    let arr=[input[0].value,input[1].value];
let adata=localStorage.getItem("adminData");
if(adata===null){
    let json=[];
    json.push(arr);
    localStorage.setItem("adminData",JSON.stringify(json));
    // openpopupbox();
    alert("saved data successfully")
}
else{
let json=JSON.parse(localStorage.getItem("adminData"));
json.push(arr);
localStorage.setItem("adminData",JSON.stringify(json));
    alert("saved data successfully")
    // openpopupbox();
}
}
createAccount.addEventListener('click',(e)=>{
    e.preventDefault();
        saveData();
    });
    createAccount.addEventListener('keyup',(e)=>{
        e.preventDefault();
        if(e.code==='Enter'){
            saveData();
        }
        });