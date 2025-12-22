



let Login =()=>{

    let LoginName=document.querySelector("#Loginname").value
    let LoginPass=document.querySelector("#Loginpass").value

    let LocalName=localStorage.getItem("name")
    let LocalPass=localStorage.getItem("password")

    if (LocalName==LoginName && LocalPass==LoginPass){ 
        location.href='home.html'
        return false
    }
    else{
        alert("please enter valid password")
        return false
    }


}