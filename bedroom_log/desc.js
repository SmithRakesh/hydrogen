
        let query = window.location.search
        if (query !== "") {
        }

    
        let querys = new URLSearchParams(query)
        let id = querys.get('id')
        let main=querys.get('main')
        var url = `http://localhost:3000/${main}?id=${id}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(resp => displayData(resp))
            .catch(err => console.log(err))


    function displayData(resp) {
        for (i in resp) {


            var ldiv = document.getElementById("left")
            ldiv.setAttribute("class", "left")

            var lres = document.createElement("div")
            var rres = document.createElement("div")
            // ldiv.setAttribute("class","img_div_img")

            var img = document.createElement("img")
            img.src = resp[i].img
            lres.append(img)

         

            var valueBtn = document.createElement("button")
            valueBtn.innerHTML = "&#8377; " + resp[i].tot_prime
            valueBtn.setAttribute("class", "btnbasic")
            lres.append(valueBtn)

            var wishBtn = document.createElement("button")

            wishBtn.innerHTML = "🤍"
            wishBtn.setAttribute("class", "btnbasic")
            lres.append(wishBtn)

            // console.log(basciBtn)

            var rdiv = document.getElementById("product_title")
            var disPric = document.getElementById("display_price")


            var ltitl = document.getElementById("prod_title")
            var lexp = document.getElementById("prod_explan")
            var lten = document.getElementById("package_calendar")
            var he = document.createElement("h1")
            he.textContent = resp[i].title;
            he.style.fontSize = "16px"
            he.style.padding = "8px"
            ltitl.append(he)


            var ht = document.createElement("p")
            ht.textContent = resp[i].explanation;
            ht.style.fontSize = "16px"
            ht.style.padding = "8px"

            lexp.append(ht)

            // var hten = document.createElement("h3")
            // hten.innerHTML = "Monthly tenture " + resp[i].tenture + " months";
            // hten.style.fontSize = "16px"
            // hten.style.padding = "8px"
            // hten.style.color = "black"
            // lten.append(hten)

            lpackimg = document.querySelector(".package_content_img")
            lpackimg_div = document.createElement("div")

            // lpackimg_div_1 = document.createElement("img")
            // lpackimg_div_1.src = resp[i].basic[i].img_1
            // lpackimg_div.append(lpackimg_div_1)


            // lpackimg_div_2 = document.createElement("img")
            // lpackimg_div_2.src = resp[i].basic[i].img_2
            // lpackimg_div.append(lpackimg_div_2)

            // lpackimg_div_3 = document.createElement("img")
            // lpackimg_div_3.src = resp[i].basic[i].img_3
            // lpackimg_div.append(lpackimg_div_3)


            // lpackimg_div_4 = document.createElement("img")
            // lpackimg_div_4.src = resp[i].value[i].img_1
            // lpackimg_div.append(lpackimg_div_4)


            var hw = document.createElement("h1")
            hw.textContent = resp[i].name;
            hw.style.fontSize = "16px"
            hw.style.padding = "8px"

            rres.append(hw)

            var priceDisplay = document.createElement("h1")
            priceDisplay.innerHTML = "&#8377; " + resp[i].tot_value
            priceDisplay.style.fontSize = "20px"
            // priceDisplay.style.marginTop = "40px"
            disPric.append(priceDisplay)


            lpackimg = document.querySelector(".package_content_img")
            lpackimg_div2 = document.createElement("div")

            var basciBtn = document.createElement("button")
            basciBtn.innerHTML = "&#8377; " + resp[i].tot_value
            basciBtn.setAttribute("class", "btnbasic")
            lres.append(basciBtn)

            basciBtn.addEventListener("click", () => {

                priceDisplay.innerHTML = "&#8377; " + resp[i].tot_value
                img.src = resp[i].value_img
                // let valueD = resp[i].value
                // for (var j = 0; j < valueD.length; j++) {
                //     lpackimg_div_1 = document.createElement("img")
                //     lpackimg_div_1.src = valueD[j]
                //     lpackimg_div.append(lpackimg_div_1)
                //     lpackimg.append(lpackimg_div2)
                // }
                localStorage.setItem("instance",JSON.stringify(resp[i].tot_value))
            })

            valueBtn.addEventListener("click", () => {
                priceDisplay.innerHTML = "&#8377; " + resp[i].tot_prime
                img.src = resp[i].prime_img
                let valueP = resp[i].prime
         
                for (var k = 0; k < valueP.length; k++) {
                    lpackimg_div_1 = document.createElement("img")
                    lpackimg_div_1.src = valueP[k]
                    lpackimg_div.append(lpackimg_div_1)
                    lpackimg.append(lpackimg_div)

                }
                localStorage.setItem("instance",JSON.stringify(resp[i].tot_prime))
            })

            wishBtn.addEventListener("click", () => {
                wishBtn.style.backgroundColor = "red"
                save_to_wish(resp[i].id, resp[i].name, resp[i].img, resp[i].explanation, resp[i].tot_value, resp[i].tot_prime)
                console.log(resp[i].explanation)
            })

            function save_to_wish(uid, uname, uimg, uexp, utval, utprim) {
                var randomData = JSON.parse(localStorage.getItem("product_wish")) || [];
                var retrivedData = { uid, uname, uimg, uexp, utval, utprim }
                var prod = [...randomData, retrivedData]
                localStorage.setItem("product_wish", JSON.stringify(prod))
            }

            var valexpcon = resp[i].value_exp

            console.log(valexpcon)
            let valueP = resp[i].prime
            for (var x = 0; x < valexpcon.length; x++) {

                console.log(valexpcon[x].title)
                var pck = document.getElementById("pack_includes")
                var lpack = document.createElement("div")
                lpack.setAttribute("class", "lpack")
                var rpack = document.createElement("div")
                rpack.setAttribute("class", "rpack")

                var lh1 = document.createElement("img")
                lh1.src = valueP[x]
                lpack.append(lh1)
                pck.append(lpack)

                var rh1 = document.createElement("h3")
                rh1.textContent = valexpcon[i].title
                rpack.append(rh1)
                pck.append(rpack)

                var rh2 = document.createElement("p")
                rh2.textContent = valexpcon[i].pexp
                rpack.append(rh2)
                pck.append(rpack)


                var rh3 = document.createElement("p")
                rh3.textContent = "Quantity " + valexpcon[i].qunt
                rpack.append(rh3)
                pck.append(rpack)

                var rh4 = document.createElement("p")
                rh4.textContent = valexpcon[i].qexp
                rpack.append(rh4)
                pck.append(rpack)

            }

            ldiv.append(lres, ltitl, lexp, lten, lpackimg)
            rdiv.append(rres)
            rdiv.append(disPric)
        }
    }

    var countDownDate = new Date("Feb 3, 2022 15:37:25").getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();

        var distance = countDownDate - now;

        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("demo").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);

    var a=[];
    a=JSON.parse(localStorage.getItem("addCart"))||[]
    function addLocal(){
        main=JSON.parse(localStorage.getItem("main_thing"))
        fetch(`http://localhost:3000/${main}?id=${id}`)
        .then(res=>res.json())
        .then(res=>{
            main_thing=JSON.parse(localStorage.getItem("instance"))
        res[0].selected=main_thing,
        res[0].quantity=1
        console.log(main_thing)
        a.push(res)
        localStorage.setItem("addCart",JSON.stringify(a))
        })
    }
