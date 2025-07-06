const buttons = document.querySelectorAll("button.add")
buttons.forEach((button) => {
  button.addEventListener("click", addCart);
})

function addCart(event) {
    const buttonCurrent = event.currentTarget

    if (buttonCurrent.id === "addwafle")
    {
        const selection = document.querySelector("div#selectionwafle")
        selection.style.display = "flex"

        const incrementB = selection.querySelector("button.increment")
        incrementB.addEventListener("click", function() {
            let quantity = selection.querySelector("p.quantity")

            quantity.innerHTML = Number(quantity.innerHTML) + 1
        })

        const decrementB = selection.querySelector("button.decrement")
        decrementB.addEventListener("click", function() {
            let quantity = selection.querySelector("p.quantity")

            if (Number(quantity.innerHTML) > 0)
            {
                quantity.innerHTML = Number(quantity.innerHTML) - 1
            }

            
        })
    }

    if (buttonCurrent.id === "addbrulee")
    {
        const selection = document.querySelector("div#selectionbrulee")
        selection.style.display = "flex"

        const incrementB = selection.querySelector("button.increment")
        incrementB.addEventListener("click", function() {
            let quantity = selection.querySelector("p.quantity")

            quantity.innerHTML = Number(quantity.innerHTML) + 1
        })

        const decrementB = selection.querySelector("button.decrement")
        decrementB.addEventListener("click", function() {
            let quantity = selection.querySelector("p.quantity")

            if (Number(quantity.innerHTML) > 0)
            {
                quantity.innerHTML = Number(quantity.innerHTML) - 1
            }

            
        })
    }

    if (buttonCurrent.id === "addmacaron")
    {
        const selection = document.querySelector("div#selectionmacaron")
        selection.style.display = "flex"

        const incrementB = selection.querySelector("button.increment")
        incrementB.addEventListener("click", function() {
            let quantity = selection.querySelector("p.quantity")

            quantity.innerHTML = Number(quantity.innerHTML) + 1
        })

        const decrementB = selection.querySelector("button.decrement")
        decrementB.addEventListener("click", function() {
            let quantity = selection.querySelector("p.quantity")

            if (Number(quantity.innerHTML) > 0)
            {
                quantity.innerHTML = Number(quantity.innerHTML) - 1
            }

            
        })
    }

    if (buttonCurrent.id === "addtiramisu")
    {
        const selection = document.querySelector("div#selectiontiramisu")
        selection.style.display = "flex"

        const incrementB = selection.querySelector("button.increment")
        incrementB.addEventListener("click", function() {
            let quantity = selection.querySelector("p.quantity")

            quantity.innerHTML = Number(quantity.innerHTML) + 1
        })

        const decrementB = selection.querySelector("button.decrement")
        decrementB.addEventListener("click", function() {
            let quantity = selection.querySelector("p.quantity")

            if (Number(quantity.innerHTML) > 0)
            {
                quantity.innerHTML = Number(quantity.innerHTML) - 1
            }

            
        })
    }

    if (buttonCurrent.id === "addbaklava")
    {
        const selection = document.querySelector("div#selectionbaklava")
        selection.style.display = "flex"

        const incrementB = selection.querySelector("button.increment")
        incrementB.addEventListener("click", function() {
            let quantity = selection.querySelector("p.quantity")

            quantity.innerHTML = Number(quantity.innerHTML) + 1
        })

        const decrementB = selection.querySelector("button.decrement")
        decrementB.addEventListener("click", function() {
            let quantity = selection.querySelector("p.quantity")

            if (Number(quantity.innerHTML) > 0)
            {
                quantity.innerHTML = Number(quantity.innerHTML) - 1
            }

            
        })
    }

    if (buttonCurrent.id === "addpie")
    {
        const selection = document.querySelector("div#selectionpie")
        selection.style.display = "flex"

        const incrementB = selection.querySelector("button.increment")
        incrementB.addEventListener("click", function() {
            let quantity = selection.querySelector("p.quantity")

            quantity.innerHTML = Number(quantity.innerHTML) + 1
        })

        const decrementB = selection.querySelector("button.decrement")
        decrementB.addEventListener("click", function() {
            let quantity = selection.querySelector("p.quantity")

            if (Number(quantity.innerHTML) > 0)
            {
                quantity.innerHTML = Number(quantity.innerHTML) - 1
            }

            
        })
    }

    if (buttonCurrent.id === "addcake")
    {
        const selection = document.querySelector("div#selectioncake")
        selection.style.display = "flex"

        const incrementB = selection.querySelector("button.increment")
        incrementB.addEventListener("click", function() {
            let quantity = selection.querySelector("p.quantity")

            quantity.innerHTML = Number(quantity.innerHTML) + 1
        })

        const decrementB = selection.querySelector("button.decrement")
        decrementB.addEventListener("click", function() {
            let quantity = selection.querySelector("p.quantity")

            if (Number(quantity.innerHTML) > 0)
            {
                quantity.innerHTML = Number(quantity.innerHTML) - 1
            }

            
        })
    }

    if (buttonCurrent.id === "addbrownie")
    {
        const selection = document.querySelector("div#selectionbrownie")
        selection.style.display = "flex"

        const incrementB = selection.querySelector("button.increment")
        incrementB.addEventListener("click", function() {
            let quantity = selection.querySelector("p.quantity")

            quantity.innerHTML = Number(quantity.innerHTML) + 1
        })

        const decrementB = selection.querySelector("button.decrement")
        decrementB.addEventListener("click", function() {
            let quantity = selection.querySelector("p.quantity")

            if (Number(quantity.innerHTML) > 0)
            {
                quantity.innerHTML = Number(quantity.innerHTML) - 1
            }

            
        })
    }

    if (buttonCurrent.id === "addpanna")
    {
        const selection = document.querySelector("div#selectionpanna")
        selection.style.display = "flex"

        const incrementB = selection.querySelector("button.increment")
        incrementB.addEventListener("click", function() {
            let quantity = selection.querySelector("p.quantity")

            quantity.innerHTML = Number(quantity.innerHTML) + 1
        })

        const decrementB = selection.querySelector("button.decrement")
        decrementB.addEventListener("click", function() {
            let quantity = selection.querySelector("p.quantity")

            if (Number(quantity.innerHTML) > 0)
            {
                quantity.innerHTML = Number(quantity.innerHTML) - 1
            }

            
        })
    }


}