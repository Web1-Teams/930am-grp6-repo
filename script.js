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


document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(function(button) {
        button.addEventListener('mouseover', function() {
            button.style.transform = 'scale(1.05)';
        });

        button.addEventListener('mouseout', function() {
            button.style.transform = 'scale(1)';
        });
    });

    
    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    sections.forEach(function(section) {
        observer.observe(section);
    });
});

const style = document.createElement('style');
style.innerHTML = `
    section {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    section.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
// يودكاستات

document.querySelector('.subscribe-section form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const emailInput = document.querySelector('.subscribe-section input');
    const email = emailInput.value;
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (emailRegex.test(email)) {
        alert('تم الاشتراك بنجاح! سيتم إرسال أحدث الحلقات إلى بريدك الإلكتروني.');
        emailInput.value = '';  
    } else {
        alert('يرجى إدخال بريد إلكتروني صالح.');
    }
});

const podcasts = document.querySelectorAll('.podcast');

podcasts.forEach(podcast => {
    podcast.addEventListener('mouseover', () => {
        podcast.style.transform = 'scale(1.05)';
        podcast.style.transition = 'transform 0.3s ease';
    });

    podcast.addEventListener('mouseout', () => {
        podcast.style.transform = 'scale(1)';
    });
});


const listenButtons = document.querySelectorAll('.podcast .btn');

listenButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        alert('سيتم تحويلك إلى صفحة الاستماع للبودكاست.');
    });
});

