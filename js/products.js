// for loding button 
const loder = document.querySelector(".loder");
//for nav
const mobileNav = document.querySelector("#navbarsExample04")
const navheader = document.querySelector(".navbar-toggler")
// for products buy 
const producCards = document.getElementsByClassName("products_card_l");
const buyModal = document.querySelector(".modal-buy");
const productContainer = buyModal.querySelector(".product");
const productImgContainer = productContainer.querySelector("img");
const productDescriptionContainer = productContainer.querySelector(".productBuyDescription");

//Stop loding function
let time = 1000;
let setTime;
function stopLoading(newTime){
    setTimeout(()=>{
        time = setTime ?? 1000;
        loder.style="display:none;";
        setTime = null;
    } , time)
}
stopLoading(); /*  run one on page reload (stop loding)  */
//Start loading function
function startLoading(newTime){
    loder.style="display:flex"
    setTime = newTime;
    stopLoading(setTime);
}
// trigger function for button click event
const buttonPressed = (e) => {
  let productImg = e.target.src;
  let productDescription = e.target.ownerDocument.activeElement.childNodes[3].innerHTML;
  startLoading(200); /* start loding for 300ms */
  buyModal.classList.add("active-modal");
  if(productImg){
      productImgContainer.setAttribute("src" , `${[productImg]}`);
   }
   else{
    productImgContainer.setAttribute("src" , `${e.target.ownerDocument.activeElement.children[0].childNodes[5].src}`);
   }
  productDescriptionContainer.innerHTML = `<div class="flex-center-column">
  <div>
  ${productDescription}
  <lable>
  Quantity 
  <select>
    <option> 1 </option>
    <option> 2 </option>
    <option> 3 </option>
  </select>
  </lable> 
  <lable className="address">
  <input type="text" placeholder="Delever to.." name="address">
  </lable>
  </div>
  <button id="buy">Buy</button>
  </div>`
  console.log(productDescription)
};
//geting elements for butron pressed
for (let button of producCards) {
  button.addEventListener("click", buttonPressed);
}
// cancel modal button
function cancelModal(){
    buyModal.classList.remove("active-modal")
}

// bug fix for nav bar in movile view
let navCount = 2;
navheader.addEventListener("click" , ()=>{
    if(navCount%2 == 0){
        mobileNav.style="display:block;"
    }
    else{
        mobileNav.style="display:none;"
    }
    navCount++;
})
