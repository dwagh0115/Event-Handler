let emailInput = document.getElementById("email");
let passInput = document.getElementById("pwd");
let button = document.getElementById("btn");
let msgdiv1 = document.getElementById("message1");
let msgdiv2 = document.getElementById("message2");


emailInput.addEventListener("keypress" ,validate1);

function validate1(){
    let email = emailInput.value;
    let pass = passInput.value;
   
    
    if(email != "" && email.includes("@") && email.includes(".") && email.length >3){
        console.log(" Correct Email")
        msgdiv1.innerText=""
    }
    else{
        msgdiv1.innerText="Make sure email is more than 3 characters and has @ and ."
        msgdiv1.style.color ="red";
    }
       
}
passInput.addEventListener("keypress" ,validate2);
function validate2(){
    let email = emailInput.value;
    let pass = passInput.value;
    
     if(pass != "" && pass.length >= 8){
            msgdiv2.innerText= "All Good to Go!!";
            msgdiv2.style.color = "Green";
            button.removeAttribute("disabled")
            
        }
    else{
       
        msgdiv2.innerText= "Make sure password is more than 8 characters";
        msgdiv2.style.color = "red";

    }
}

 
 
 function myFunction() {
    let msg = document.getElementById("demo");
    let text = "Press a button!\nEither OK or Cancel.";
    if (confirm(text) == true) {
        msgdiv2.innerText =""
        msg.innerText = "SignUp Successful!!";
     
      msg.style.color = "Green";
      msg.style.fontSize= 20;
      
    } else {
      msg.innerText="You canceled!";
      msg.style.color = "Red";
    }
   // document.getElementById("demo").innerHTML = text;
   
  }

