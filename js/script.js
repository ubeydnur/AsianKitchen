const menu = [{
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
        id: 9,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
    },
];

const filterBtns = document.querySelector('#filter');
const menuDom = document.querySelector('#menu')
let btnNames = ['All', 'Korea', 'Japan', 'China']

createBtn();
startPage();

// create buttons
function createBtn() {

    for (let i = 0; i < btnNames.length; i++) {
        //create a
        let btn = document.createElement('a')
        btn.classList.add('btn', 'btn-outline-dark', 'ml-2')
        btn.id = btnNames[i]
        btn.setAttribute('href', '#')
        btn.innerHTML = `${btnNames[i]}`

        //add a to ul
        filterBtns.appendChild(btn)
    }
}

//select btn
const allBtn = document.querySelector('#All');
const koreaBtn = document.querySelector('#Korea');
const japanBtn = document.querySelector('#Japan');
const chinaBtn = document.querySelector('#China');

//create item
function createItem(i) {
    let menuItem = document.createElement('div');
    menuItem.classList.add('d-flex', 'my-5', 'col-lg-6', 'col-sm-12')
    menuDom.appendChild(menuItem);
    menuItem.innerHTML = `
            <img src="${menu[i].img}" alt="">
            <div class="w-100 ml-3">
                <div class="d-flex justify-content-between border-bottom border-dark text-danger">
                    <h4>${menu[i].title}</h4>
                    <h4>${menu[i].price}</h4>
                </div>
                <div class="mt-4">
                ${menu[i].desc}
                </div>
            </div>
`
}

//start page
function startPage() {
    for (let i = 0; i < menu.length; i++) {
        createItem(i)
    }
}

allBtn.addEventListener('click', function() {
    menuDom.innerHTML = ""
    for (let i = 0; i < menu.length; i++) {
        createItem(i)
    }
})

koreaBtn.addEventListener('click', function() {
    menuDom.innerHTML = ""
    let val = [0, 2, 6]
    for (let i = 0; i < val.length; i++) {
        createItem(val[i])
    }
})

japanBtn.addEventListener('click', function() {
    menuDom.innerHTML = ""
    let val = [1, 5, 8]
    for (let i = 0; i < val.length; i++) {
        createItem(val[i])
    }
})

chinaBtn.addEventListener('click', function() {
    menuDom.innerHTML = ""
    let val = [3, 4, 7]
    for (let i = 0; i < val.length; i++) {
        createItem(val[i])
    }
})