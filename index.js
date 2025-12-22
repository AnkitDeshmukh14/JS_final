// let FormValidate=()=>{
//     let Name=document.querySelector('#name').value.trim()
//     let Number=document.querySelector('#number').value.trim()
//     let Email=document.querySelector('#email').value.trim()
//     let Pass=document.querySelector('#pass').value.trim()
//     let Cpass=document.querySelector('#cpass').value.trim()

//     let Errname=document.querySelector('#errname')
//     let Errnumber=document.querySelector('#errnumber')
//     let Erremail=document.querySelector('#errEmail')
//     let Errpass=document.querySelector('#errpass')
//     let Errcpass=document.querySelector('#errcpass')


//     if (Name==""){
//         Errname.innerHTML="please enter your name"
//         Errname.style.color='aqua'
//         return false
//     }
    
//     if (Number.length!=10){
//         Errnumber.innerHTML="please enter valid number"
//         return false
//     }
//     else if(isNaN(Number)){
//         Errnumber.innerHTML="please enter  number"
//         return false

//     }
//     else if (Number==""){
//         Errnumber.innerHTML="please enter number"
//         Errnumber.style.color='aqua'
//         return false
//     }
//     if (!(Email.includes("@") && Email.includes('.com'))){
//         Erremail.innerHTML="Email do"
//         Erremail.style.color='aqua'
//         return false
//     }
//     if (!(Pass.match(/[1234567890]/)&&
//     Pass.match(/[!@#$^&*]/)&&
//     Pass.match(/[a-z]/)&&
//     Pass.match(/[A-Z]/)
//     )){
//         Errpass.innerHTML="please enter strong password"
//         Errpass.style.color="aqua"
//         return false 
//     }
//     if (Cpass==""){
//         Errcpass.innerHTML="please enter correct password"
//         Errcpass.style.color='aqua'
//         return false
//     }
//     else if(Cpass != Pass){
//         alert("password does not match")
//         return false
//     }

// localStorage.setItem("name",Name)
// localStorage.setItem("number",Number)
// localStorage.setItem("email",Email)
// localStorage.setItem("password",Pass)
// location.href="login.html";
// return false
// }

function FormValidate() {

    let Name = document.querySelector('#name').value.trim();
    let Number = document.querySelector('#number').value.trim();
    let Email = document.querySelector('#email').value.trim();
    let Pass = document.querySelector('#pass').value.trim();
    let Cpass = document.querySelector('#cpass').value.trim();

    let Errname = document.querySelector('#errname');
    let Errnumber = document.querySelector('#errnumber');
    let Erremail = document.querySelector('#errEmail');
    let Errpass = document.querySelector('#errpass');
    let Errcpass = document.querySelector('#errcpass');

    Errname.innerHTML = Errnumber.innerHTML =
    Erremail.innerHTML = Errpass.innerHTML =
    Errcpass.innerHTML = "";

    if (Name === "") {
        Errname.innerHTML = "Naam likh naa";
        return false;
    }

    if (Number === "" || Number.length !== 10 || isNaN(Number)) {
        Errnumber.innerHTML = "Valid 10 digit number do";
        return false;
    }

    if (!Email.includes("@") || !Email.includes(".com")) {
        Erremail.innerHTML = "Valid email do";
        return false;
    }

    if (!(Pass.match(/[0-9]/) &&
          Pass.match(/[!@#$^&*]/) &&
          Pass.match(/[a-z]/) &&
          Pass.match(/[A-Z]/))) {

        Errpass.innerHTML = "Strong password chahiye";
        return false;
    }

    if (Cpass === "") {
        Errcpass.innerHTML = "Confirm password do";
        return false;
    }

    if (Pass !== Cpass) {
        Errcpass.innerHTML = "Password match nahi hua";
        return false;
    }

    // ✅ Save data
    localStorage.setItem("email", Email);
    localStorage.setItem("password", Pass);

    // ✅ Redirect
    window.location.href = "login.html";
    return false;
}
