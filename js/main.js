(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
    
})(jQuery);

// Copy link rekening
function copyToClipboard(elementId) {
    var copyText = document.getElementById(elementId).innerText;
    var textArea = document.createElement("textarea");
    textArea.value = copyText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
    alert("No rekening disalin: " + copyText);
}

// Target date (6th July 2024)
const targetDate = new Date('2024-07-06T00:00:00');

function updateCountdown() {
  const currentDate = new Date();
  
  // Calculate difference for countdown-container 1
  const difference1 = targetDate - currentDate;
  if (difference1 <= 0) {
    // Countdown is over
    document.getElementById('days-value').textContent = '00';
    document.getElementById('hours-value').textContent = '00';
    document.getElementById('minutes-value').textContent = '00';
    document.getElementById('seconds-value').textContent = '00';
  } else {
    // Calculate remaining time for countdown-container 1
    let days1 = Math.floor(difference1 / (1000 * 60 * 60 * 24));
    let hours1 = Math.floor((difference1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes1 = Math.floor((difference1 % (1000 * 60 * 60)) / (1000 * 60));
    let seconds1 = Math.floor((difference1 % (1000 * 60)) / 1000);

    // Update the display for countdown-container 1
    document.getElementById('days-value').textContent = formatTime(days1);
    document.getElementById('hours-value').textContent = formatTime(hours1);
    document.getElementById('minutes-value').textContent = formatTime(minutes1);
    document.getElementById('seconds-value').textContent = formatTime(seconds1);
  }

  // Calculate difference for countdown-container 2
  const difference2 = targetDate - currentDate - 100000; // Example difference for countdown-container 2
  if (difference2 <= 0) {
    // Countdown is over
    document.getElementById('days-value2').textContent = '00';
    document.getElementById('hours-value2').textContent = '00';
    document.getElementById('minutes-value2').textContent = '00';
    document.getElementById('seconds-value2').textContent = '00';
  } else {
    // Calculate remaining time for countdown-container 2
    let days2 = Math.floor(difference2 / (1000 * 60 * 60 * 24));
    let hours2 = Math.floor((difference2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes2 = Math.floor((difference2 % (1000 * 60 * 60)) / (1000 * 60));
    let seconds2 = Math.floor((difference2 % (1000 * 60)) / 1000);

    // Update the display for countdown-container 2
    document.getElementById('days-value2').textContent = formatTime(days2);
    document.getElementById('hours-value2').textContent = formatTime(hours2);
    document.getElementById('minutes-value2').textContent = formatTime(minutes2);
    document.getElementById('seconds-value2').textContent = formatTime(seconds2);
  }

  // Update every second
  setTimeout(updateCountdown, 1000);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Initial call to start the countdown
updateCountdown();


  