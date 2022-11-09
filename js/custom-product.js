//SIZE BUTTONS
let productSizeButtons = document.querySelectorAll(".cp-size .cp-size-button");
for(let i = 0; i < productSizeButtons.length; i++){
    (function(index){
        productSizeButtons[i].addEventListener("click",function(){
            for(let i = 0; i < productSizeButtons.length; i++){
                productSizeButtons[i].classList.remove("active");
            }
            productSizeButtons[index].classList.toggle("active");
        })
    })(i);
} 

//COLORS BUTTONS
let productColorButtons = document.querySelectorAll(".cp-colors .color-button");
for(let i = 0; i < productColorButtons.length; i++){
    (function(index){
        productColorButtons[i].addEventListener("click",function(){
            for(let i = 0; i < productColorButtons.length; i++){
                productColorButtons[i].classList.remove("active");
            }
            productColorButtons[index].classList.toggle("active");
        })
    })(i);
}
// PRODUCT NUMBER COUNTER
let decrementButton = document.querySelector(".cp-counter .decrement-button");
let productNumberSpan = document.querySelector(".cp-counter .cp-number");
let productNumberSpanValue = parseInt(productNumberSpan.innerHTML); 
let incrementButton = document.querySelector(".cp-counter .increment-button");

incrementButton.addEventListener("click",function(){
    productNumberSpanValue += 1;
    productNumberSpan.innerHTML = productNumberSpanValue;
});
decrementButton.addEventListener("click",function(){
    
    if(productNumberSpanValue == 1){
        productNumberSpanValue -= 0;
        productNumberSpan.innerHTML = "1";
    }else{
        productNumberSpanValue -= 1;
        productNumberSpan.innerHTML = productNumberSpanValue;
    }
    
});