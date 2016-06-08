window.addEventListener('load', function () {
  var contactForm = document.getElementById('contactForm')    
  var milkform = new MilkForm('catip5mi4vk', function(isSupported){
    // ロード完了時処理を書きたい場合はここ
    // isSupportedにはMilkcocoaにブラウザが対応しているかが帰ってくるので
    // milkform-fallbackを使わずに、サポートの有無に応じてこちらに自由に処理を書くことも出来ます
  });
  milkform.onSuccess(function(datum){
    //送信成功時処理を書きたい場合はここ
//      alert("お問い合わせありがとうございます。\nメールが送信されました。")
      
      $("#modal-example").modal("show");
  });
  milkform.onFailure(function(error){
    //送信失敗時処理を書きたい場合はここ
  });
    
  contactForm.addEventListener('submit', function () {
    // ここにバリデーションとか
    milkform.submit();
  });
});




/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});

//泥臭くvalidation書いて、