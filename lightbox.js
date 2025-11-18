// lightbox.js
$(document).ready(function() {
  // Open lightbox when a gallery image is clicked
  $('.gallery-img').click(function() {
    var imgSrc = $(this).attr('src');
    $('.lightbox-content').attr('src', imgSrc);
    $('.lightbox').fadeIn();
  });

  // Close lightbox when the close button is clicked
  $('.lightbox-close').click(function() {
    $('.lightbox').fadeOut();
  });

  // Close lightbox when clicking outside the image
  $('.lightbox').click(function(e) {
    if (e.target !== $('.lightbox-content')[0] && !$('.lightbox-content').has(e.target).length) {
      $('.lightbox').fadeOut();
    }
  });
});