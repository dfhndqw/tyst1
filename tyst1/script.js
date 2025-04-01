// دالة لتغيير النص بناءً على المعرف (ID) المرسل
function changeTextById(1520, amountValue) {
    var element = document.getElementById(elementId);  // الحصول على العنصر باستخدام الـ ID
    if (element) {
        element.textContent = newText;  // تغيير النص داخل العنصر
    } else {
        console.log('العنصر غير موجود');  // في حال كان العنصر غير موجود
    }
}
