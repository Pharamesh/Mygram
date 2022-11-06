$('.add-gif').on('click', function() {
   
     let gif = $('.gif-link').val();
     $.ajax({
      url: 'http://localhost:5000/add?gif=' + gif,
      type: 'GET',
      success: function(data) {
        window.location.href = 'http://localhost:5500';
      }
  });
});


$(document).on('click', '.count', function() {
  let count = $(this).text();
    count++;
    $(this).text(count);
});
