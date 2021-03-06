$(document).ready(function () {
    document.body.className += ' is-loaded';

    //slider 
    $('.slider').slick({
        fade: true,
        speed: 2000,
        cssEase: 'ease-out',
        touchThreshold: 100,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    });
});

function validFunc(submitId, nameId, surnameId, telId, mailId, selectId, messageId, accId, decId) {

    $(submitId).click(function (event) {
        var name = $(nameId).val();
        var surname = $(surnameId).val();
        var telephone = $(telId).val();
        var email = $(mailId).val();
        var projects = $(selectId).val();
        var message = $(messageId).val();
        var nameReg = /^[A-Za-zşŞıİçÇöÖüÜĞğ]+$/;
        var numberReg = /^[0-9]+$/;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var kabul = $(accId);
        var kdegil = $(decId);

        if (name == "") {
            swal({
                title: 'Uyarı!',
                text: 'Lütfen adınızı giriniz',
                type: 'warning',
                confirmButtonText: 'OK'
            });
            event.preventDefault();

        } else if (!nameReg.test(name)) {
            swal({
                title: 'Uyarı!',
                text: 'Lütfen geçerli bir ad giriniz',
                type: 'warning',
                confirmButtonText: 'OK'
            });
            event.preventDefault();

        } else if (surname == "") {
            swal({
                title: 'Uyarı!',
                text: 'Lütfen soyadınızı giriniz',
                type: 'warning',
                confirmButtonText: 'OK'
            });
            event.preventDefault();

        } else if (!nameReg.test(surname)) {
            swal({
                title: 'Uyarı!',
                text: 'Lütfen geçerli bir soyad giriniz',
                type: 'warning',
                confirmButtonText: 'OK'
            });
            event.preventDefault();

        } else if (telephone == "") {
            swal({
                title: 'Uyarı!',
                text: 'Lütfen telefon numaranızı giriniz',
                type: 'warning',
                confirmButtonText: 'OK'
            });
            event.preventDefault();

        } else if (!numberReg.test(telephone)) {
            swal({
                title: 'Uyarı!',
                text: 'Lütfen geçerli bir telefon numarası giriniz',
                type: 'warning',
                confirmButtonText: 'OK'
            });
            event.preventDefault();
        } else {
            $(submitId).click(function () {
                return true;
            });
        }
    });

};
validFunc('#submit', '#ad', '#soyad', '#tel', '#email', '#proje', '#mesaj', '#ke', '#kt');
$('#legalWarning').click(function () {
    swal({
        title: 'Uyarı!',
        text: 'Formda yer alan her türlü kişisel bilgimin, DKY pazarlama faaliyetlerinde, kampanyalarında, reklamlarında, tanıtımlarında ve iletişim çalışmalarında paylaşılmasına, işlenebilmesine, kullanılmasına, saklanmasına, tarafıma sms, mms, email gönderilmesine, sesli arama yapılmasına ve posta gönderilmesine muvafakat ediyor ve izin veriyorum.',
        type: 'warning',
        confirmButtonText: 'OK'
    });
});