// قراءة بيانات المنتج من localStorage
const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

// التحقق إذا كان هناك منتج تم اختياره
if (selectedProduct) {
    const productDetailContainer = document.getElementById("product-detail");

    // إنشاء المحتوى لعرض تفاصيل المنتج
    productDetailContainer.innerHTML = `
        <div class="product-detail">
            <img src="${selectedProduct.img}" alt="${selectedProduct.name}">
            <h2>${selectedProduct.name}</h2>
            <p>السعر: <span id="product-price">${selectedProduct.price}</span> $</p>
            
            <label for="quantity">الكمية:</label>
            <select id="quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>

            <label for="cleaning">اختيار التنظيف:</label>
            <select id="cleaning">
                <option value="withCleaning">تنظيف السمك</option>
                <option value="withoutCleaning">بدون تنظيف</option>
            </select>

            <button id="addAddressBtn">إضافة عنوان التوصيل</button>
        </div>
    `;

    // إضافة حدث لتحديث السعر عند تغيير الكمية
    document.getElementById("quantity").addEventListener("input", updatePrice);

    function updatePrice() {
        const quantity = document.getElementById("quantity").value;
        const totalPrice = selectedProduct.price * quantity;
        document.getElementById("product-price").textContent = totalPrice;

        // تخزين السعر النهائي في localStorage
        localStorage.setItem("totalAmount", totalPrice);
    }

    // تعيين حدث الضغط على زر "إضافة عنوان التوصيل"
    document.getElementById("addAddressBtn").addEventListener("click", function() {
        addToCart(selectedProduct);
    });
} else {
    document.getElementById("product-detail").innerHTML = "<p>لم يتم اختيار أي منتج.</p>";
}

// دالة لإضافة المنتج إلى السلة مع الكمية وخيار التنظيف
function addToCart(product) {
    const quantity = document.getElementById("quantity").value;
    const cleaningOption = document.getElementById("cleaning").value;

    const productWithDetails = { ...product, quantity, cleaningOption };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(productWithDetails);
    localStorage.setItem("cart", JSON.stringify(cart));

    // توجيه المستخدم إلى صفحة إتمام الشراء
    window.location.href = "mem.html";
}
