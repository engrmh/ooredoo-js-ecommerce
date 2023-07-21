let $ = document
const discountedProductContainer = $.querySelector('#discountedProducts')
const newProductContainer = $.querySelector('#newProducts')
const blogContainer = $.querySelector('#blogs')
const basketBtn = $.querySelector('#basketBtn')
const sellBasket = $.querySelector('#sellBasket')
const shopCard = $.querySelector('#shopCard')
const ShopCardValue = $.querySelector('#ShopCardValue')
const secondOfTimer = $.querySelector('#second')
const minutsOfTimer = $.querySelector('#minuts')
const hourOfTimer = $.querySelector('#hour')
const dayOfTimer = $.querySelector('#day')
const productHolder = $.querySelector('#productHolder')


window.addEventListener('load' , () => {
    discountedProducts()
    newProduccts()
    blogGen()
    cartCheck()
})

// Basket
basketBtn.addEventListener('mouseover' , () => {
    sellBasket.classList.remove('d-none')
})
basketBtn.addEventListener('mouseout' , () => {
    setTimeout(()=> {
        sellBasket.classList.add('d-none')
    },3000)
})

let shoppingCart = null
function cartCheck() {
    if (shoppingCart == null) {
        shopCard.innerHTML = ''
        shopCard.innerHTML = '<h6 class="text-center py-2">هیج محصولی در سبد خرید نیست.</h6>'
    }else{
        cartGen()
        basketBtn.addEventListener('click' , () => {
            window.location = 'shoppingCart.html'
        })
    }
}


// Discounted Products
function discountedProducts() {
    fetch('https://fakestoreapi.com/products?limit=4')
            .then(res=>res.json())
            .then(json=>{
                json.forEach(item => {
                    // console.log(json);
                    discountedProductContainer.insertAdjacentHTML('beforeend' , `
                        <div class="col-6 col-md-3 mb-3 mb-md-0">
                            <div class="pt-0 mt-0 d-flex flex-column justify-content-center align-items-center shadow rounded" id="firstProductSectionItem">
                                <h6 class="col-6 col-md-3 text-light bg-danger text-center px-1 py-2 rounded-bottom" style="font-size: 12px;">
                                    <span class="englishText">%</span>
                                    30 تخفیف
                                </h6>
                                <div class="">
                                    <img src="${item.image}" class="img-fluid my-4" alt="${item.title}" id="discountedProductImg">
                                </div>
                                <div class="w-75 overflow-auto" id="discountedProductTitle">
                                    <h6 class="mb-2 px-2 flex-nowrap">${item.title}</h6>
                                </div>
                                <div class="">
                                    <img src="./Asset/img/offStar.svg" class="img-fluid" alt="">
                                    <img src="./Asset/img/offStar.svg" class="img-fluid" alt="">
                                    <img src="./Asset/img/onStar.svg" class="img-fluid" alt="">
                                    <img src="./Asset/img/onStar.svg" class="img-fluid" alt="">
                                    <img src="./Asset/img/onStar.svg" class="img-fluid" alt="">
                                </div>
                                <span class="w-100 border-bottom"></span>
                                <div class="d-flex justify-content-between align-items-center py-2 px-2 w-100">
                                    <div class="me-2">
                                        <p class="themeColor">
                                            ${item.price}
                                            <span class="text-dark">تومان</span>
                                        </p>
                                    </div>
                                    <div class="">
                                        <a class="btn btn-danger d-flex justify-content-between align-items-center" href="product.html?id=${item.id}">
                                            <i class="bx bx-show fs-5 p-1""></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `)
                })
            })
}


// New Products
function newProduccts() {
    fetch('https://fakestoreapi.com/products?limit=2')
            .then(res=>res.json())
            .then(json=>{
                json.forEach(item => {
                    // console.log(item);
                    newProductContainer.insertAdjacentHTML('beforeend' , `
                        <div class="col-6 mb-3 mb-md-0">
                            <div class="pt-0 d-flex flex-column justify-content-center align-items-center shadow rounded" id="firstProductSectionItem">
                                <h6 class="col-3 col-md-2 text-light bg-danger text-center px-1 py-2 rounded-bottom" style="font-size: 13px;">
                                    جدید
                                </h6>
                                <img src="${item.image}" class="img-fluid my-4" alt="${item.title}" id="newProductImg">
                                <div class="w-75 overflow-auto" id="discountedProductTitle">
                                    <h6 class="mb-2 px-2 flex-nowrap text-center">${item.title}</h6>
                                </div>
                                <div class="">
                                    <img src="./Asset/img/offStar.svg" class="img-fluid" alt="">
                                    <img src="./Asset/img/offStar.svg" class="img-fluid" alt="">
                                    <img src="./Asset/img/onStar.svg" class="img-fluid" alt="">
                                    <img src="./Asset/img/onStar.svg" class="img-fluid" alt="">
                                    <img src="./Asset/img/onStar.svg" class="img-fluid" alt="">
                                </div>
                                <span class="w-100 border-bottom"></span>
                                <div class="d-flex justify-content-between align-items-center py-2 px-2 w-100 ">
                                    <div class="me-2">
                                        <p class="themeColor">
                                            ${item.price}
                                            <span class="text-dark">تومان</span>
                                        </p>
                                    </div>
                                    <div class="">
                                        <a class="btn btn-danger d-flex justify-content-between align-items-center" href="product.html?id=${item.id}">
                                            <i class="bx bx-show fs-5 p-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                    </div>
                    `)
                })
            })
}

const blogGen = () => {
    blogData.forEach(blog => {
        blogContainer.insertAdjacentHTML('beforeend', `
        <div class="col-6 col-md-3 mb-3 mb-md-0">
            <div class="pt-0 d-flex flex-column justify-content-center align-items-start shadow rounded" id="firstProductSectionItem">
                <img src="${blog.image}" class="img-fluid mb-3 rounded-top" alt="">
                <div class="mb-2 px-2">
                    <h6 class="">${blog.title}</h6>
                </div>
                <div class="col-12 px-2 mb-2 d-flex justify-content-between align-items-center">
                    <button class="btn btn-danger py-1 px-2 rounded me-2" style="font-size: 10px;">آموزشی</button>
                    <h6 class="d-flex justify-content-center align-items-center flex-column text-black-50 mb-0" style="font-size: 10px;">18 اسفند 1401</h6>
                    <h6 class="d-flex justify-content-center align-items-center flex-column text-black-50 mb-0" style="font-size: 10px;">کامیاب صارمی</h6>
                    <h6 class="d-flex justify-content-center align-items-center flex-column text-black-50 mb-0" style="font-size: 10px;">248 بازدید</h6>
                </div>
                <span class="w-100 border-bottom"></span>
                <div class="d-flex justify-content-start align-items-center py-2 px-2 w-100">
                    <p style="font-size: 13px;">
                        ${blog.description}
                    </p>
                </div>
            </div>
        </div>
        `)
    })
}

let second = 59
let minuts = 59
let hour = 12
let day = 12

const timer = () => {
    secondOfTimer.innerHTML = second
    minutsOfTimer.innerHTML = minuts
    hourOfTimer.innerHTML = hour
    dayOfTimer.innerHTML = day
    setInterval(()=>{
        if (second < 10) {
            secondOfTimer.innerHTML = '0' + second--
        }else{
            secondOfTimer.innerHTML = second--
        }
        if(second === -1){
            second = 59
            if (minuts < 10) {
                minutsOfTimer.innerHTML = '0' + minuts--
            }else{
                minutsOfTimer.innerHTML = minuts--
            }
        }
        if(minuts === 0){
            minuts = 59
            if (minuts < 10) {
                hourOfTimer.innerHTML = '0' + hour--
            }else{
                hourOfTimer.innerHTML = hour--
            }
        }
        if(hour === 0){
            hour = 23
            if (day < 10) {
                dayOfTimer.innerHTML = '0' + day--
            }else{
                dayOfTimer.innerHTML = day--
            }
        }
        if (day === -1) {
            clearInterval()
        }
    } , 1000)
}
timer()

import { blogData } from "./database.js"
