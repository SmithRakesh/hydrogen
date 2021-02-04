let details = document.querySelector('.details')
let addon = document.querySelector('.addon-bg')
let close = document.querySelector('.close-btn')

window.addEventListener("load", () => {
    var url = "http://localhost:3008/add_appliances"
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(resp => displayApplicance(resp))
        .catch(err => console.log(err))
})

var cards = document.getElementById("card")
cards.setAttribute("class", "cards")
function displayApplicance(data) {

    var outBtn = ""
    for (i in data) {
        let card = document.createElement("div")
        card.setAttribute("class", "card")

        cards.append(card)


        outBtn += `<div class="card">
                    <img class ="card_img" src=${data[i].img}></img>
                    <h4>${data[i].title}</h4>
                    <h5>${data[i].price} /month</h5>
        <button id = "${data[i].id}" class ="btnview" onClick ="popUp(this)"> View Deatils </button>
        <button class="priceBtn"> - </button>
        <button class="priceBtn"> + </button>
        </div>`

    }
    cards.innerHTML = outBtn
}

function popUp(data) {
    console.log(data.id)
    let id = data.id

    var url = `http://localhost:3008/add_appliances?id=${id}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(resp => displayAddOns(resp))
        .catch(err => console.log(err))

    addon.classList.add('addon-active')
}


function displayAddOns(data) {
    for (i in data) {
        console.log(data[i].id)
        var ldiv = document.getElementById("add-left")

        var img = document.createElement("img")
        img.src = data[i].img
        ldiv.append(img)


        var rdiv = document.getElementById("row1")
        var rtitle = document.createElement("p")
        rtitle.textContent = data[i].title
        rtitle.style.fontWeight = "bold"
        rdiv.append(rtitle)


        var rdesc = document.createElement("p")
        rdesc.textContent = data[i].descp
        rdiv.append(rdesc)

        var rprice = document.createElement("p")
        rprice.textContent = data[i].price + " / month"
        rdiv.append(rprice)

        if (data[i].id == 901 || data[i].id == 902) {
            var sdiv = document.getElementById("spec-left")
            
            var sdesc = document.createElement("p")
            sdesc.textContent = "Form Factor      :     " + data[i].spec_form_factor
            sdiv.append(sdesc)


            var scap = document.createElement("p")
            scap.textContent = "Capacity      :     " + data[i].spec_capacity
            sdiv.append(scap)

            var stab = document.createElement("p")
            stab.textContent = "Stabiliser      :     " + data[i].spec_stabi
            sdiv.append(stab)

            var scool = document.createElement("p")
            scool.textContent = "Cooler      :     " + data[i].spec_cool
            sdiv.append(scool)
        
            var sdefor = document.createElement("p")
            sdefor.textContent = "Cooler      :     " + data[i].spec_Defor
            sdiv.append(sdefor)
        }
        if (data[i].id == 903 || data[i].id == 904 || data[i].id == 905){
            var srdiv = document.getElementById("spec-left")
            
            var sport = document.createElement("p")
            sport.textContent = "HDMI Port       :     "  + data[i].spec_HDMI_port
            srdiv.append(sport)


            var sready = document.createElement("p")
            sready.textContent = "HD Ready       :     "  + data[i].spec_HD_ready
            srdiv.append(sready)

            var stv = document.createElement("p")
            stv.textContent = "Smart TV       :     " + data[i].spec_Smart_Tv
            srdiv.append(stv)

            var sdis = document.createElement("p")
            sdis.textContent = "Display       :     "  + data[i].spec_spec_Display_panel
            srdiv.append(sdis)
        
            var susb = document.createElement("p")
            susb.textContent = "USB       :     " + data[i].spec_USB
            srdiv.append(susb)

            var sav = document.createElement("p")
            sav.textContent = "AV        :     " + data[i].spec_Av
            srdiv.append(sav)

            var sremote = document.createElement("p")
            sremote.textContent = "Remote       :     " + data[i].spec_remote
            srdiv.append(sremote)

            var sstab = document.createElement("p")
            sstab.textContent = "Stabiliser       :     " + data[i].spec_stabi
            srdiv.append(sstab)
        }
    }

}
close.addEventListener('click', closePopUp)
function closePopUp() {
    addon.classList.remove('addon-active')
    window.location.reload();
}