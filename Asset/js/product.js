let $ = document
const basketBtn = $.querySelector('#basketBtn')
const sellBasket = $.querySelector('#sellBasket')
const productHolder = $.querySelector('#productHolder')


window.addEventListener('load' , () => {
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
        basketBtn.addEventListener('click' , () => {
            window.location = 'shoppingCart.html'
        })
    }
}

//Product Page
let locationSearch = new URLSearchParams(location.search)
let searchId = locationSearch.get('id') -1

fetch('https://fakestoreapi.com/products?limit=4')
    .then(res => res.json())
    .then(json => {
        productHolder.insertAdjacentHTML('beforeend' , `
            <h4 class="mt-md-5 border-bottom pb-3 pt-4 pt-lg-3" id="productTitle">${json[searchId].title}</h4>
            <div class="col-12 my-5 border-bottom pb-5">
                <div class="row">
                    <div class="col-12 col-md-8">
                        <div class="row">
                            <div class="col-1 d-flex justify-content-center align-content-center flex-column">
                                <i class='bx bx-heart fs-3 mb-4'></i>
                                <i class='bx bxs-share-alt fs-3 mb-4' ></i>
                                <i class='bx bxs-bell-ring fs-3 mb-4' ></i>
                                <i class='bx bx-line-chart fs-3 mb-4' ></i>
                                <i class='bx bx-list-ul fs-3 mb-4'></i>
                            </div>
                            <div class="col-9 d-flex justify-content-md-start ms-5 ms-lg-0 align-items-center">
                                <img src="${json[searchId].image}" class="img-fluid" style="width: 20rem;" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 px-2 bg-light shadow-lg rounded">
                        <h4 class="text-center my-3 pb-2 border-bottom ">
                            ${json[searchId].price}
                            <span>تومان</span>
                        </h4>
                        <h6 class="mb-2 pb-2 px-4">
                            گارانتی ندارد
                        </h6>
                        <h6 class="mb-5 px-4">
                            دسته بندی:
                            <span>${json[searchId].category}</span>
                        </h6>
                        <div class="d-flex justify-content-center mb-3 mb-md-0">
                            <a href="" class="btn btn-danger text-center w-50 mx-3" id="addToCart" onclick="sendData(${json[searchId]})">افزودن به سبد خرید</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mb-5">
                <h4 class="text-decoration-underline pb-2">
                    توضیحات محصول
                </h4>
                <p class="pe-lg-5">
                    ${json[searchId].description}
                </p>
            </div>
            `)
    });

function sendData(data) {
    console.log(data);
}

