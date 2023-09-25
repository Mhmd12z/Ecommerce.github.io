let selectedImg = document.querySelectorAll("#selectedImg img");
let openImg = document.querySelector(".photos .full")
let links = document.querySelector(".nav .links");
let menuIcon = document.querySelector(".nav .menuIcon");
let closeBtn = document.querySelector(".full .close");
let closeBtnMenu = document.querySelector(".links .close");
let imgsSlider1 = document.querySelectorAll(".home .imgsSlider1 img");
let imgsSlider2 = document.querySelectorAll(".home .imgsSlider2 img");
let imagesPaths = ["./images/image-product-1.jpg", "./images/image-product-2.jpg", "./images/image-product-3.jpg", "./images/image-product-4.jpg"];
let countItemsInCart = document.querySelector(".profile .countItems");
let count = 0;
let price = 0;
function depositPrice(n) {
    price += 125.00;
};
function withdrawPrice(n) {
    price -= 125.00;
};
document.querySelector(".home").addEventListener("click", function () {
    links.classList.remove("closeMenu")
})
closeBtnMenu.addEventListener("click", function () {
    links.classList.toggle("closeMenu");
})
menuIcon.addEventListener("click", function () {
    links.classList.toggle("closeMenu");
})
selectedImg[0].addEventListener("click", function () {
    openImg.classList.toggle("openImg");
})
closeBtn.addEventListener("click", function () {
    openImg.classList.toggle("openImg");
})
function chosenImg(id) {
    selectedImg.forEach((img) => {
        img.src = imagesPaths[id];
    })
    for (let i = 0; i < imgsSlider1.length; i++) {
        imgsSlider1[i].classList.remove("active");
    }
    for (let i = 0; i < imgsSlider2.length; i++) {
        imgsSlider2[i].classList.remove("active");
    }
    imgsSlider1[id].classList.add("active");
    imgsSlider2[id].classList.add("active");
    count = id;
}
let prevBtn = document.querySelector(".full .prev");
let nextBtn = document.querySelector(".full .next");
prevBtn.addEventListener("click", function () {
    count--;
    if (count < 0) {
        count = 3;
    }
    selectedImg.forEach((img) => {
        img.src = imagesPaths[count];
    })
    chosenImg(count);
})
nextBtn.addEventListener("click", function () {
    count++;
    if (count >= 4) {
        count = 0;
    }
    selectedImg.forEach((img) => {
        img.src = imagesPaths[count];
    })
    chosenImg(count);
})
let plusBtn = document.querySelector(".btns .plus");
let minusBtn = document.querySelector(".btns .minus");
let numQuantity = document.querySelector(".btns .count .num");
let quantity = 0;
minusBtn.addEventListener("click", function () {
    quantity--;
    if (quantity < 0) {
        quantity = 0;
    }
    numQuantity.innerHTML = quantity;
    withdrawPrice();
    btnsAdd.style.background = "#eee";
})
plusBtn.addEventListener("click", function () {
    quantity++;
    numQuantity.innerHTML = quantity;
    depositPrice();
    btnsAdd.style.background = "#eee";
})
let addToCartBtn = document.querySelector(".addToCart");
let cartItems = document.querySelector(".cartBox ul");
let cartCount = document.querySelector(".cartBox .msg .num");
let btnsAdd = document.querySelector(".btns .count");
let numItems = 0;
addToCartBtn.addEventListener("click", function () {
    if (quantity != 0) {
        let cartItem = `<li style="transition: all .3s ease-in-out;">
    <img src="./images/image-product-1-thumbnail.jpg" alt="">
    <p class="info">Fall Limited Edition Sneakers $125.00 * <span class="num">${quantity}</span> <span class="total">${(quantity * 125.00).toFixed(2)}</span></p>
    <img onclick="deleteItem(this)" class="delete" src="./images/icon-delete.svg" alt="">
</li>`;
        numItems++;
        countItemsInCart.style.display = "flex";
        countItemsInCart.innerHTML = numItems;
        cartItems.innerHTML += cartItem;
        cartCount.innerHTML = numItems;
    }
    else {
        btnsAdd.style.background = "pink";
    }
})
function deleteItem(el) {
    el.parentElement.style.opacity = 0;
    setTimeout(() => {
        el.parentElement.remove();
        numItems--;
        if (numItems === 0) {
            cartCount.innerHTML = numItems;
            countItemsInCart.style.display = "none";
        } else {
            countItemsInCart.style.display = "flex";
            countItemsInCart.innerHTML = numItems;
            cartCount.innerHTML = numItems;
        }
    }, 500);

}
let cartBox = document.querySelector(".nav .profile .cartBox");
let cartIcon = document.querySelector(".profile .cart");
cartIcon.addEventListener("click", function () {
    cartBox.classList.toggle("closed");
})