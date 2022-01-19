const myForm=document.querySelector("form")
const myUsername=document.querySelector("#username");
const myEmail=document.querySelector("#email");
const myPhone=document.querySelector("#phone");
const myPassword=document.querySelector("#password");
const myConfirmPassword=document.querySelector("#confirmPassword");
const visible=document.querySelectorAll(".fa-eye");
const notVisible=document.querySelectorAll(".fa-eye-slash");

/*validUsername function*/
var validUsername=()=>{
    
    const myValue=myUsername.value;
    const errorDisplay=document.querySelectorAll(".error")[0];
    if(!myValue.match(/.+/)){
        errorDisplay.innerHTML="please enter a username";
        return false;
    }else{
        errorDisplay.innerHTML="";
        return true;
    }
    
   
};

/*validUsername function*/

/*validEmail function*/
var validEmail=()=>{
    
    const myValue=myEmail.value;
    const errorDisplay=document.querySelectorAll(".error")[1];
    const re=/^([a-zA-Z]+)(\d*)@(gmail).(com)$/;
    if(re.test(myValue)){
        errorDisplay.innerHTML="";
        return true;
    }else{
        errorDisplay.innerHTML="please enter a valid email";
        return false;
    }
}
/*validEmail function*/

/*validPhone function*/
var validPhone=()=>{
    
    const myValue=myPhone.value;
    const errorDisplay=document.querySelectorAll(".error")[2];
    if(myValue.match(/\d{8}/)){
        errorDisplay.innerHTML="";
        return true;
    }else{
        errorDisplay.innerHTML="please enter a valid phone number";
        return false;
    }
}
/*validPhone function*/

/*validPassword function*/
var validPassword=()=>{
    
    const myValue=myPassword.value;
    const errorDisplay=document.querySelectorAll(".error")[3];
    if(myValue.match(/.{8,}/) && 
    myValue.match(/[a-z]/) &&
    myValue.match(/[A-Z]/) &&
    myValue.match(/\d/) &&
    myValue.match(/[!@#\]]/))
    {   
        errorDisplay.innerHTML="";
        return true;
    }else{
        errorDisplay.innerHTML="password not secure enough"
        return false;
    }
}
/*validPassword function*/

/*validConfirmPassword function*/
var validConfirmPassword=()=>{
    
    const myValue1=myPassword.value;
    const myValue2=myConfirmPassword.value;
    const errorDisplay=document.querySelectorAll(".error")[4];
    if(myValue1==myValue2){
        errorDisplay.innerHTML="";
        return true;
    }else{
        errorDisplay.innerHTML="please enter the same password";
        return false;
    }
}

/*validConfirmPassword function*/

/*validation of password while typing*/
myPassword.addEventListener('input',()=>{
    const myList=document.querySelectorAll("li");
    const myValue=myPassword.value;
    const reg1=/.{8,}/;
    const reg2=/[a-z]/;
    const reg3=/[A-Z]/;
    const reg4=/\d/;
    const reg5=/[!@#\]]/;

    if(reg1.test(myValue)){
        myList[0].style.color="green";
    }else{
        myList[0].style.color="black";
    }

    if(reg2.test(myValue)){
        myList[1].style.color="green";
    }else{
        myList[1].style.color="black";
    }

    if(reg3.test(myValue)){
        myList[2].style.color="green";
    }else{
        myList[2].style.color="black";
    }

    if(reg4.test(myValue)){
        myList[3].style.color="green";
    }else{
        myList[3].style.color="black";
    }

    if(reg5.test(myValue)){
        myList[4].style.color="green";
    }else{
        myList[4].style.color="black";
    }

});

/*validation of password while typing*/

myForm.addEventListener('submit',(e)=>{

    validEmail();
    validPhone();
    validPassword();
    validConfirmPassword();
    const test=validUsername() && validEmail() && validPhone() && validPassword() && validConfirmPassword();
    if(!test){ 
            e.preventDefault();
        }
      
        
        
});

/*toggle password*/
notVisible[0].addEventListener('click',()=>{
    notVisible[0].style.visibility="hidden";
    myPassword.type="text";
    visible[0].style.visibility="visible";
});

visible[0].addEventListener('click',()=>{
    visible[0].style.visibility="hidden";
    myPassword.type="password";
    notVisible[0].style.visibility="visible";
});

notVisible[1].addEventListener('click',()=>{
    notVisible[1].style.visibility="hidden";
    myConfirmPassword.type="text";
    visible[1].style.visibility="visible";
});

visible[1].addEventListener('click',()=>{
    visible[1].style.visibility="hidden";
    myConfirmPassword.type="password";
    notVisible[1].style.visibility="visible";
});
/*toggle password*/





