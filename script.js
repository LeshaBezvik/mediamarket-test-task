$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$('.header__list li a').click(function(event){
    if( $('.header__burger, .header__menu').hasClass('active') ) {
        $('.header__burger, .header__menu').removeClass('active');
        $('body').removeClass('lock');
    }
});



var currentLanguage = localStorage.getItem('language') || 'en';

function toggleLanguage() {
    var langSwitchBtn = document.getElementById('lang-switch');
    currentLanguage = currentLanguage === 'en' ? 'uk' : 'en';
    langSwitchBtn.textContent = currentLanguage === 'en' ? 'Змінити мову' : 'Switch Language';
    localStorage.setItem('language', currentLanguage);
    changePageLanguage();
}

function changePageLanguage() {
    var languageElements = document.querySelectorAll('[data-lang]');
    languageElements.forEach(function(element) {
        var key = element.getAttribute('data-lang');
        var text = languageData[currentLanguage][key];
        element.textContent = text;
    });
}

var languageData = {
    'uk': {
        'menu1': 'Реєстрація',
        'menu2': 'Про нас',
        'menu3': 'Галерея',
        'form1': 'Ім\'я',
        'form2': 'Прізвище',
        'form3': 'Телефон',
        'form4': 'Імейл',
        'form5': 'Реєстрація',
        'text1': 'Про нас',
        'text2': 'Риба золотавими лусками легко пливла в глибині прозорого озера. Вода була прохолодною, а проміння сонця гріло її луски, роблячи їх сяючими. Вітер тихенько повівав, коли риба рухалася крізь водорості, створюючи тихі хвилі навколо. Серед рослин та коралів танцювали рибки-акули у барвистому морському світі. Риф був повний життя, і кожна істота виконувала свою роль у цьому екосистемі. Риби малювали різнобарвний образ, пливучи у воді з чудовим граціозним рухом. У глибині океану риба-фугу розкривала свої пухнасті плавці і перебувала у стані захисту. Її дивовижний вигляд відзначався унікальністю, ніби художник викладав на неї малюнки з водоростей. Підводний світ був неймовірним місцем, де риби-ангели пливали біля красивих коралових рифів. Кожна риба була неповторною, з окрасою, що доповнювала морське полотно. Під час закату сонця, велика риба-акула витягнула свої могутні плавці і повільно спливала у темряву океану. Вона випромінювала силу та загадковість. Рибний світ був чарівним та загадковим, де кожен обитатель приховував свої таємниці і дивовижністю спонукав досліджувати цей унікальний світ підводного водного простору.',
        'text3': 'Риба золотавими лусками легко пливла в глибині прозорого озера. Вода була прохолодною, а проміння сонця гріло її луски, роблячи їх сяючими. Вітер тихенько повівав, коли риба рухалася крізь водорості, створюючи тихі хвилі навколо. Серед рослин та коралів танцювали рибки-акули у барвистому морському світі. Риф був повний життя, і кожна істота виконувала свою роль у цьому екосистемі. Риби малювали різнобарвний образ, пливучи у воді з чудовим граціозним рухом. У глибині океану риба-фугу розкривала свої пухнасті плавці і перебувала у стані захисту. Її дивовижний вигляд відзначався унікальністю, ніби художник викладав на неї малюнки з водоростей. Підводний світ був неймовірним місцем, де риби-ангели пливали біля красивих коралових рифів. Кожна риба була неповторною, з окрасою, що доповнювала морське полотно. Під час закату сонця, велика риба-акула витягнула свої могутні плавці і повільно спливала у темряву океану. Вона випромінювала силу та загадковість. Рибний світ був чарівним та загадковим, де кожен обитатель приховував свої таємниці і дивовижністю спонукав досліджувати цей унікальний світ підводного водного простору.',
        'slider1': 'Галерея',
        'footer1': 'Безвіконний Олексій',
    },
    'en': {
        'menu1': 'Registration',
        'menu2': 'About',
        'menu3': 'Gallery',
        'form1': 'Name',
        'form2': 'Surname',
        'form3': 'Phone',
        'form4': 'Email',
        'form5': 'Registration',
        'text1': 'About us',
        'text2': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias soluta quisquam itaque quae mollitia, vero illo, amet beatae esse similique illum culpa, at quia maxime doloremque? Accusamus, officiis? Quam, sint ipsum. Esse unde temporibus blanditiis quia ut quibusdam impedit soluta nobis possimus asperiores nisi molestiae facere, consequatur placeat ipsa id nostrum eveniet? Provident, labore, ipsam quibusdam incidunt modi perspiciatis libero accusantium ipsum similique porro voluptate qui consectetur laborum sunt molestiae esse. Consectetur, amet quod eum veniam nisi voluptate ullam repellendus alias beatae blanditiis laudantium eius necessitatibus excepturi harum error cumque. Expedita reiciendis itaque nisi voluptatibus, vero dolor sequi excepturi blanditiis deserunt sunt, exercitationem, beatae fugit consequuntur quaerat distinctio eligendi optio. Dolorum totam, ipsa at cupiditate soluta sed doloremque molestiae fugit optio perspiciatis eos officia id suscipit harum hic. Molestias provident ab quidem doloribus, sunt dolore asperiores nemo quas possimus esse distinctio ut mollitia blanditiis eaque voluptatem sequi cumque laudantium soluta, neque deleniti laborum nisi? Aut dignissimos, aspernatur temporibus eum quae perspiciatis id nesciunt. Repellendus ab quis a, labore aperiam corporis temporibus dolore tempore! Aspernatur ipsa quis labore, illo tempora numquam eius amet praesentium possimus fugiat minus fugit? Numquam, placeat, blanditiis unde ex, perferendis accusantium totam ea natus harum aut rerum.',
        'text3': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias soluta quisquam itaque quae mollitia, vero illo, amet beatae esse similique illum culpa, at quia maxime doloremque? Accusamus, officiis? Quam, sint ipsum. Esse unde temporibus blanditiis quia ut quibusdam impedit soluta nobis possimus asperiores nisi molestiae facere, consequatur placeat ipsa id nostrum eveniet? Provident, labore, ipsam quibusdam incidunt modi perspiciatis libero accusantium ipsum similique porro voluptate qui consectetur laborum sunt molestiae esse. Consectetur, amet quod eum veniam nisi voluptate ullam repellendus alias beatae blanditiis laudantium eius necessitatibus excepturi harum error cumque. Expedita reiciendis itaque nisi voluptatibus, vero dolor sequi excepturi blanditiis deserunt sunt, exercitationem, beatae fugit consequuntur quaerat distinctio eligendi optio. Dolorum totam, ipsa at cupiditate soluta sed doloremque molestiae fugit optio perspiciatis eos officia id suscipit harum hic. Molestias provident ab quidem doloribus, sunt dolore asperiores nemo quas possimus esse distinctio ut mollitia blanditiis eaque voluptatem sequi cumque laudantium soluta, neque deleniti laborum nisi? Aut dignissimos, aspernatur temporibus eum quae perspiciatis id nesciunt. Repellendus ab quis a, labore aperiam corporis temporibus dolore tempore! Aspernatur ipsa quis labore, illo tempora numquam eius amet praesentium possimus fugiat minus fugit? Numquam, placeat, blanditiis unde ex, perferendis accusantium totam ea natus harum aut rerum.',
        'slider1': 'Gallery',
        'footer1': 'Olexii Bezvikonnyi',
    }
};

document.getElementById('lang-switch').addEventListener('click', toggleLanguage);
changePageLanguage();


const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    
    pagination: {
        el: '.swiper-pagination',
    },
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    });



document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'server.php', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            console.log('Дані успішно відправлено на сервер.');
        } else {
            console.error('Помилка відправки даних на сервер.');
        }
        }
    };
    xhr.send(formData);
});





