const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuMobileIcon = document.querySelector(".menu");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");
const productDetailSecondary = document.querySelector(".product-detail-secondary");
const categorias = document.querySelectorAll(".boton-categoria");
const Amandiva = document.querySelector(".nombre-marca");


let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // It is scrolling downo
        header.classList.add('header-hidden');
    } else {
        // Scrolling up
        header.classList.remove('header-hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});






function toggleDesktopMenu() {
    const isProductDetailClosed = productDetail.classList.contains("inactive");
    
    if(!isProductDetailClosed) {       /*si detalle de producto esta abierto */
        productDetail.classList.add("inactive")    /*cierralo */
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isProductDetailClosed = productDetail.classList.contains("inactive");
    
    if(!isProductDetailClosed) {
        productDetail.classList.add("inactive");
    }
    
    closeProductDetailSecondary();

    mobileMenu.classList.toggle("inactive");
}

function toggleProductDetail() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    const isProductDetailSecondaryClosed = productDetailSecondary.classList.contains("inactive");

    if(!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
       
    }

    if(!isProductDetailSecondaryClosed) {
        productDetailSecondary.classList.add("inactive");
    }

    productDetail.classList.toggle("inactive");
}

function openProductDetailSecondary() {
    productDetail.classList.add("inactive");
    productDetailSecondary.classList.remove("inactive");
}

function closeProductDetailSecondary() {
    productDetailSecondary.classList.add("inactive");    
}

menuEmail.addEventListener("click", toggleDesktopMenu);
menuMobileIcon.addEventListener("click", toggleMobileMenu);
shoppingCartIcon.addEventListener("click", toggleProductDetail);
productDetailCloseIcon.addEventListener("click", closeProductDetailSecondary);
Amandiva.addEventListener("click", () => renderProducts(productList));

let productListBackup = null;

function agregarEventoClickACategorias(categorias, productList, renderProducts) {
    categorias.forEach((categoria) => {
        categoria.addEventListener("click", (e) => {
            categorias.forEach((cat) => cat.classList.remove("selected"));
            categoria.classList.add("selected");

            if (e.currentTarget.id !== "all") {
                if (productListBackup === null) {
                    productListBackup = productList.slice();
                }

                productList = productListBackup.filter(producto => producto.categoria.id === e.currentTarget.id);


            } else {
                productList = productListBackup ? productListBackup.slice() : productList;
                productListBackup = null;
            }
            renderProducts(productList);
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
        id: "tops"
    },
    img:"images/BlackFleeceCroppedTop.webp",
});
productList.push({
    price: 41900,
    name: "Amsterdam Sweater",
    categoria: {
        nombre: "Sweaters",
        id: "Sweaters"
    },
    img:"images/AmsterdamSweater.jpeg", 
});
productList.push({
    price: 29099,
    name: "Knitted Cropped Sweater - V Hem",
    categoria: {
        nombre: "Sweaters",
        id: "Sweaters"
    },
    img:"images/Knitted Cropped Sweater - V Hem.webp",
});
productList.push({
    price: 15199,
    name: "Classic Top",
    categoria: {
        nombre: "tops",
        id: "tops"
    },
    img:"images/ClassicTop.jpeg",
});
productList.push({
    price: 37999,
    name: "Long Sleeve Top",
    categoria: {
        nombre: "tops",
        id: "tops"
    },
    img:"images/LongSleeveTop.jpeg",
});
productList.push({
    price: 17500,
    name: "Knitted Cropped Sweater",
    categoria: {
        nombre: "Sweaters",
        id: "Sweaters"
    },
    img:"images/KnittedCroppedSweater.jpeg",
});
productList.push({
    price: 39799,
    name: "Hoodie Oversize",
    categoria: {
        nombre: "Hoodies",
        id: "Hoodies"
    },
    img:"images/HoodieOversize.jpeg",
});
productList.push({
    price: 24999,
    name: "Cropped Cream Hoodie in Fleece",
    categoria: {
        nombre: "Hoodies",
        id: "Hoodies"
    },
    img:"images/CroppedCreamHoodieinFleece.jpeg",
});
productList.push({
    price: 35000,
    name: "Hoodie Oversize Strawberry",
    categoria: {
        nombre: "Hoodies",
        id: "Hoodies"
    },
    img:"images/HoodieOversizeStrawberry.jpeg",
});
productList.push({
    price: 36000,
    name: "Hoodie Honky Tonk",
    categoria: {
        nombre: "Hoodies",
        id:"Hoodies"
    },
    img:"images/HoodieHonkyTonk.jpeg",
});
productList.push({
    price: 25990,
    name: "Blue Long Sleeve Top",
    categoria: {
        nombre: "tops",
        id: "tops"
    },
    img:"images/BlueLongSleeveTop.webp",
});
productList.push({
    price: 26000,
    name: "Sweater New York",
    categoria: {
        nombre: "Sweaters",
        id: "Sweaters"
    },
    img:"images/SweaterNewYork.jpeg",
});


const contenedorProductos = document.querySelectorAll(".cards-container")



function renderProducts(arr){

    cardsContainer.innerHTML = '';

    for (product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.img);
        productImg.addEventListener("click", openProductDetailSecondary);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");

        const symbolText = document.createElement("p");
        symbolText.innerText = "$";
        symbolText.classList.add("symbol-price");

        const productPrice = document.createElement("p");
        productPrice.innerText =  product.price;
        productPrice.classList.add("product-price");

        const productName = document.createElement("p");
        productName.innerText = product.name; 
        productName.classList.add("product-name");

        productInfoDiv.appendChild(symbolText);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "icons/add-to-basket-5854 (1).png");
        productImgCart.classList.add("agregar-al-carrito")

        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);
agregarEventoClickACategorias(categorias, productList, renderProducts);

    /* Shopping Cart */

var carrito = [];

const CartContainer = document.querySelector(".my-order-content");
const carritoDeCompras = document.querySelector(".navbar-shopping-cart");
const cartProductList = document.getElementById("shopping-cart-list");
const productCard = document.querySelector(".product-card")
const productPrice = document.querySelector("product-price");
const productCounter = document.querySelector(".contador-productos");

var sumadeprecios;

function agregarProducto(e) {
    const productoSeleccionado = e.currentTarget.parentElement.parentElement.parentElement;
    const productPrice = productoSeleccionado.querySelector('.product-price');
    const symbolPrice = productoSeleccionado.querySelector('.symbol-price');
    const productName = productoSeleccionado.querySelector(".product-name");
    const productImg = productoSeleccionado.querySelector("img").src;

    const producto = {
        precioInicial: parseFloat(productPrice.innerText),
        precio: parseFloat(productPrice.innerText),
        symbol: symbolPrice.innerText,
        nombre: productName.innerText,
        imagen: productImg,
        cantidad: 1
    };
    const productoExistente = carrito.find(item => producto.nombre === item.nombre);
         
    if (productoExistente) {
        productoExistente.cantidad++; 
        if (productoExistente.cantidad > 1) {
            productoExistente.precio = productoExistente.precioInicial * productoExistente.cantidad;
/* 
            function priceFormat(precio) {
                precio = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2
            
                });
            };


*/
        }
    } else {
        carrito.push(producto);  
    }   
    actualizarCarrito();
    TotalCarrito();
    obtenerSumaCantidades();
};

function eliminarProducto(productName) {
    carrito = carrito.filter(producto => producto.nombre !== productName); // Filtrar el carrito para eliminar el producto con el mismo nombre
    actualizarCarrito();
    TotalCarrito();
    obtenerSumaCantidades();
}

function filtrarProductosConCantidadMayorACero(carrito) {
    return carrito.filter(producto => producto.cantidad > 0);
}

function obtenerSumaCantidades() {
    let sumaCantidades = carrito.reduce((suma, producto) => suma + producto.cantidad, 0);
    productCounter.innerText = sumaCantidades;
    return sumaCantidades;
}
function actualizarCarrito() {
    cartProductList.innerHTML = '';

    carrito.forEach(producto => {
        const DivCartProductList = document.createElement("div");
        DivCartProductList.classList.add("shopping-cart");

        const productFigure = document.createElement("figure");
        productFigure.classList.add("producto-agregado")
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", producto.imagen);

        let productQuantity = document.createElement("p");
        productQuantity.classList.add("cantidad-productos");
        productQuantity.textContent = producto.cantidad;

        const divInfoProductCart = document.createElement("div");
        divInfoProductCart.classList.add("container-info-products-cart")

        const productName = document.createElement("p");
        productName.textContent = producto.nombre;
        productName.classList.add("estilo-dinamico-nombre"); 

        const productPriceContainer = document.createElement("div");
        productPriceContainer.classList.add("product-price-container")

        const priceElements = document.createElement("div")
           
        const productPrice = document.createElement("p");
        productPrice.textContent = producto.precio;
        productPrice.classList.add('estilo-dinamico-precio'); 
        
        const symbolPrice = document.createElement("p");
        symbolPrice.textContent = producto.symbol;
        symbolPrice.classList.add('estilo-dinamico-symbol'); 

        const deleteIcons = document.createElement("img");               // Create delete button
        deleteIcons.setAttribute("src", "./icons/icon_close.png");
        deleteIcons.classList.add("elimina-producto"); 
        
        deleteIcons.addEventListener('click', () => {                    
            const productName = producto.nombre;                         
            eliminarProducto(productName);                               
        });

        const buttonsContainer = document.createElement("div");
        buttonsContainer.classList.add("btns-container")

        const SubtractionButton = document.createElement("button");
        SubtractionButton.classList.add("subtraction-btn");
        SubtractionButton.setAttribute("id", "subtraction-btn");
        SubtractionButton.textContent = "-";

        SubtractionButton.addEventListener("click", () => {
            productQuantity.textContent = producto.cantidad -= 1;
            if(producto.cantidad === 0) {
                eliminarProducto(producto.nombre); 
            }
            productPrice.textContent = producto.precio -= producto.precioInicial;
            obtenerSumaCantidades();
            TotalCarrito();
        });

        const additionButton = document.createElement("button")
        additionButton.classList.add("addition-btn");
        additionButton.setAttribute("id", "addition-btn");

        additionButton.textContent = "+";

        additionButton.addEventListener("click", () =>{
            productQuantity.textContent = producto.cantidad += 1;
            productPrice.textContent = producto.precio += producto.precioInicial;
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
        priceElements.appendChild(symbolPrice);
        priceElements.appendChild(productPrice);


        
    });
};

function TotalCarrito() { 
        const checkoutDetailProduct = document.getElementById("product-detail-checkout"); 

        checkoutDetailProduct.innerHTML = '';


        const order = document.createElement("div"); 
        order.classList.add("order"); 
        
        const pContainer = document.createElement("p"); 

        const totalText = document.createElement("span");
        totalText.textContent = "Total"; 
        
        var totalCarrito = document.createElement("p"); 
        totalCarrito.classList.add("total-carrito"); 
        
        
        const resultado = carrito.reduce((acc, producto) => {
            return acc += parseFloat(producto.precio);
        }, 0);
        
        totalCarrito.textContent =  `${"$"} ${resultado}`;


        order.appendChild(pContainer);
        pContainer.appendChild(totalText);
        order.appendChild(totalCarrito); 
        checkoutDetailProduct.appendChild(order);

}; 

function escuchaAgregarProducto(productList) {
    const productImgCarts = document.querySelectorAll(".agregar-al-carrito");

        productImgCarts.forEach((productImgCart) => {
        productImgCart.addEventListener("click", (e) => agregarProducto(e, productList));
    });    

}


      document.addEventListener("DOMContentLoaded", function() {
        escuchaAgregarProducto();    
    });



        /*NEWSLETTER*/

function changeToSuscribed() {
    const subscribeButton = document.querySelector(".subscribe-button");
    const BoxCustomerEmail = document.querySelector(".icon-email")
    const emailInput = document.querySelector(".email-input");

    subscribeButton.addEventListener("click", checkSubscribed);
    emailInput.addEventListener("keypress", function(event) { 
        if (event.key === "Enter") {
             checkSubscribed(event); 
        } 
    });

    function checkSubscribed(event) {
       event.preventDefault(); 
       const email = emailInput.value.trim();
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

       if (email !== "" && emailRegex.test(email) ) {
        console.log("You are subscribed");
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