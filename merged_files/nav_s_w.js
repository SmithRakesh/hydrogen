window.addEventListener('load',() => {
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

    //search bar bg-img dynamic change
    // changeSearchBarBg();
    
    // addEvents();
});

// function changeSearchBarBg() {
//     function image_1() {
//         setInterval(() => {
//             document.querySelector(".search-bar-bg-img").src ='src/search-bar homepage/search_bar_bg_1.jpg';
//             image_2()
//         },5000);
//     }
//     function image_2() {
//         setInterval(() => {
//             document.querySelector(".search-bar-bg-img").src ='src/search-bar homepage/search_bar_bg_2.jpg';
//             image_1()
//         },5000);
//     }
//     image_1()
// }

function addEvents() {
    //selecting all a tags to add preventDefault
    // document.querySelectorAll('a').forEach(ele => ele.addEventListener('click',() => event.preventDefault()));

    //apperance & dissaperance of the searchbar 
    document.querySelector('body').addEventListener('click', () => {
        // console.log(event.target);
        if(event.target.className === 'search' || event.target.className === 'search material-icons' || event.target.className === 'search_input' || event.target.className === 'material-icons search_icon') {
            // document.querySelector('.search_bar').style.display = 'block';
        }
        else if (event.target.className === 'login') {
            handleLogin();
            // document.querySelector('.search_bar').style.display = 'none';
        }
        else {
            // document.querySelector('.search_bar').style.display = 'none';
        }
    });

    //search bar text color change
    document.querySelector("#search").addEventListener('click',() => event.target.style.color = 'gray');

    //menu_down buttons onclick events
    let menu_down = document.querySelectorAll('.menu_down');
    menu_down.forEach(ele => ele.addEventListener('click',() => highlight(menu_down)));


}

function highlight(menu_down) {
    // console.log(event.target.id);
    menu_down.forEach(ele => ele.style.borderBottom = `3px solid white`);
    let menuId = event.target.id;
    
    if (menuId === 'mdproducts') {
        event.target.style.borderBottom = `3px solid goldenrod`;
        showProducts()
    }
    else if (menuId === 'mdcollection') {
        event.target.style.borderBottom = `3px solid goldenrod`;
        showCollections();
    }
    else if (menuId === 'mdbuild') {
        event.target.style.borderBottom = `3px solid goldenrod`;
        showBuild();
    }
}
function showProducts() {
    document.querySelector('.categories_build').style.display = 'none';
    let categories = document.querySelector('.categories');
    categories.innerHTML = '';
    categories.innerHTML += `<div>
        <a href=""><img src="src/dropdowns/products/bedroom.svg" />BEDROOM</a>
    </div>
    <div>
        <a href=""><img src="src/dropdowns/products/living_room.svg" />LIVING ROOM</a>
    </div>
    <div>
        <a href=""><img src="src/dropdowns/products/appliances.svg" />APPLIANCES</a>
    </div>
    <div>
        <a href=""><img src="src/dropdowns/products/sp_deals.svg" />SPECIAL DEALS</a>
    </div>
    <div>
        <a href=""><img src="src/dropdowns/products/full_home.svg" />FULL HOME</a>
    </div>
    <div>
        <a href=""><img src="src/dropdowns/products/storage.svg" />STORAGE</a>
    </div>
    <div>
        <a href=""><img src="src/dropdowns/products/study_room.svg" />WORKSTATIONS</a>
    </div>
    <div>
        <a href=""><img src="src/dropdowns/products/kids.svg" />KIDS ROOM</a>
    </div>
    <div>
        <a href=""><img src="src/dropdowns/products/dining_room.svg" />DINING ROOM</a>
    </div>
    <div>
        <a href=""><img src="src/dropdowns/products/bike-rental_2.svg" />2-WHEELER</a>
    </div>`;
    categories.style.display = 'flex';
}
function showCollections() {
    document.querySelector('.categories_build').style.display = 'none';
    let categories = document.querySelector('.categories');
    categories.innerHTML = '';
    categories.innerHTML += `<div>
        <a href=""><img src="src/dropdowns/collection/2020.svg" />20-20 COLLECTION</a>
    </div>
    <div>
        <a href=""><img src="src/dropdowns/collection/most_popular.svg" />MOST POPULAR</a>
    </div>
    <div>
        <a href=""><img src="src/dropdowns/collection/essentials.svg" />ESSENTIALS</a>
    </div>
    <div>
        <a href=""><img src="src/dropdowns/collection/newly_launched_rocket.svg" />NEWLY LAUNCHED</a>
    </div>
    <div>
        <a href=""><img src="src/dropdowns/collection/storage.svg" />STORAGE COMBOS</a>
    </div>
    <div>
        <a href=""><img src="src/dropdowns/collection/award_winning.svg" />AWARD WINNERS</a>
    </div>
    <div>
        <a href=""><img src="src/dropdowns/collection/fab_rich.svg" />FAB RICH COLLECTION</a>
    </div>`;
    categories.style.display = 'flex';
}
function showBuild() {
    document.querySelector('.categories').style.display = 'none';
    let categories = document.querySelector('.categories_build');
    categories.style.display = 'flex';
}

///////////////////////////////////////////////////////JS//////////////////////////////////////////////////////////////////
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



