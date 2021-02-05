window.addEventListener('load',() => {
    addEvents();
    loginModule();
});

function addEvents() {
    //selecting all a tags to add preventDefault
    document.querySelectorAll('a').forEach(ele => ele.addEventListener('click',() => event.preventDefault()));

    //apperance & dissaperance of the searchbar 
    document.querySelector('body').addEventListener('click', () => {
        // console.log(event.target);
        if(event.target.className === 'search' || event.target.className === 'search material-icons' || event.target.className === 'search_input' || event.target.className === 'material-icons search_icon') {
            document.querySelector('.search_bar').style.display = 'block';
        }
        else if (event.target.className === 'login') {
            handleLogin();
            document.querySelector('.search_bar').style.display = 'none';
        }
        else {
            document.querySelector('.search_bar').style.display = 'none';
        }
    });

    //Adding Mouse events to show Menu items
    document.getElementById('menu_products').addEventListener('mouseover',showMenu);
    document.getElementById('menu_collection').addEventListener('mouseover',showMenu);
    document.getElementById('menu_build_your_own').addEventListener('mouseover',showMenu);

    //Adding Events for categories
    let categories = document.querySelectorAll('.category');
    categories.forEach(ele => ele.addEventListener('click',() => selectCategory(categories)));

    //Adding Events for filter buttons
    let filters = document.querySelectorAll('.filter');
    filters.forEach(ele => ele.addEventListener('click',() => selectFilter(filters)));
}
function showMenu() {
    if (event.target.id === 'menu_products') {
        // console.log('Products');
        document.getElementById('products').style.display = 'flex';
        // document.getElementById('menu_products').addEventListener('mouseleave',closeMenu);
        document.getElementById('products').addEventListener('mouseleave',closeMenu);
    }
    else if (event.target.id === 'menu_collection') {
        // console.log('Collections');
        document.getElementById('collection').style.display = 'flex';
        document.getElementById('collection').addEventListener('mouseleave',closeMenu);
    }
    else if (event.target.id === 'menu_build_your_own') {
        // console.log('Build your own');
        document.getElementById('build_your_own').style.display = 'flex';
        document.getElementById('build_your_own').addEventListener('mouseleave',closeMenu);
    }
}

function closeMenu() {
    if (event.target.id === 'products' || event.target.id === 'menu_products') {
        // console.log('Products');
        document.getElementById('products').style.display = 'none';
    }
    else if (event.target.id === 'collection' || event.target.id === 'menu_collection') {
        // console.log('Collections');
        document.getElementById('collection').style.display = 'none';
    }
    else if (event.target.id === 'build_your_own' || event.target.id === 'menu_build_your_own') {
        // console.log('Build your own');
        document.getElementById('build_your_own').style.display = 'none';
    }
    else if (event.target.id === 'cart' || event.target.id === 'menu_cart') {
        // console.log('Collections');
        document.getElementById('cart').style.display = 'none';
    }
}

function selectCategory(categories) {
    event.preventDefault();
    // console.log(event.target.parentNode);
    if (event.target.parentNode.className === 'category') {
        //Resetting all items border to white
        categories.forEach(ele => ele.style.borderBottom = '4px solid white');
        //Setting border only for the selected item
        event.target.parentNode.style.borderBottom = '4px solid rgb(253, 191, 32)';
    }
}
function selectFilter(filters) {
    event.preventDefault();
    // console.log(event.target.parentNode);
    if (event.target.parentNode.className === 'filters') {
        //Resetting all buttons to unselected
        filters.forEach(ele => {
            ele.style.backgroundColor = 'white';
            ele.style.color = '#356BA0';
        });
        //Setting styles for selected only
        event.target.style.color = 'white';
        event.target.style.backgroundColor = '#356BA0';
    }
}

function handleLogin() {
    console.log(event.target);
    if (event.target.id === 'logged_out') {
        showLogin();
    }
    else {
        showLogout();
    }
}

function showLogin() {
    console.log('Login module');
    // console.log(event.target)

    var username = document.getElementById('mail').value
    var password = document.getElementById('password').value

    let btn = document.querySelector('.btn')
    let modalBg = document.querySelector('.modal-bg')
    let login = document.querySelector('.login_modal')
    let closeBtn = document.querySelector('.close-btn')

    modalBg.classList.add('modal-active');

    login.addEventListener('click',function(e) {
        e.preventDefault();

        fetch("http://localhost:3008/login").then(res => res.json())
        .then(res => {checkuser(res)})
        .catch(err=>console.log(err))
    });
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

    //on successive login change ids to logged-in
    // document.querySelectorAll('#logged_out').forEach(ele => ele.id = 'logged_in');
    // document.querySelector('.logout_dropdown').style.display = 'block';
    // document.querySelector('.login').addEventListener('mouseover',() => document.querySelector('.logout_dropdown').style.display = ' block');
}
function showLogout() {
    console.log('Logout module');

    //on successive logout change ids to logged-out
    // document.querySelectorAll('#logged_in').forEach(ele => ele.id = 'logged_out');
    // document.querySelector('.logout_dropdown').style.display = 'none';
}






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
    let x=JSON.parse(localStorage.getItem("addCart"))

    console.log(x.length)
    document.getElementById("num_cart").textContent=x.length
