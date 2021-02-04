document.getElementById("saveBtn").addEventListener("click",()=>{
          
    var password = localStorage.getItem("password")
    var user_id = localStorage.getItem("user_login_id")
    var oldpass = document.getElementById("oldpass").value
    var newpass = document.getElementById("newpass").value
    var newrepass = document.getElementById("repass").value
console.log(password)
        if(password != oldpass)
        {
            console.log("NOt")
        }
    if(newpass == newrepass)
    {
       updatePassword(newrepass , user_id)
    }
    else{
       
        document.querySelector(".error_display").textContent = "Entered Password is not correct"
    }
    })

    function updatePassword(rpass, userid)
    {
console.log(rpass,userid)



let url = `http://localhost:3008/login/${userid}`
fetch(url, {
    method: "PATCH",
    body: JSON.stringify({
        id: userid,
        password:rpass
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch((er) => {
        console.log(er)
    })

    }
