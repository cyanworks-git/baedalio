$(document).ready(function() {
  $('#showing_header').hide();
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 960) {
      $('#showing_header').stop().slideDown(100); 
    } else {
      $('#showing_header').stop().slideUp(100); 
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const wavyTargets = document.querySelectorAll('.wavy');
  const wavyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, {
    rootMargin: '0px 0px -15% 0px' 
  });
  wavyTargets.forEach(target => wavyObserver.observe(target));
});