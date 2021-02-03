window.addEventListener("load", function () {
    fetchQues()
})

function fetchQues() {
    let url = " http://localhost:3008/question"
    fetch(url)
        .then(res => res.json())
        .then(data => { displayQues(data) })
}


function displayQues(data) {
    var output = ""
    for (i in data) {
        console.log(data[i].question)

        output += `<div class= display>
                <button id = "${data[i].id}" onClick = "redirect(this)"> Q ${data[i].id} : ${data[i].question}</button>
                </div>`
    }
    document.getElementById("res").innerHTML = output
}

function redirect(e) {
    let id = e.id;
    console.log(id)
    let param = new URLSearchParams()
    param.append('id', id)
    url = "ques.html"
    window.location.assign(url + "?" + param.toString())
}