const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuMobileIcon = document.querySelector(".menu");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuIconClose = document.querySelector(".mobile-menu-icon-close");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");
const productDetailSecondary = document.querySelector(
  ".product-detail-secondary"
);
const categorias = document.querySelectorAll(
  ".boton-categoria, .mobile-menu .boton-categoria"
);
const Amandiva = document.querySelector(".nombre-marca");
const brandingSection = document.querySelector(".branding-section");
const categoriesSection = document.querySelector(".categories-section");
const mainContainer = document.querySelector(".main-container");
const overlay = document.getElementById("overlay");
const closeCartIcon = document.getElementById("close-cart");
const emptyCartText = document.querySelector(".empty-cart-text");

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const currentScroll = window.scrollY || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // It is scrolling down
    header.classList.add("header-hidden");
  } else {
    // Scrolling up
    header.classList.remove("header-hidden");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// branding Section

let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-slides img");
const totalSlides = slides.length;
const repetitions = 3;
let currentRepetitions = 0;

function showSlide(index) {
  const offset = -index * 100;
  document.querySelector(
    ".carousel-slides"
  ).style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
  slideIndex = (slideIndex + direction + totalSlides) % totalSlides;
  showSlide(slideIndex);
}

function autoSlide() {
  currentRepetitions++;
  if (currentRepetitions < repetitions * totalSlides) {
    moveSlide(1);
    setTimeout(autoSlide, 4000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(slideIndex);
  setTimeout(autoSlide, 4000);
});

function openProductDetail() {
  productDetail.classList.remove("inactive");
  document.body.classList.add("body-no-scroll");
  overlay.style.display = "block";
}

function closeProductDetail() {
  productDetail.classList.add("inactive");
  document.body.classList.remove("body-no-scroll");
  overlay.style.display = "none";
}

function toggleDesktopMenu() {
  const isProductDetailClosed = productDetail.classList.contains("inactive");

  if (!isProductDetailClosed) {
    productDetail.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

const isProductDetailClosed = productDetail.classList.contains("inactive");
const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

function openMobileMenu() {
  closeProductDetailSecondary();
  mobileMenu.classList.remove("inactive");
  menuMobileIcon.classList.add("inactive");
  mobileMenuIconClose.classList.remove("inactive");
}

function closeMobileMenu() {
  mobileMenu.classList.add("inactive");
  menuMobileIcon.classList.remove("inactive");
  mobileMenuIconClose.classList.add("inactive");
}

function openProductDetailSecondary(event) {
  productDetail.classList.add("inactive");
  productDetailSecondary.classList.remove("inactive");
  renderProductDetail(event);
  mainContainer.classList.add("inactive");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function closeProductDetailSecondary() {
  if (productDetailSecondary) {
    productDetailSecondary.classList.add("inactive");
  }
}

function hideProductList() {
  cardsContainer.innerHTML = "";
  cardsContainer.style.display = "none";
}

function hideBrandingSection() {
  brandingSection.style.display = "none";
  categoriesSection.style.display = "none";
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function showBrandingSection() {
  brandingSection.style.display = "block";
  categoriesSection.style.display = "block";
}

menuEmail.addEventListener("click", toggleDesktopMenu);
menuMobileIcon.addEventListener("click", openMobileMenu);
mobileMenuIconClose.addEventListener("click", closeMobileMenu);
shoppingCartIcon.addEventListener("click", openProductDetail);
overlay.addEventListener("click", closeProductDetail);
closeCartIcon.addEventListener("click", closeProductDetail);

if (Amandiva) {
  Amandiva.addEventListener("click", () => {
    closeMobileMenu();
    mainContainer.classList.remove("inactive");
    hideProductList();
    closeProductDetailSecondary();
    closeProductDetail();
    showBrandingSection();
    if (productListBackup) {
      productList = productListBackup.slice();
    }
  });
}

let productListBackup = null;

function agregarEventoClickACategorias(
  categorias,
  productList,
  renderProducts
) {
  categorias.forEach((categoria) => {
    categoria.addEventListener("click", (e) => {
      const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

      if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
        mobileMenuIconClose.classList.add("inactive");
        menuMobileIcon.classList.remove("inactive");
      }

      mainContainer.classList.remove("inactive");
      closeProductDetail();
      closeProductDetailSecondary();
      categorias.forEach((cat) => cat.classList.remove("selected"));
      categoria.classList.add("selected");

      if (productListBackup === null) {
        productListBackup = productList.slice();
      }

      let filteredProducts;
      if (e.currentTarget.id !== "all") {
        filteredProducts = productListBackup.filter(
          (producto) => producto.categoria.id === e.currentTarget.id
        );
      } else {
        filteredProducts = productListBackup.slice();
      }

      hideBrandingSection();
      renderProducts(filteredProducts);
      escuchaAgregarProducto();
    });
  });
}

let productList = [];

productList.push({
  price: 25990,
  name: "Black Fleece Cropped Top",
  categoria: {
    nombre: "tops",
    id: "tops",
  },
  img: "images/BlackFleeceCroppedTop.webp",
  id: "1",
});
productList.push({
  price: 41900,
  name: "Amsterdam Sweater",
  categoria: {
    nombre: "Sweaters",
    id: "Sweaters",
  },
  img: "images/AmsterdamSweater.jpeg",
  id: "2",
});
productList.push({
  price: 29099,
  name: "Knitted Cropped Sweater - V Hem",
  categoria: {
    nombre: "Sweaters",
    id: "Sweaters",
  },
  img: "images/Knitted Cropped Sweater - V Hem.webp",
  id: "3",
});
productList.push({
  price: 15199,
  name: "Classic Top",
  categoria: {
    nombre: "tops",
    id: "tops",
  },
  img: "images/ClassicTop.jpeg",
  id: "4",
});
productList.push({
  price: 37999,
  name: "Long Sleeve Top",
  categoria: {
    nombre: "tops",
    id: "tops",
  },
  img: "images/LongSleeveTop.jpeg",
  id: "5",
});
productList.push({
  price: 17500,
  name: "Knitted Cropped Sweater",
  categoria: {
    nombre: "Sweaters",
    id: "Sweaters",
  },
  img: "images/KnittedCroppedSweater.jpeg",
  id: "6",
});
productList.push({
  price: 39799,
  name: "Hoodie Oversize",
  categoria: {
    nombre: "Hoodies",
    id: "Hoodies",
  },
  img: "images/HoodieOversize.jpeg",
  id: "7",
});
productList.push({
  price: 24999,
  name: "Cropped Cream Hoodie in Fleece",
  categoria: {
    nombre: "Hoodies",
    id: "Hoodies",
  },
  img: "images/CroppedCreamHoodieinFleece.jpeg",
  id: "8",
});
productList.push({
  price: 35000,
  name: "Hoodie Oversize Strawberry",
  categoria: {
    nombre: "Hoodies",
    id: "Hoodies",
  },
  img: "images/HoodieOversizeStrawberry.jpeg",
  id: "9",
});
productList.push({
  price: 36000,
  name: "Hoodie Honky Tonk",
  categoria: {
    nombre: "Hoodies",
    id: "Hoodies",
  },
  img: "images/HoodieHonkyTonk.jpeg",
  id: "10",
});
productList.push({
  price: 25990,
  name: "Blue Long Sleeve Top",
  categoria: {
    nombre: "tops",
    id: "tops",
  },
  img: "images/BlueLongSleeveTop.webp",
  id: "11",
});
productList.push({
  price: 26000,
  name: "Sweater New York",
  categoria: {
    nombre: "Sweaters",
    id: "Sweaters",
  },
  img: "images/SweaterNewYork.jpeg",
  id: "12",
});

hideProductList();
agregarEventoClickACategorias(categorias, productList, renderProducts);

const contenedorProductos = document.querySelectorAll(".cards-container");

function renderProducts(arr) {
  cardsContainer.style.display = "grid";
  cardsContainer.innerHTML = "";

  if (arr.length == 0) {
    cardsContainer.style.height = "115vh";
  } else {
    cardsContainer.style.height = "auto";
  }

  for (const product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.setAttribute("id", product.id);
    productCard.addEventListener("click", openProductDetailSecondary);

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.img);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");
    productInfoDiv.classList.add("product-info-div");

    const symbolText = document.createElement("p");
    symbolText.innerText = "$";
    symbolText.classList.add("symbol-price");

    const productPrice = document.createElement("p");
    productPrice.innerText = product.price.toLocaleString();
    productPrice.classList.add("product-price");

    const productName = document.createElement("p");
    productName.innerText = product.name;
    productName.classList.add("product-name");

    productInfoDiv.appendChild(symbolText);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    productInfoFigure.classList.add("product-info-figure");

    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "icons/add-to-basket-5854 (1).png");
    productImgCart.classList.add("agregar-al-carrito");
    productImgCart.addEventListener("click", openProductDetail);

    productInfoFigure.appendChild(productImgCart);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);
  }
}

agregarEventoClickACategorias(categorias, productList, renderProducts);

/* Shopping Cart */

var carrito = [];

const CartContainer = document.querySelector(".my-order-content");
const carritoDeCompras = document.querySelector(".navbar-shopping-cart");
const cartProductList = document.getElementById("shopping-cart-list");
const productCard = document.querySelector(".product-card");
const productPrice = document.querySelector("product-price");
const productCounter = document.querySelector(".contador-productos");

var sumadeprecios;

function agregarProducto(e) {
  const productId = document.querySelector(".product-id").innerText;

  const selectedProduct = productList.find(
    (product) => product.id === productId
  );
  const productPrice = selectedProduct.price;
  const symbol = "$";
  const productName = selectedProduct.name;
  const productImg = selectedProduct.img;

  const producto = {
    precioInicial: productPrice,
    precio: productPrice,
    symbol: symbol,
    nombre: productName,
    imagen: productImg,
    cantidad: 1,
  };
  if (productCounter.innerText == 0) {
    openProductDetail();
  }
  const productoExistente = carrito.find(
    (item) => producto.nombre === item.nombre
  );

  if (productoExistente) {
    productoExistente.cantidad++;
    if (productoExistente.cantidad > 1) {
      productoExistente.precio =
        productoExistente.precioInicial * productoExistente.cantidad;
    }
  } else {
    carrito.push(producto);
    checkEmptyCart();
  }
  actualizarCarrito();
  TotalCarrito();
  obtenerSumaCantidades();
}

function checkEmptyCart() {
  if (carrito.length === 0) {
    emptyCartText.classList.remove("inactive");
  } else {
    emptyCartText.classList.add("inactive");
  }
}

function eliminarProducto(productName) {
  carrito = carrito.filter((producto) => producto.nombre !== productName);
  actualizarCarrito();
  TotalCarrito();
  obtenerSumaCantidades();
  checkEmptyCart();
}

function filtrarProductosConCantidadMayorACero(carrito) {
  return carrito.filter((producto) => producto.cantidad > 0);
}

function obtenerSumaCantidades() {
  let sumaCantidades = carrito.reduce(
    (suma, producto) => suma + producto.cantidad,
    0
  );
  productCounter.innerText = sumaCantidades;
  return sumaCantidades;
}
function actualizarCarrito() {
  cartProductList.innerHTML = "";

  carrito.forEach((producto) => {
    const DivCartProductList = document.createElement("div");
    DivCartProductList.classList.add("shopping-cart");

    const productFigure = document.createElement("figure");
    productFigure.classList.add("producto-agregado");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", producto.imagen);

    let productQuantity = document.createElement("p");
    productQuantity.classList.add("cantidad-productos");
    productQuantity.textContent = producto.cantidad;

    const divInfoProductCart = document.createElement("div");
    divInfoProductCart.classList.add("container-info-products-cart");

    const productName = document.createElement("p");
    productName.textContent = producto.nombre;
    productName.classList.add("estilo-dinamico-nombre");

    const productPriceContainer = document.createElement("div");
    productPriceContainer.classList.add("product-price-container");

    const priceElements = document.createElement("div");

    const productPriceNode = document.createElement("p");
    productPriceNode.classList.add("estilo-dinamico-precio");
    const formattedPrice = producto.precio.toLocaleString();
    productPriceNode.textContent = `${producto.symbol}${formattedPrice}`;

    const deleteIcons = document.createElement("img");
    deleteIcons.setAttribute("src", "./icons/icon_close.png");
    deleteIcons.classList.add("elimina-producto");

    deleteIcons.addEventListener("click", () => {
      const productName = producto.nombre;
      eliminarProducto(productName);
    });

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("btns-container");

    const SubtractionButton = document.createElement("button");
    SubtractionButton.classList.add("subtraction-btn");
    SubtractionButton.setAttribute("id", "subtraction-btn");
    SubtractionButton.textContent = "-";

    SubtractionButton.addEventListener("click", () => {
      productQuantity.textContent = producto.cantidad -= 1;
      if (producto.cantidad === 0) {
        eliminarProducto(producto.nombre);
      } else {
        productQuantity.textContent = producto.cantidad;
        producto.precio -= producto.precioInicial;
        productPriceNode.textContent = `${
          producto.symbol
        }${producto.precio.toLocaleString()}`;

        obtenerSumaCantidades();
        TotalCarrito();
      }
    });

    const additionButton = document.createElement("button");
    additionButton.classList.add("addition-btn");
    additionButton.setAttribute("id", "addition-btn");
    additionButton.textContent = "+";

    additionButton.addEventListener("click", () => {
      productQuantity.textContent = producto.cantidad += 1;
      producto.precio += producto.precioInicial;
      productPriceNode.textContent = `${
        producto.symbol
      }${producto.precio.toLocaleString()}`;

      obtenerSumaCantidades();
      TotalCarrito();
    });

    DivCartProductList.appendChild(productFigure);
    productFigure.appendChild(productImgCart);
    productFigure.appendChild(productQuantity);
    cartProductList.appendChild(productFigure);
    cartProductList.appendChild(divInfoProductCart);
    divInfoProductCart.appendChild(productName);
    divInfoProductCart.appendChild(buttonsContainer);
    buttonsContainer.appendChild(SubtractionButton);
    buttonsContainer.appendChild(additionButton);
    cartProductList.appendChild(productPriceContainer);

    productPriceContainer.appendChild(deleteIcons);
    productPriceContainer.appendChild(priceElements);
    priceElements.appendChild(productPriceNode);
  });
}

function TotalCarrito() {
  const checkoutDetailProduct = document.getElementById(
    "product-detail-checkout"
  );

  checkoutDetailProduct.innerHTML = "";

  const order = document.createElement("div");
  order.classList.add("order");

  const pContainer = document.createElement("p");

  const totalText = document.createElement("span");
  totalText.textContent = "Total";

  var totalCarrito = document.createElement("p");
  totalCarrito.classList.add("total-carrito");

  const resultado = carrito.reduce((acc, producto) => {
    return (acc += parseFloat(producto.precio));
  }, 0);

  totalCarrito.textContent = `${"$"} ${resultado.toLocaleString()}`;

  order.appendChild(pContainer);
  pContainer.appendChild(totalText);
  order.appendChild(totalCarrito);
  checkoutDetailProduct.appendChild(order);
}

function escuchaAgregarProducto(productList) {
  const productImgCarts = document.querySelectorAll(".agregar-al-carrito");
  productImgCarts.forEach((productImgCart) => {
    productImgCart.addEventListener("click", (e) =>
      agregarProducto(e, productList)
    );
  });
}

document.addEventListener("DOMContentLoaded", function () {
  escuchaAgregarProducto();
});

/*NEWSLETTER*/

function changeToSuscribed() {
  const subscribeButton = document.querySelector(".subscribe-button");
  const BoxCustomerEmail = document.querySelector(".icon-email");
  const emailInput = document.querySelector(".email-input");

  subscribeButton.addEventListener("click", checkSubscribed);
  emailInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      checkSubscribed(event);
    }
  });

  function checkSubscribed(event) {
    event.preventDefault();
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email !== "" && emailRegex.test(email)) {
      subscribeButton.textContent = "subscribed!";
      subscribeButton.classList.add("subscribed");
      BoxCustomerEmail.classList.add("subscribed");
      emailInput.value = "";
      emailInput.placeholder = "Thank you!";
    } else {
      showNotification("Please enter a valid email address.");
    }
  }

  function showNotification(message) {
    const alertBox = document.getElementById("alert");
    alertBox.textContent = message;
    alertBox.style.display = "block";

    setTimeout(() => {
      alertBox.style.display = "none";
    }, 3000);
  }
}
changeToSuscribed();

//PRODUCT DETAIL SECONDARY (MODAL)

const sizeElements = document.querySelectorAll(
  ".product-info-secondary .Sizes p"
);

function renderProductDetail(e) {
  const productoSeleccionado = e.currentTarget;
  const productName = productoSeleccionado.querySelector(".product-name");
  const productPrice = productoSeleccionado.querySelector(".product-price");
  const productImage = productoSeleccionado.querySelector("img").src;
  const productId = productoSeleccionado.getAttribute("id");

  const modalProductName = document.querySelector(
    ".product-detail-secondary .product-name-secondary"
  );
  const modalProductPrice = document.querySelector(
    ".product-detail-secondary .product-price"
  );
  const modalInstallmentPrice = document.querySelector(".installment-price");
  const modalProductImage = document.querySelector(".photos-container img");
  const modalProductId = document.querySelector(".product-id");

  const divisor = 3;
  const dividedPrice = productPrice.innerText / divisor;

  modalProductName.innerText = productName.innerText;
  modalProductPrice.innerText = "$ " + productPrice.innerText;
  modalInstallmentPrice.innerText = dividedPrice.toFixed(3);
  modalProductImage.src = productImage;
  modalProductId.innerText = productId;

  renderProducts([]);
}

// Toggle 'selected' class on size elements

sizeElements.forEach((size) => {
  size.addEventListener("click", function () {
    sizeElements.forEach((el) => el.classList.remove("selected"));
    this.classList.add("selected");
  });
});

const addToCart = document.querySelector(".add-to-cart-button");
addToCart.addEventListener("click", (e) => {
  agregarProducto(e);
});
