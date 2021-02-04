window.addEventListener("load", function () {
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
    div.append(img)


    var name = document.createElement("p")
    name.textContent = data.uname;
    name.style.fontSize = "16px"
    name.style.color = "black"
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

    divCard.append(div)

    img.addEventListener("click", () => {

        let id = 1;
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

    var work_name = document.getElementById("display_account")
    var array = email.split('@')
    console.log(array)

    work_name.innerHTML = "User : " + array[0].toUpperCase()

    console.log(email, password)
}
window.onload = Display_User_Name();