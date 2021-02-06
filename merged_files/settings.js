document.querySelector('.logout').addEventListener('click',() => {
    event.preventDefault();
    console.log('logout');
    window.location = 'HomePage nav.html'
});
//Link wishlist page 
document.querySelector('.wishlist').addEventListener('click',() => {
    event.preventDefault();
    console.log('wishlist');
    window.location = 'wish.html';
});
//Link Setting page
document.querySelector('.setting').addEventListener('click',() => {
    event.preventDefault();
    console.log('setting');
    window.location = 'settings.html';
});

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
    if(newpass === newrepass)
    {
       updatePassword(newrepass , user_id)
       document.querySelector(".error_display").textContent = "Successfully Changed the Password!!"
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
    
    function Display_User_Name() {
        var email = localStorage.getItem("email")
        var password = localStorage.getItem("password")
    
        var work_name = document.getElementById("circle")
        var array = email.split('@')
        console.log(array)
        var firstletter = array[0]
        console.log(firstletter)
        work_name.innerHTML =  firstletter[0].toUpperCase()
        document.getElementById("usenmdisplay").textContent = array[0].toUpperCase()
        console.log(email, password)
    }
    window.onload = Display_User_Name();