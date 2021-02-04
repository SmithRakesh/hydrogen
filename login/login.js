var username = document.getElementById('mail').value
var password = document.getElementById('password').value

let btn = document.querySelector('.btn')
let modalBg = document.querySelector('.modal-bg')
let login = document.querySelector('.login')
let closeBtn = document.querySelector('.close-btn')

btn.addEventListener('click',function() {
    modalBg.classList.add('modal-active')
})

login.addEventListener('click',function(e) {
    e.preventDefault()

    fetch("http://localhost:3008/login").then(res => res.json())
    .then(res => {checkuser(res)})
    .catch(err=>console.log(err))
})     

function checkuser(data)
{
    var username = document.getElementById('mail').value
var password = document.getElementById('password').value
    for( i in data)
    {
       
        if((username=== data[i].username) && (password=== data[i].password))
        {
        
           window.location= "card.html"
        }

    }
}

closeBtn.addEventListener('click',function() {
    modalBg.classList.remove("modal-active")
})

