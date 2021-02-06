window.addEventListener("load", function () {
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


    var data = JSON.parse(localStorage.getItem("product_wish"))
    for (i in data) {
        // console.log(data[i])
        displayWish(data[i])
    }
})

function displayWish(data) {

    var divCard = document.getElementById("res")
    var divVal = document.getElementById("tval")

    var div = document.createElement("div")
    div.setAttribute("class", "val")

    var img = document.createElement("img")
    img.src = data.uimg;
    img.style.width = "100%"
    div.append(img)


    var name = document.createElement("p")
    name.textContent = data.uname;
    name.style.fontSize = "16px"
    name.style.color = "black"
    name.style.textAlign = "left"
    name.style.marginTop = "20px"
    div.append(name)


    var exp = document.createElement("p")
    exp.textContent = data.uexp;
    name.style.color = "grey"
    div.append(exp)

    // console.log(data.uexp)


    var val = document.createElement("p")
    val.innerHTML = "&#8377; " + data.utval + "  / " + " month";
    val.setAttribute("class", "tval")
    div.append(val)

    var buttonremove = document.createElement("button")
    buttonremove.textContent = "Remove from Wishlist"
    buttonremove.style.border = "none"
    buttonremove.style.color = "#346AA0"
    buttonremove.style.background = "pink"
    buttonremove.style.fontSize = "16px"
    buttonremove.style.paddingTop = "0px"
    buttonremove.setAttribute("class", "tval")
    div.append(buttonremove)

    buttonremove.addEventListener("click",()=>{
    console.log(data.uid)
     var items = JSON.parse(localStorage.getItem("product_wish"))
     console.log(items)
     var emptyArr = []
     for(var j =0 ; j<items.length;j++)
     {
         if(data.uid !== items[j].uid)
         {
            emptyArr.push(items[j])
         }               

     }
     localStorage.removeItem("product_wish")
     localStorage.setItem("product_wish",JSON.stringify(emptyArr))
     
     console.log(emptyArr)
     window.location.reload();
    })
    divCard.append(div)

    img.addEventListener("click", () => {

        let id = data.id;
        // console.log(id)
        let param = new URLSearchParams()
        param.append('id', id)
        url = "desc.html"
        window.location.assign(url + "?" + param.toString())
    })

}

function Display_User_Name() {
    var email = localStorage.getItem("email")
    var password = localStorage.getItem("password")

    var work_name = document.getElementById("circle")
    // var array = email.split('@')
    // console.log(array)
    // var firstletter = array[0]
    // console.log(firstletter)
    // work_name.innerHTML =  firstletter[0].toUpperCase()
    // document.getElementById("usenmdisplay").textContent = array[0].toUpperCase()
    // console.log(email, password)
}
window.onload = Display_User_Name();


