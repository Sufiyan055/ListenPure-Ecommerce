let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");
let basket = JSON.parse(localStorage.getItem("data")) || [];

/* Add cart icon on the navbar */
let calculate = () => {
  let cartPlus = document.getElementById("cartPlus");
  cartPlus.innerText = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculate();

/*  */

let generateCartProducts = () => {
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = productData.find((y) => y.id === id) || [];
        let { img, itemname, price } = search;
        return `
        <div class="cart-item">
        <img width="150px" src=${img} alt="" />
        <div class="details">
            <div class="title-price-x">
                <h4 class="title-price">
                    <p>${itemname}</p>
                    <p>$ ${price}</p>
                </h4>
                <i onclick="removeItem(${id})" class='bx bx-x-circle'></i>
            </div>
            <div class="btnplusminus buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">${item}</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>

            <h3>${item * search.price}</h3>
        </div>
        </div>
        `;
      })
      .join(""));
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
        <p class="emptyLine">Cart is Empty</p>
        <a class="backprobtn" href="product.html">
        <button>Back to Product</button>
        </a>
        `;
  }
};

generateCartProducts();

/*
!increment of the number or product. 
?selectedItem = id -> 
*/

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else if (search.item === 50) {
    alert("Out of stock");
  } else {
    search.item += 1;
  }

  generateCartProducts();
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

/* 
!Decrement of the number or product.
*/
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 1) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  generateCartProducts();
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculate();
  TotalAmount();
};

let removeItem = (id) => {
  let selectedItem = id;
  basket = basket.filter((x) => x.id !== selectedItem.id);
  generateCartProducts();
  calculate();
  TotalAmount();
  localStorage.setItem("data", JSON.stringify(basket));
};

clearCart = () => {
  basket = [];
  generateCartProducts();
  localStorage.setItem("data", JSON.stringify(basket));
  calculate();
};

/* Total amount of the items which are in the cart page */

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x;
        let search = productData.find((y) => y.id === id) || [];

        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    label.innerHTML = `
    <h2> Total Bill: $ ${amount}</h2>
    <button class="checkout">Checkout</button>
    <button onclick="clearCart()" class="removeAll">Clear cart</button>
    `;
  } else return;
};

TotalAmount();
