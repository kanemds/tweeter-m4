$(document).ready(function() {
 
  $('textarea').on('input', function() {
    const val = $(this).val();
    const remain = 140 - val.length;
    $(this).parent().find('output').text(remain);

    if (remain < 0) {
      $('.alert.error.no-content').removeClass('open');
      $(this).parent().find('output').addClass('error');
      $('.alert.error.maximum').addClass('open');
    } else {
      $('.alert.error.no-content').removeClass('open');
      $('.alert.error.maximum').removeClass('open');
      $(this).parent().find('output').removeClass('error');
    }
  });

});

