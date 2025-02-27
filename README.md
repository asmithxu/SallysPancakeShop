# For-loops

## Assignment: Sally's Pancake shop
In this assignment, you will create a Point-Of-Sale interface for a pancake shop owner Sally. This interface will make it easier for Sally to manage and organize orders from customers. 

![Example](Example/Part2.gif)


### Instructions
DO NOT MODIFY THE CSS file at all for this assignment

### **Part 1: Create Orders**
<details>
    <summary>Preview</summary>
  <img src="./Example/Part1.gif" width=400>
</details>
<br/>

When a user clicks on the "Create Order" button for a menu item, a new order element should be added to the "Orders" div on [line 14 in the html file](./index.html). ( This has been done for the pancake button already ✅)
 - Configure an onclick event for the "Create Order" buttons that injects a new order element into the orders div

<br>

### **Part 2: Remove Orders**
<details>
    <summary>Preview</summary>
  <img src="./Example/Part2.gif" width=400/>
</details>
<br/>


A user should be able to remove an Order element by clicking on it
 - Add a button that says "Ready" to the order elements

    <br>

 - Add an onclick event to the "Ready" button that removes the button's parent element (the order element) from the page.
    
  <br>


 - This code snippet should help 

    ```javascript
    let readyButton = document.createElement("button")
    readyButton.innerText = "Ready"
    readyButton.addEventListener("click", function(event) {
        let parentElement = event.target.parentElement
        parentElement.remove()
    })
    orderElementDiv.appendChild(readyButton)

    ```



<br>


### **Part 3: Create 2 Orders at once**
<details>
    <summary>Preview</summary>
  <img src="./Example/Part3.gif" width=400>
</details>
<br/>


A user should be able to create two orders for a menu item at once.
  - Add a button to each menu item that says "Create 2 Orders"
  - Add an onclick event to these buttons that creates two orders instead of one.

<br>

### **Part 4: Create varying multiples of Orders at once**
<details>
    <summary>Preview</summary>
  <img src="./Example/Part4.gif" width=400>
</details>
<br/>

A user should be able to create any number of orders for a menu item at once.
- Add an [input element to accept a number](https://www.w3schools.com/tags/att_input_type_number.asp) of orders to create from the user
- Set the default value of the input element to be 3
- Add a button below the input element that says "Create Orders"
- Configure an onclick event for the button that reads the number from the input element and creates that many orders
    - Select the input element and save it to a variable called "pancakeInputHTML". ( Youll probably have to add an Id to the input element itself)
    - Access the value property on from the input element and save it to a variable called "pancakeOrders"
    - Configure a [for-loop to repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for#examples) some code for a number of iterations equal to the value of "pancakeOrders"
    - Place the code lines for creating a new order inside the for-loop


<br>


Take a look at the Example folder to see what the end result should look like.
