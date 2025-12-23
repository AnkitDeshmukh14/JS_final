let FormValidate=()=>{
    let Name=document.querySelector('#name').value.trim()
    let Number=document.querySelector('#number').value.trim()
    let Email=document.querySelector('#email').value.trim()
    let Pass=document.querySelector('#pass').value.trim()
    let Cpass=document.querySelector('#cpass').value.trim()

    let Errname=document.querySelector('#errname')
    let Errnumber=document.querySelector('#errnumber')
    let Erremail=document.querySelector('#errEmail')
    let Errpass=document.querySelector('#errpass')
    let Errcpass=document.querySelector('#errcpass')


    if (Name==""){
        Errname.innerHTML="please enter your name"
        Errname.style.color='aqua'
        return false
    }
    
    if (Number.length!=10){
        Errnumber.innerHTML="please enter valid number"
        return false
    }
    else if(isNaN(Number)){
        Errnumber.innerHTML="please enter  number"
        return false

    }
    else if (Number==""){
        Errnumber.innerHTML="please enter number"
        Errnumber.style.color='aqua'
        return false
    }
    if (!(Email.includes("@") && Email.includes('.com'))){
        Erremail.innerHTML="Email do"
        Erremail.style.color='aqua'
        return false
    }
    if (!(Pass.match(/[1234567890]/)&&
    Pass.match(/[!@#$^&*]/)&&
    Pass.match(/[a-z]/)&&
    Pass.match(/[A-Z]/)
    )){
        Errpass.innerHTML="please enter strong password"
        Errpass.style.color="aqua"
        return false 
    }
    if (Cpass==""){
        Errcpass.innerHTML="please enter correct password"
        Errcpass.style.color='aqua'
        return false
    }
    else if(Cpass != Pass){
        alert("password does not match")
        return false
    }

localStorage.setItem("name",Name)
localStorage.setItem("number",Number)
localStorage.setItem("email",Email)
localStorage.setItem("password",Pass)
location.href="login.html";
return false
}

