window.addEventListener('load', function () {
  var contactForm = document.getElementById('contactForm')    
  contactForm.addEventListener('submit', function () {
    // ここにバリデーションとか
    $("#modal-example").modal("show");
//    milkform.submit();
  });
});