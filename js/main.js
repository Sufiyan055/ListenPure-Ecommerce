let Mixproduct = document.getElementById("Mixproduct");
let mainNav = document.getElementById("mainNav");
let menuToggleid = document.getElementById("menuToggleid");
let specialOffers = document.querySelector(".specialOffers");
let closeOffer = document.querySelector(".closeOffer");
let barndclick = document.querySelector(".barndclick");

/* The value store in basket when click on add cat */
let basket = JSON.parse(localStorage.getItem("data")) || [];

/* open and close navbar */
function menuToggle() {
  menuToggleid.classList.toggle("active");
  mainNav.classList.toggle("activeNav");
}

/* Offer */
specialOffers.style.display = "none";

setTimeout(() => {
  specialOffers.style.display = "block";
  specialOffers.style.transition = "0.5s ease-in-out";
}, 5000);

closeOffer.onclick = () => {
  specialOffers.style.display = "none";
};

barndclick.onclick = () => {
  specialOffers.style.display = "none";
};

specialOffers.onclick = () => {
  specialOffers.style.display = "none";
};

/* genearting products from taking data from productData array*/
let generateProduct = () => {
  return (Mixproduct.innerHTML = productData
    .map((x) => {
      let { id, price, itemname, img, descInfo } = x;
      return `
        <div class="product-box earphoneitem item" id="product-box-${id}">
        <div class="mainimg">
        <img src="${img}" alt="Product image" class="product-img" />
        </div>
        <div class="sub-productbox">
        <h2 class="product-title">${itemname}</h2>
        <p class="subp">${descInfo}</p>
        <div class="star">
          <i class="bx bxs-star"></i>
          <i class="bx bxs-star"></i>
          <i class="bx bxs-star"></i>
          <i class="bx bxs-star"></i>
          <i class="bx bxs-star-half"></i>
        </div>
        <span class="price">$ ${price}</span> <br />
        <span id="${id}" class="quantity"></span>
        </div>
        <i onclick="addCart(${id})" class="bx bx-shopping-bag add-cart"></i>
        </div>

        `;
    })
    .join(""));
};

generateProduct();

/* Add to cart */
let addCart = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    alert("you already add this item in the cart checkout the cart page");
    return;
  }

  localStorage.setItem("data", JSON.stringify(basket));
  calculate();
};

/* Add cart icon on the navbar */
let calculate = () => {
  let cartPlus = document.getElementById("cartPlus");
  cartPlus.innerText = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculate();
/*  */

/* Search Engine */
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  //console.log('Input event fired!', inputVal);
  let itembox = document.getElementsByClassName("product-box");
  Array.from(itembox).forEach(function (element) {
    let itemTxt = element.getElementsByTagName("h2")[0].innerText.toLowerCase();
    if (itemTxt.includes(inputVal)) {
      element.style.display = "inline-block";
    } else {
      element.style.display = "none";
    }
  });
});

/* Onclick to searchbar and slideshow visible and invisible*/
let searchForm = document.getElementById("searchForm");

searchForm.style.width = "0%";
function searchOpen() {
  if (searchForm.style.width == "0%") {
    searchForm.style.width = "45%";
    searchForm.style.border = "1px solid #000";
  } else {
    searchForm.style.width = "0%";
    searchForm.style.border = "none";
  }
}
