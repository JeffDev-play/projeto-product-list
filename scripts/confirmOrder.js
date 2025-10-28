const confirmOrderB = document.querySelector("button.confirm")
if (confirmOrderB) {
    confirmOrderB.addEventListener("click", confirmOrder)
}

function confirmOrder(event) {
    const products = document.querySelectorAll("div.selectedprod")
    const back = document.querySelector("div#background")
    back.style.display = "flex"

    if (products) {
        products.forEach((product, index) => {
            const listConfirmed = document.getElementById('listConfirmed')
            const newOrderButton = document.querySelector("div#OrderConfirmed").getElementsByTagName('button')[0]
            const orderTotal = document.querySelector("div#OrderConfirmed").querySelector("p#orderTotalValue")
            const nameProd = products[index].id.replace('selected', '')
            const hr = document.createElement("hr")
            const container = document.createElement("section")
            const imgProd = document.createElement("img")
            const descriProd = document.createElement("div")
            const name = document.createElement("p")
            const mult = document.createElement("p")
            const fixedPrice = document.createElement("p")
            const totalPrice = document.createElement("p")

            container.id = nameProd
            container.classList.add('prodConfirmed')
            imgProd.src = document.getElementById(nameProd).getElementsByTagName('img')[0].src
            imgProd.alt = "Product Confirmed"
            descriProd.id = 'descriProd'
            name.id = 'name'
            name.textContent = products[index].getElementsByClassName('descri')[0].textContent
            mult.id = 'mult'
            mult.textContent = products[index].getElementsByClassName('multi')[0].textContent
            fixedPrice.id = 'fixedPrice'
            fixedPrice.textContent = products[index].getElementsByClassName('pricecurrent')[0].textContent
            totalPrice.id = 'priceTotal' 
            totalPrice.textContent = products[index].getElementsByClassName('pricetotal')[0].textContent
            orderTotal.textContent = document.getElementsByClassName("ordertotal")[0].getElementsByClassName("total")[0].textContent

            listConfirmed.appendChild(container)
            if (index > 0)
            {
                listConfirmed.insertBefore(hr, container)
            }
            container.appendChild(imgProd)
            container.appendChild(descriProd)
            descriProd.appendChild(name)
            descriProd.appendChild(mult)
            descriProd.appendChild(fixedPrice)
            container.appendChild(totalPrice)

            newOrderButton.addEventListener("click", function() {
                location.reload()
            })
        });
    }
}

