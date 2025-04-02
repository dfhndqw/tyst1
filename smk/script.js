// قائمة المنتجات
const products = [
    { id: 1, name: " سمك زبيدي كويتي", price: 10, img: "zbede.avif" },
    { id: 2, name: " فيلية سلمون نرويجي", price: 15, img: "z1.avif" },
    { id: 3, name: " سمك شيم كويتي", price: 20, img: "salmon.avif" },
    { id: 4, name: " سلة روبيان كويتي شحامي ", price: 25, img: "ropyan.avif" },
    { id: 5, name: " سمك سيباس بوكس", price: 30, img: "sebas.avif" },
    { id: 6, name: " سمك ميد كويتي", price: 12, img: "med.avif" },
    { id: 7, name: " سمك هامور كويتي", price: 18, img: "hamor.avif" },
    { id: 8, name: " سمك سلموت نرويجي", price: 22, img: "smk.avif" },
    { id: 9, name: " سمك نقرور ايراني", price: 28, img: "nqror.avif" },
    { id: 10, name: "قبقب كويتي نثايا", price: 35, img: "qbqb.avif" }
];

// تخزين سلة المشتريات
let cart = [];

// تحديث سلة المشتريات
function updateCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((product, index) => {
        total += product.price;
        const item = document.createElement("li");
        item.innerHTML = `
            ${product.name} - ${product.price} $
            <button onclick="removeFromCart(${index})">❌</button>
        `;
        cartItemsContainer.appendChild(item);
    });

    // تحديث المجموع الإجمالي في HTML
    document.getElementById("total-price").innerText = total;

    // تخزين الإجمالي في localStorage
    localStorage.setItem("totalAmount", total);
}

// إضافة المنتج إلى السلة
// إضافة المنتج إلى السلة
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);

    // تحديث سلة المشتريات بعد إضافة المنتج
    updateCart();

    // تخزين المنتج الذي تم اختياره في localStorage
    localStorage.setItem("selectedProduct", JSON.stringify(product));

    // توجيه المستخدم إلى صفحة تفاصيل المنتج
    window.location.href = "product-detail.html";
}


// إزالة منتج من السلة
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// عرض المنتجات على الصفحة
const productContainer = document.querySelector(".product-container");
products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>السعر: ${product.price} $</p>
        <button onclick="addToCart(${product.id})">إضافة إلى السلة</button>
    `;
    productContainer.appendChild(productElement);
});
