$(document).ready(function() {
 
  $('textarea').on('input', function() {
    const val = $(this).val();
    const length = 140 - val.length;
    $(this).parent().find('output').text(length);

    if (length < 0) {
      $(this).parent().find('output').addClass('error');
    } else {
      $(this).parent().find('output').removeClass('error');
    }
  });

});

