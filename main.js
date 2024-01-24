const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuMobileIcon = document.querySelector(".menu");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");
const productDetailSecondary = document.querySelector(".product-detail-secondary");
const categorias = document.querySelectorAll(".boton-categoria")

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


let productListBackup = null;                                                                  // Variable para hacer una copia de respaldo de la lista original


function agregarEventoClickACategorias(categorias, productList, renderProducts) {
    categorias.forEach((categoria) => {
        categoria.addEventListener("click", (e) => {
            categorias.forEach((cat) => cat.classList.remove("selected"));
            categoria.classList.add("selected");

            if (e.currentTarget.id !== "all") {                                              // si clickean en categoria distinta a All
                
                if (productListBackup === null) {                                            // Verificar si ya hay una copia de respaldo
                  
                    productListBackup = productList.slice();                                 // Hacer una copia de respaldo de la lista original
                }

                productList = productListBackup.filter(producto => producto.categoria.id === e.currentTarget.id); //Filtra
            } else {                                                                                              
                
                productList = productListBackup ? productListBackup.slice() : productList;  // Restaurar la lista original desde la copia de respaldo si clickean en All
               
                productListBackup = null;                                                   // Restablecer la copia de respaldo
            }

            renderProducts(productList);
            escuchaAgregarProducto();
        });
    });
}


let productList = [];

productList.push({
    price: 120,
    name: "Bike",
    categoria: {
        nombre: "others",
        id: "others"
    },
    img:"https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
});
productList.push({
    price: 199,
    name: "Desk Lamp",
    categoria: {
        nombre: "furiture",
        id:"furiture"
    },
    img:"https://images.pexels.com/photos/18280834/pexels-photo-18280834/free-photo-of-cama-lampara-decorativo-mesita-de-noche.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 390,
    name: "Couch",
    categoria: {
        nombre: "furiture",
        id: "furiture"
    },
    img:"https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 99,
    name: "Hanging Mirror",
    categoria: {
        nombre: "furiture",
        id: "furiture"
    },
    img:"https://images.pexels.com/photos/1528975/pexels-photo-1528975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 59,
    name: "Blue Bag",
    categoria: {
        nombre: "others",
        id: "others"
    },
    img:"https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 129,
    name: "Pinting",
    categoria: {
        nombre: "furiture",
        id: "furiture"
    },
    img:"https://images.pexels.com/photos/18254580/pexels-photo-18254580/free-photo-of-casas-pared-pintura-casa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 69,
    name: "Gardening Kit",
    categoria: {
        nombre: "Gardening",
        id: "Gardening"
    },
    img:"https://images.pexels.com/photos/6231726/pexels-photo-6231726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 1589,
    name: "Lawnmower",
    categoria: {
        nombre: "Gardening",
        id: "Gardening"
    },
    img:"https://images.pexels.com/photos/9229821/pexels-photo-9229821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 29,
    name: "Sweater",
    categoria: {
        nombre: "clothes",
        id: "clothes"
    },
    img:"https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 45,
    name: "wooden train",
    categoria: {
        nombre: "toys",
        id: "toys"
    },
    img:"https://images.pexels.com/photos/273062/pexels-photo-273062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
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


    /* Carrito De Compras */

var carrito = [];


const CartContainer = document.querySelector(".my-order-content");
const carritoDeCompras = document.querySelector(".navbar-shopping-cart");
const cartProductList = document.getElementById("shopping-cart-list");
const productCard = document.querySelector(".product-card")
const productPrice = document.querySelector("product-price");
const productCounter = document.querySelector("contador-productos");

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

    const productoExistente = carrito.find(function(item){
        return producto.nombre === item.nombre;
    });
         
        if (productoExistente) {
            productoExistente.cantidad++; 
            if (productoExistente.cantidad > 1) {
                productoExistente.precio = productoExistente.precioInicial * productoExistente.cantidad;

            }

    } else {
        carrito.push(producto);
    }
    actualizarCarrito();
    TotalCarrito();
};

function eliminarProducto(productName) {
    carrito.forEach(producto => {
        if (producto.nombre === productName && producto.cantidad > 0) {
            producto.cantidad--;
            producto.precio = producto.precio - producto.precioInicial;
        }
    });

    carrito = carrito.filter(producto => producto.cantidad > 0);
    actualizarCarrito();
    TotalCarrito();
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

        const productName = document.createElement("p");
        productName.textContent = producto.nombre;
        productName.classList.add("estilo-dinamico-nombre"); 

        const productPriceContainer = document.createElement("div");
        productPriceContainer.classList.add("product-price-container")
           
        const productPrice = document.createElement("p");

        productPrice.textContent = producto.cantidad === 1 ? producto.precioInicial : producto.precio;

        productPrice.textContent = producto.precio;
        productPrice.classList.add('estilo-dinamico-precio'); 
        
        const symbolPrice = document.createElement("p");
        symbolPrice.textContent = producto.symbol;
        symbolPrice.classList.add('estilo-dinamico-symbol'); 

        const deleteIcons = document.createElement("img");               // Crea boton eliminar
        deleteIcons.setAttribute("src", "./icons/icon_close.png");
        deleteIcons.classList.add("elimina-producto"); 
        
        deleteIcons.addEventListener('click', () => {                    // Escucha el click en icono ELIMINAR

            eliminarProducto(producto.nombre);
        });
        

        DivCartProductList.appendChild(productFigure);
        productFigure.appendChild(productImgCart);
        productFigure.appendChild(productQuantity);
        cartProductList.appendChild(productFigure);
        cartProductList.appendChild(productName);
        cartProductList.appendChild(productPriceContainer);
        productPriceContainer.appendChild(symbolPrice);
        productPriceContainer.appendChild(productPrice);
        
        cartProductList.appendChild(deleteIcons);


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


















