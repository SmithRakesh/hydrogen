window.addEventListener('load',addEvents);

function addEvents() {
    //Adding Mouse events to show Menu items
    document.getElementById('menu_products').addEventListener('mouseover',showMenu);
    document.getElementById('menu_collection').addEventListener('mouseover',showMenu);
    document.getElementById('menu_build_your_own').addEventListener('mouseover',showMenu);
    document.getElementById('menu_cart').addEventListener('mouseover',showMenu);

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
    else if (event.target.id === 'menu_cart') {
        // console.log('Build your own');
        document.getElementById('cart').style.display = 'flex';
        document.getElementById('cart').addEventListener('mouseleave',closeMenu);
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




// let cat=function living(e){
//     return e.id
// }
// console.log(cat)


function living(main){
    var e=main.id
        localStorage.setItem("main_thing",JSON.stringify(e))
        fetch(`http://localhost:3000/${e}`)
        .then(res=>res.json())
        .then(res=>{
         output=""
        for(let i=0;i<res.length;i++){
            output+=`<div class="box" id=${res[i].id} onclick="loadData(this)">
                        <div class="change">
                            <div class="wish"><span class="wishlist"> Add to wishlist</span><span><i class="far fa-heart"></i></span></div>
                            <img src=${res[i].img}>
                        </div>
                        <h3>${res[i].name}</h3>
                        <p>🚚 72 Days</p>
                        <div class="hidden_files">
                            <button id=${res[i].id} class="value" onmouseover="loadValue(this,${e})">value</button>
                            <button id=${res[i].id} class="prime" onmouseover="loadPrime(this,${e})">prime</button>
                            <div class="screen1">
                            </div>
                        </div>
                        <div class="btn">
                            <button id=${res[i].id} class="price_button" onclick="loadData(this)">$${res[i].total}/m</button>
                        </div>
                    </div>`
                }
            document.getElementById("screen").innerHTML=output;
        })
}
    function loadData(e){
    main=JSON.parse(localStorage.getItem("main_thing"))

    console.log(e.id)
    let params= new URLSearchParams()
    params.append("main",main)
    params.append('id',e.id)
    params.toString()
    console.log(params)
    let url="desc.html"
    console.log(url+"?"+params.toString())
    window.location.assign(url+"?"+params.toString())
    }

  // let x=JSON.parse(localStorage.getItem("addCart"))

function loadValue(ei){
    id=ei.id;
    main=JSON.parse(localStorage.getItem("main_thing"))

    fetch(`http://localhost:3000/${main}`)
    .then(res=>res.json())
    .then(res=>{
        for(var i=0;i<res.length;i++){
            if(id==res[i].id){
                output="";
                let value=res[i].value
                for(var j=0;j<value.length;j++){
                    output+=`<img class="image_hover" src=${value[j]}>`
                }
                document.getElementsByClassName("screen1")[i].innerHTML=output
                document.getElementsByClassName("change")[i].innerHTML=`<img src=${res[i].value_img}>`
                document.getElementsByClassName("btn")[i].innerHTML= `<button id=${res[i].id} onclick="loadData(this)">$${res[i].tot_value}/m</button>`
            }
        }
    })
}
function loadPrime(ei){
    id=ei.id;
    main=JSON.parse(localStorage.getItem("main_thing"))
    fetch(`http://localhost:3000/${main}`)
    .then(res=>res.json())
    .then(res=>{
        for(var i=0;i<res.length;i++){
            if(id==res[i].id){
                output="";
                let prime=res[i].prime
                for(var j=0;j<prime.length;j++){
                    output+=`<img class="image_hover" src=${prime[j]}>`
                }
                document.getElementsByClassName("screen1")[i].innerHTML=output
                document.getElementsByClassName("change")[i].innerHTML=`<img   src=${res[i].prime_img}>`
                document.getElementsByClassName("btn")[i].innerHTML= `<button id=${res[i].id} onclick="loadData(this)">$${res[i].tot_prime}/m</button>`
            }
        }
    })
}
// let x=JSON.parse(localStorage.getItem("addCart"))

//     console.log(x.length)
//     document.getElementById("num_cart").textContent=x.length