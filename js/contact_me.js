//window.addEventListener('load', function () {
//  var contactForm = document.getElementById('contactForm')    
//  contactForm.addEventListener('submit', function () {
//    // ここにバリデーションとか
//    $("#modal-example").modal("show");
////    milkform.submit();
//  });
//});

$("#contactForm").submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    alert("Thank you!");
  });
});