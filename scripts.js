// scripts.js
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let country = document.getElementById('country').value;
    let gender = document.getElementById('gender').value;
    let nationality = document.getElementById('nationality').value;
    let whatsapp = document.getElementById('whatsapp').value;
    let inviteCode = document.getElementById('invite-code').value;
    let hasLivePlatform = document.getElementById('has-live-platform').value;
    let appName = document.getElementById('app-name').value;
    let talent = document.getElementById('talent').value;

    console.log('بيانات المذيع الجديد:');
    console.log('الاسم:', name);
    console.log('الدولة:', country);
    console.log('النوع:', gender);
    console.log('الجنسيه:', nationality);
    console.log('رقم الواتساب:', whatsapp);
    console.log('كود الدعوة:', inviteCode);
    console.log('عملت على منصة بث صوتي أو لايف:', hasLivePlatform);
    console.log('اسم التطبيق:', appName);
    console.log('هل لديك موهبة:', talent);

    // هنا يمكن إضافة كود لإرسال البيانات إلى الخادم
});
