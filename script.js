// تحقق إذا كان التنبيه قد ظهر من قبل
window.addEventListener('load', function() {
    if (!localStorage.getItem('greeted')) {
        alert('مرحباً بك في الموقع!');
        // احفظ أن التنبيه تم عرضه
        localStorage.setItem('greeted', 'true');
    }
});

// وظيفة لتغيير النص عند الضغط على الزر
function changeTextOnClick(buttonId, newText) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener('click', function() {
            button.innerText = newText;
        });
    }
}

// وظيفة لتغيير لون الخلفية عند الضغط على الزر
function changeBackgroundColorOnClick(buttonId, color) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener('click', function() {
            document.body.style.backgroundColor = color;
        });
    }
}

// وظيفة لتشغيل عداد عند الضغط على الزر
function startCounter(buttonId) {
    const button = document.getElementById(buttonId);
    let count = 0;
    if (button) {
        button.addEventListener('click', function() {
            count++;
            alert('تم الضغط على الزر ' + count + ' مرة.');
        });
    }
}

// استدعاء الوظائف لتعمل في كل صفحة تحتوي على الأزرار المناسبة
changeTextOnClick('button1', 'تم تغيير النص!');
changeBackgroundColorOnClick('button2', 'lightblue');
startCounter('button3');
