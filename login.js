
let data =[];

function createAccount(){
    let name= document.getElementById("name").value;
    let number= document.getElementById("num").value;
    let email= document.getElementById("mail").value;
    let password= document.getElementById("pass").value;

    let p1= new loginAcc(name,number,email,password);
    data.push(p1)
    localStorage.setItem("signup",JSON.stringify(data))
   
}


function loginAcc(n,nm,e,p){
    this.name=n;
    this.number=nm;
    this.email=e;
    this.password=p;


}

// console.log("hi")
