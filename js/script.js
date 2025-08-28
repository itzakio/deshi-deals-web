function getelement (id){
    const elementNum = (document.getElementById(id));
    return elementNum;
}

document.getElementById("all-products")
.addEventListener("click", function(e){
    if (e.target.className.includes("card-btn") === true){
        let btnParent = e.target.parentNode;
        
        // card info
        const productImg = btnParent.childNodes[1].childNodes[1].src;
        const productTitle = btnParent.childNodes[5].innerText;
        const productPrice = btnParent.childNodes[7].childNodes[0].innerText;

        // get total info
        const totalPrice = getelement("total-price").innerText;
        

        // total calculate
        const currentTotal = Number(totalPrice) + Number(productPrice);

        // total update
        getelement("total-price").innerText = currentTotal.toFixed(2);
        getelement("total").innerText = currentTotal.toFixed(2);
        
        // get cart container
        const cartContainer = getelement("cart-container")
        
        // create element
        const div = document.createElement("div");

        div.innerHTML = `
        


            <div id="cart-item"
              class="flex justify-between items-center h-20 pl-3 bg-gray-300 rounded-xl"
            >
              <img class="w-16" src="${productImg}" alt="" />
              <div class="flex  items-center">
                <div>
                  <h3 class="text-xl font-semibold">${productTitle}</h3>
                <p class="text-gray-600"><span>${productPrice}</span> TK</p>
                </div>
                <div>
                  <div  class=" delete-item flex justify-center items-center ml-2 h-20 rounded-r-xl bg-red-500 text-white font-extrabold px-2"> X </div>
                </div>
              </div>
            </div>
        `
        cartContainer.appendChild(div);

    }
})

// cart all clear

document.getElementById("clear-all")
.addEventListener("click", function(){
    getelement("total-price").innerText = '0';
    getelement("discount").innerText = '0';
    getelement("total").innerText = '0';
    getelement("cart-container").innerText = '';
})


// cart item delete

document.getElementById("cart-container")
.addEventListener("click", function(e){
    const itemfordelete = e.target;
    const deleteItem = e.target.className.includes("delete-item")
    if(deleteItem === true){
     const item = itemfordelete.parentNode.parentNode.parentNode.style.display = "none"
     const itemPrice = itemfordelete.parentNode.parentNode.childNodes[1].childNodes[3].childNodes[0].innerText

    //  update total price
     const totalPrice = getelement("total-price").innerText;
     const newTotalPrice = Number(totalPrice) - Number(itemPrice)
     getelement("total-price").innerText = newTotalPrice.toFixed(2);
     getelement("total").innerText = getelement("total-price").innerText.toFixed(2)
     console.log(totalPrice)
     

    }
})


