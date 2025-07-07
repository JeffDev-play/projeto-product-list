const buttons = document.querySelectorAll("button.add")
buttons.forEach((button) => {
  button.addEventListener("click", addCart);
})

function addCart(event) {
    const buttonCurrent = event.currentTarget
    const product = buttonCurrent.parentElement
        
        const empty = document.querySelectorAll(".viewempty")
        empty.forEach((em) => {
            em.style.display = "none"
        })
        const selection = product.querySelector("div.selection")
        selection.style.display = "flex"

        const cart = document.querySelector("section#cart")
        const title = cart.children[0]
        const selectedProd = document.createElement("div")
        const sectionDescri = document.createElement("section")
        const descri = document.createElement("p")
        const multi = document.createElement("p")
        const priceCurrent = document.createElement("p")
        const priceTotal = document.createElement("p")
        const containerB = document.createElement("div")
        const buttonRemove = document.createElement("button")
        const imageButton = document.createElement("img")
        const line = document.createElement("hr")

        const quantityCartTotal = title.querySelector("p")
        quantityCartTotal.textContent = Number(quantityCartTotal.textContent) + 1
        
        descri.textContent = product.querySelector("p.namecomplete").textContent
        multi.textContent = "1x"
        priceCurrent.textContent = "@" + product.querySelector("p.price").textContent
        priceTotal.textContent = product.querySelector("p.price").textContent

        selectedProd.id = "selected" + product.id
        selectedProd.classList.add("selectedprod")
        descri.classList.add("descri")
        multi.classList.add("multi")
        priceCurrent.classList.add("pricecurrent")
        priceTotal.classList.add("pricetotal")
        buttonRemove.classList.add("removeitem")
        imageButton.setAttribute("src", "assets/images/icon-remove-item.svg")
        imageButton.setAttribute("alt", "Remove Item")

        sectionDescri.appendChild(descri)
        sectionDescri.appendChild(multi)
        sectionDescri.appendChild(priceCurrent)
        sectionDescri.appendChild(priceTotal)
        selectedProd.appendChild(sectionDescri)

        buttonRemove.appendChild(imageButton)
        containerB.appendChild(buttonRemove)
        selectedProd.appendChild(containerB)

        title.after(selectedProd)
        selectedProd.after(line)

        const buyMenuExists = cart.querySelector(".buymenu")

        if (!buyMenuExists) {
            const carbon = document.createElement("div")
            const confirm = document.createElement("button")
            const orderTotal = document.createElement("div")

            orderTotal.classList.add("ordertotal", "buymenu")
            carbon.classList.add("carbon", "buymenu")
            confirm.classList.add("confirm", "buymenu")

            const orderTotalText = document.createElement("p")
            const orderTotalValue = document.createElement("p")
            orderTotalText.textContent = "Order Total"
            orderTotalValue.textContent = "0.00"
            orderTotalValue.classList.add("total")
            orderTotal.appendChild(orderTotalText)
            orderTotal.appendChild(orderTotalValue)

            const carbonImage = document.createElement("img")
            const carbonText = document.createElement("p")
            const strong = document.createElement("strong")
            carbonImage.setAttribute("src", "assets/images/icon-carbon-neutral.svg")
            carbonImage.setAttribute("alt", "Carbon Neutral")
            carbonText.textContent = "This is a "
            strong.textContent = "carbon-neutral"
            const nodeText = document.createTextNode(" delivery")
            carbonText.appendChild(strong)
            carbonText.appendChild(nodeText)
            carbon.appendChild(carbonImage)
            carbon.appendChild(carbonText)

            const buttonName = document.createElement("p")
            buttonName.textContent = "Confirm Order"
            confirm.appendChild(buttonName)


            cart.appendChild(orderTotal)
            cart.appendChild(carbon)
            cart.appendChild(confirm)
        }
             
         const orderTotalElement = document.querySelector("p.total")
         let orderTotalCart = parseFloat(orderTotalElement.textContent.replace(/[^\d,.-]/g, ''))
         orderTotalElement.textContent = "$" + (orderTotalCart + Number(priceCurrent.textContent.replace(/[^\d,.-]/g, ''))).toFixed(2)

        const incrementB = selection.querySelector("button.increment")
        incrementB.addEventListener("click", function() {
            let quantity = selection.querySelector("p.quantity")

            quantity.innerHTML = Number(quantity.innerHTML) + 1
            const currentQuantity = Number(multi.textContent.replace(/[^\d,.-]/g, '')) + 1
            multi.textContent = currentQuantity + "x"

            quantityCartTotal.textContent = Number(quantityCartTotal.textContent) + 1
            
            const priceTotalCurrent = (parseFloat(priceCurrent.textContent.replace(/[^\d,.-]/g, '')) * currentQuantity).toFixed(2)
            priceTotal.textContent = "$" + priceTotalCurrent

            orderTotalCart = parseFloat(orderTotalElement.textContent.replace(/[^\d,.-]/g, ''))
            orderTotalElement.textContent = "$" + (orderTotalCart + Number(priceCurrent.textContent.replace(/[^\d,.-]/g, ''))).toFixed(2)

        })

        const decrementB = selection.querySelector("button.decrement")
        decrementB.addEventListener("click", function() {
            let quantity = selection.querySelector("p.quantity")

            if (Number(quantity.innerHTML) > 1)
            {
                quantity.innerHTML = Number(quantity.innerHTML) - 1
                const currentQuantity = Number(multi.textContent.replace(/[^\d,.-]/g, '')) - 1
                multi.textContent = currentQuantity + "x"

                quantityCartTotal.textContent = Number(quantityCartTotal.textContent) - 1

                const priceTotalCurrent = (parseFloat(priceCurrent.textContent.replace(/[^\d,.-]/g, '')) * currentQuantity).toFixed(2)
                priceTotal.textContent = "$" + priceTotalCurrent
            }

            
        })
}