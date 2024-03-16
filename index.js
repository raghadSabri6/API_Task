async function getProducts() {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  let products = data.products;
  

  const result = await products.map(function (product) {
    return `
    <div class="product">
    <h2>${product.title}</h2>
    <img class="imgProduct" src="${product.thumbnail}"/>
    <p>${product.price}</p>
    </div>`;
  }).join("");

  document.querySelector(".products").innerHTML = result;
}

getProducts();
