var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbwRcf5IdcSWQL4O4iudYU71zQck-UEGcSdhm20QioR4ZKJ2edNm/exec'

$('#submit-form').on('click', function(e) {
    console.log('test');
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})