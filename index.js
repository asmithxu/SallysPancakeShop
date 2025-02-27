
let pancakeOrderButtonHTML = document.getElementById("pancakeOrderButton")
pancakeOrderButtonHTML.addEventListener("click", function() {

    //These lines (7 - 11) create a new order element using the document variable (lines 17 - 19 is an order element)
    let orderElementDiv = document.createElement("div")
    orderElementDiv.className = "order"
    let orderElementImage = document.createElement("img")
    orderElementImage.src = "./assets/pancakes.png"
    orderElementDiv.appendChild(orderElementImage)

    //👇PART 2 CODE SNIPPET HERE👇
    let readyButton = document.createElement("button")
    readyButton.innerText = "Ready"
    readyButton.addEventListener("click", function(event) {
        let parentElement = event.target.parentElement
        parentElement.remove()
    })
    orderElementDiv.appendChild(readyButton)

    let ordersHTML = document.getElementById("orders") // This line select the orders div and save it to a variable

    ordersHTML.appendChild(orderElementDiv)  // This line inject the new order element into the orders div using innerHTML

})

let doublePancakeOrderHTML = document.getElementById("doublePancakeOrder")
    doublePancakeOrderHTML.addEventListener("click", function(){
        for (i = 2; i > 0; i = i - 1) {
        let orderElementDiv = document.createElement("div")
        orderElementDiv.className = "order"
        let orderElementImage = document.createElement("img")
        orderElementImage.src = "./assets/pancakes.png"
        let readyButton = document.createElement("button")
        orderElementDiv.appendChild(orderElementImage)
        readyButton.innerText = "Ready"
        readyButton.addEventListener("click", function(event){
            let parentElement = event.target.parentElement
            parentElement.remove()
        })
        orderElementDiv.appendChild(readyButton)
        let ordersHTML = document.getElementById("orders")
        ordersHTML.appendChild(orderElementDiv)}
    })



let coffeeOrderButtonHTML = document.getElementById("coffeeOrderButton")
coffeeOrderButtonHTML.addEventListener("click", function() {
    //*** YOUR JAVASCRIPT CODE HERE ***
        let orderElementDiv2 = document.createElement("div")
        orderElementDiv2.className = "order"
        let orderElementImage = document.createElement("img")
        orderElementImage.src = "./assets/coffee.png"
        orderElementDiv2.appendChild(orderElementImage)

        let readyButton = document.createElement("button")
        readyButton.innerText = "Ready"
        readyButton.addEventListener("click", function(event){
            let parentElement = event.target.parentElement
            parentElement.remove()
        })
        orderElementDiv2.appendChild(readyButton)
    
        let ordersHTML = document.getElementById("orders")
        ordersHTML.appendChild(orderElementDiv2)

})

let doubleCoffeeOrderHTML = document.getElementById("doubleCoffeeOrder")
    doubleCoffeeOrderHTML.addEventListener("click", function(){
        for (i = 2; i > 0; i = i - 1) {
        let orderElementDiv = document.createElement("div")
        orderElementDiv.className = "order"
        let orderElementImage = document.createElement("img")
        orderElementImage.src = "./assets/coffee.png"
        let readyButton = document.createElement("button")
        orderElementDiv.appendChild(orderElementImage)
        readyButton.innerText = "Ready"
        readyButton.addEventListener("click", function(event){
            let parentElement = event.target.parentElement
            parentElement.remove()
        })
        orderElementDiv.appendChild(readyButton)
        let ordersHTML = document.getElementById("orders")
        ordersHTML.appendChild(orderElementDiv)}
    })

   
    pancakeBButton = document.getElementById("pancakeB")
    pancakeBButton.addEventListener("click", function(event){
        event.preventDefault()
        pancakeinputHTML = document.getElementById("pancakeInput")
        pancakeOrders = pancakeinputHTML.value
        for (let i = pancakeOrders; i > 0; i = i - 1) {
        let orderElementDiv = document.createElement("div")
        orderElementDiv.className = "order"
        let orderElementImage = document.createElement("img")
        orderElementImage.src = "./assets/pancakes.png"
        let readyButton = document.createElement("button")
        orderElementDiv.appendChild(orderElementImage)
        readyButton.innerText = "Ready"
        readyButton.addEventListener("click", function(event){
            let parentElement = event.target.parentElement
            parentElement.remove()
        })
        orderElementDiv.appendChild(readyButton)
        let ordersHTML = document.getElementById("orders")
        ordersHTML.appendChild(orderElementDiv)}
    })

    coffeeBButton = document.getElementById("coffeeB")
    coffeeBButton.addEventListener("click", function(event){
        event.preventDefault()
        coffeeinputHTML = document.getElementById("coffeeInput")
        coffeeOrders = coffeeinputHTML.value
        for (let i = coffeeOrders; i > 0; i = i - 1) {
        let orderElementDiv = document.createElement("div")
        orderElementDiv.className = "order"
        let orderElementImage = document.createElement("img")
        orderElementImage.src = "./assets/coffee.png"
        let readyButton = document.createElement("button")
        orderElementDiv.appendChild(orderElementImage)
        readyButton.innerText = "Ready"
        readyButton.addEventListener("click", function(event){
            let parentElement = event.target.parentElement
            parentElement.remove()
        })
        orderElementDiv.appendChild(readyButton)
        let ordersHTML = document.getElementById("orders")
        ordersHTML.appendChild(orderElementDiv)}
    })
    