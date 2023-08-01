let productPreview = document.getElementById("Previewproduct");
let previewBox = document.querySelectorAll(".previewitem");
/* preview product */

/* Open product view popup */

let product = document.querySelector(".product-box .btnpro");
product.onclick = () => {
  productPreview.style.display = "flex";
  let name = product.getAttribute("data-name");
  let target = previewBox.getAttribute("data-target");
  if (name === target) {
    return (productPreview.innerHTML = productData.map((x) => {
      let { id, price, itemname, img, viewprevi, descInfo } = x;
      return `
                <div class="previewitem" data-target="${viewprevi}">
                    <i class="bx bx-x-circle closePopup"></i>
                    <img src="${img}" alt="" class="product-img viewimg" />
                    <div class="headparagraph">
                      <h2 class="product-title popuph1">${itemname}</h2>
                      <p>
                        ${descInfo}
                      </p>
                      <div class="star">
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star-half"></i>
                      </div>
                      <span class="price">$ ${price}</span>
                      <span id="${id}" class="quantity"></span>
                    </div>
                    <i class="bx bx-shopping-bag add-cart popupaddCart">Add to cart</i>
                </div>
                `;
    }));
  }
};

/* Close product view Popup  */
previewBox.forEach((close) => {
  close.querySelector(".closePopup").onclick = () => {
    close.classList.remove("previItemActive");
    productPreview.style.display = "none";
  };
});
