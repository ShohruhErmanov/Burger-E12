food = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        amount: 0,
        kcall: 500,
        get calcSum() {
            return this.price * this.amount
        },
        get calcKcall() {
            return this.kcall * this.amount
        }
    },

    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20500,
        amount: 0,
        kcall: 650,
        get calcSum() {
            return this.price * this.amount
        },
        get calcKcall() {
            return this.kcall * this.amount
        }
    },

    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        amount: 0,
        kcall: 700,
        get calcSum() {
            return this.price * this.amount
        },
        get calcKcall() {
            return this.kcall * this.amount
        }
    }
}

const btn = [...document.querySelectorAll(".main__product-btn")]

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        prapare(btn[i])

    })
}

function prapare(item) {
    const parent = item.closest(".main__product")
    const parentId = parent.getAttribute("id")
    const num = parent.querySelector(".main__product-num")
    const price = parent.querySelector(".main__product-price")
    const kcall = parent.querySelector(".main__product-kcall")
    const sym = item.getAttribute("data-symbol")
    let count = food[parentId].amount

    if (sym == "+") {
        count++
    } else if (sym == "-" && count > 0) {
        count--
    }

    food[parentId].amount = count
    num.textContent = count
    price.textContent = `${food[parentId].calcSum} sum`
    kcall.textContent = `${food[parentId].calcKcall} calories`
}


const mainProductInfo = [...document.querySelectorAll(".main__product-info")]
const mainProductImg = [...document.querySelectorAll(".main__product-img")]
const imgburger = document.querySelector(".imgburger")
const view = document.querySelector(".view")
const viewClose = document.querySelector(".view__close")

for (let i = 0; i < mainProductInfo.length; i++) {
    mainProductInfo[i].addEventListener("click", () => {
        view.classList.add("active")
        let src = mainProductImg[i].getAttribute("src")
        imgburger.removeAttribute("src")
        imgburger.setAttribute("src", src)



    })

}

viewClose.addEventListener("click", () => {
    view.classList.remove("active")
})

const receipt = document.querySelector(".receipt")
const receiptWindow = document.querySelector(".receipt__window")
const receiptWindowOut = document.querySelector(".receipt__window-out")
const receiptWindowBtn = document.querySelector(".receipt__window-btn")
const addCart = document.querySelector(".addCart")

addCart.addEventListener("click", () => {
    receipt.style.display = "block"
    setTimeout(() => {
        receipt.style.opacity = 1
        receipt.style.transtion = `${.5}s`
    }, 100);


    let menu = "You Cart <br><br>"

    let totalPraice = 0
    let totalKcall = 0

    for (const key in food) {
        if (food[key].amount) {
            menu += `${food[key].name} ${food[key].amount}X ${food[key].calcSum} sum ${food[key].calcKcall} calories <br>`

            totalPraice += food[key].calcSum
            totalKcall += food[key].calcKcall


        }

        receiptWindowOut.innerHTML = `${menu} <br><br> TotalPraice: ${totalPraice} sum <br> TotalKcall: ${totalKcall} calories `

    }


})

receipt.addEventListener("click", (evt) => {
    if (evt.target == evt.currentTarget) {
        receipt.style.display = "none"
        setTimeout(() => {
            receipt.style.opacity = 0
            receipt.style.transtion = `${.5}s`
        }, 100);
    }

})

receiptWindowBtn.addEventListener("click", () => {
    location = "https://paynet.uz/"
})