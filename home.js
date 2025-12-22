let username = localStorage.getItem("name")

// if (username) {
//     document.querySelector("#logname").innerHTML =
//         // `WELCOME TO HOME PAGE <br>
//         //  <h2> ${username} </h2>`
// } else {
//     location.href = "login.html"
// }

let FetchData = async ()=>{

let api = 'https://jsonplaceholder.typicode.com/posts'

let res = await fetch(api , {method:'get'})

let data = await res.json()

// console.log(data);

let show = document.querySelector("#datashow")

data.map((e)=>{
    show.innerHTML+=`
   <div class="card">
                <h3>${e.id}. ${e.title}</h3>
                <p>${e.body}</p>
                <button>Read More</button>
            </div>
    `
})


}
FetchData()