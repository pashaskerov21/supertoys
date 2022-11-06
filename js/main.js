
//MENU BUTTON
let mobileMenuButton = document.querySelector(".mobile-menu-button");
mobileMenuButton.addEventListener("click", () => {
    mobileMenuButton.classList.toggle("open")
});

// STAR BUTTONS
let productStars = document.querySelectorAll(".product-stars");
for(let i = 0; i < productStars.length; i++){
    (function(index){
        let whiteStars = productStars[index].querySelectorAll(".star-w");
        let yellowStars = productStars[index].querySelectorAll(".star-y");
        whiteStars[0].addEventListener("click",function(){
            whiteStars[0].classList.add("d-none");
            yellowStars[0].classList.remove("d-none");
        });
        yellowStars[0].addEventListener("click",function(){
            if(yellowStars[1].classList.contains("d-none")==false){
                yellowStars[1].classList.add("d-none");
                yellowStars[2].classList.add("d-none");
                yellowStars[3].classList.add("d-none");
                yellowStars[4].classList.add("d-none");
                whiteStars[1].classList.remove("d-none");
                whiteStars[2].classList.remove("d-none");
                whiteStars[3].classList.remove("d-none");
                whiteStars[4].classList.remove("d-none");
            }else{
                yellowStars[0].classList.add("d-none");
                whiteStars[0].classList.remove("d-none");
            }
        });
        whiteStars[1].addEventListener("click",function(){
            whiteStars[0].classList.add("d-none");
            whiteStars[1].classList.add("d-none");
            yellowStars[0].classList.remove("d-none");
            yellowStars[1].classList.remove("d-none");
        });
        yellowStars[1].addEventListener("click",function(){
            if(yellowStars[2].classList.contains("d-none")==false){
                yellowStars[2].classList.add("d-none");
                yellowStars[3].classList.add("d-none");
                yellowStars[4].classList.add("d-none");
                whiteStars[2].classList.remove("d-none");
                whiteStars[3].classList.remove("d-none");
                whiteStars[4].classList.remove("d-none");
            }else{
                yellowStars[0].classList.add("d-none");
                yellowStars[1].classList.add("d-none");
                whiteStars[0].classList.remove("d-none");
                whiteStars[1].classList.remove("d-none");
            }
        });
        whiteStars[2].addEventListener("click",function(){
            whiteStars[0].classList.add("d-none");
            whiteStars[1].classList.add("d-none");
            whiteStars[2].classList.add("d-none");
            yellowStars[0].classList.remove("d-none");
            yellowStars[1].classList.remove("d-none");
            yellowStars[2].classList.remove("d-none");
        });
        yellowStars[2].addEventListener("click",function(){
            if(yellowStars[3].classList.contains("d-none")==false){
                yellowStars[3].classList.add("d-none");
                yellowStars[4].classList.add("d-none");
                whiteStars[3].classList.remove("d-none");
                whiteStars[4].classList.remove("d-none");
            }else{
                yellowStars[0].classList.add("d-none");
                yellowStars[1].classList.add("d-none");
                yellowStars[2].classList.add("d-none");
                whiteStars[0].classList.remove("d-none");
                whiteStars[1].classList.remove("d-none");
                whiteStars[2].classList.remove("d-none");
            }
        });
        whiteStars[3].addEventListener("click",function(){
            whiteStars[0].classList.add("d-none");
            whiteStars[1].classList.add("d-none");
            whiteStars[2].classList.add("d-none");
            whiteStars[3].classList.add("d-none");
            yellowStars[0].classList.remove("d-none");
            yellowStars[1].classList.remove("d-none");
            yellowStars[2].classList.remove("d-none");
            yellowStars[3].classList.remove("d-none");
        });
        yellowStars[3].addEventListener("click",function(){
            if(yellowStars[4].classList.contains("d-none")==false){
                yellowStars[4].classList.add("d-none");
                whiteStars[4].classList.remove("d-none");
            }else{
                yellowStars[0].classList.add("d-none");
                yellowStars[1].classList.add("d-none");
                yellowStars[2].classList.add("d-none");
                yellowStars[3].classList.add("d-none");
                whiteStars[0].classList.remove("d-none");
                whiteStars[1].classList.remove("d-none");
                whiteStars[2].classList.remove("d-none");
                whiteStars[3].classList.remove("d-none");
            }
        });
        whiteStars[4].addEventListener("click",function(){
            whiteStars[0].classList.add("d-none");
            whiteStars[1].classList.add("d-none");
            whiteStars[2].classList.add("d-none");
            whiteStars[3].classList.add("d-none");
            whiteStars[4].classList.add("d-none");
            yellowStars[0].classList.remove("d-none");
            yellowStars[1].classList.remove("d-none");
            yellowStars[2].classList.remove("d-none");
            yellowStars[3].classList.remove("d-none");
            yellowStars[4].classList.remove("d-none");
        });
        yellowStars[4].addEventListener("click",function(){
            yellowStars[0].classList.add("d-none");
            yellowStars[1].classList.add("d-none");
            yellowStars[2].classList.add("d-none");
            yellowStars[3].classList.add("d-none");
            yellowStars[4].classList.add("d-none");
            whiteStars[0].classList.remove("d-none");
            whiteStars[1].classList.remove("d-none");
            whiteStars[2].classList.remove("d-none");
            whiteStars[3].classList.remove("d-none");
            whiteStars[4].classList.remove("d-none");
        });   
    })(i);
};

// SEBET BUTTON
let sebetButton = document.querySelectorAll(".sebet-button");
let sebetButtonIcon = document.querySelectorAll(".sebet-button img");
let sebetButtonSpan = document.querySelectorAll(".sebet-button span");

for(let i = 0; i < sebetButton.length; i++){
    (function(index){
        sebetButton[i].addEventListener("click",function(){
            sebetButton[index].classList.toggle("active");
        })
    })(i);
};



// LIKE BUTTON
let likeButton = document.querySelectorAll(".like-button");

for(let i = 0; i < likeButton.length;i++){
    (function(index){
        likeButton[i].addEventListener("click",function(){
            if(likeButton[index].children[0].classList.contains("d-none")==false){
                likeButton[index].children[0].classList.add("d-none");
                likeButton[index].children[1].classList.remove("d-none");
            }else{
                likeButton[index].children[0].classList.remove("d-none");
                likeButton[index].children[1].classList.add("d-none");
            }
        })
    })(i);
}

