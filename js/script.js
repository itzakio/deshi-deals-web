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

        // totalupdate
        getelement("total-price").innerText = currentTotal.toFixed(2);
        getelement("total").innerText = currentTotal.toFixed(2);
        
        // get cart container
        const cartContainer = getelement("cart-container")
        
        // create element
        const div = document.createElement("div");

        div.innerHTML = `
         <div
              class="flex justify-between items-center h-20 px-3 bg-gray-300 rounded-xl"
            >
              <img class="w-16" src="${productImg}" alt="" />
              <div>
                <h3 class="text-xl font-semibold">${productTitle}</h3>
                <p class="text-gray-600"><span>${productPrice}</span> TK</p>
              </div>
            </div>
        `
        cartContainer.appendChild(div);

    }
})

document.getElementById("clear-all")
.addEventListener("click", function(){
    getelement("total-price").innerText = '0';
    getelement("discount").innerText = '0';
    getelement("total").innerText = '0';
    getelement("cart-container").innerText = '';
})


// const allBtn = document.getElementsByClassName("card-btn");

// for(const btn of allBtn){
//     btn.addEventListener("click", function(){
//         const productImg = btn.parentNode.childNodes[1].childNodes[1].src;
//         console.log(productImg);
//     })
// }
