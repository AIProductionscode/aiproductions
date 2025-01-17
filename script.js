
$(document).ready(function () {

  $('.welcome').hide();
  $("#spinner").hide();
  $(".enter").hide();

  // $('.welcome').hide();
  // $("#spinner").hide();
  // $("#spinner").fadeOut();


  // $('.enter').on('click', function () {
  //   enterButtonClick();
  // });

  // // Trigger button with enter key
  // $(document).on('keypress', function (e) {
  //   if (e.which === 13) {
  //     enterButtonClick();
  //   }
  // });

  // // Opening Theme
  // function enterButtonClick() {
  //   $('.enter').fadeOut();
  //   $('.welcome').show();
    
  //   //Wait for 5s for opening theme to finish playing
  //   setTimeout(function () {
  //     showWebContent();
  //   }, 5000);
  // }

  // //Wait for 2s for opening theme to finish playing
  // function showWebContent() {

  //   //*Loading Animation
  //   $("#spinner").fadeIn();
    
  //   //Spinner Fade of after 2s
  //   setTimeout(function () {
  //     $("#spinner").fadeOut();

  //   }, 2000);

  //   $("body").css("overflow", "hidden");


  //   //Add a delay of 2000 milliseconds (2 seconds)
  //   setTimeout(function () {
  //     $(".bg-placeholder").fadeOut();
  //     $('.web-content').removeClass('d-none'); 
     
  //     $(".glow-cursor").fadeIn();
  //     $("body").css("overflow", "auto");
  //   }, 2000);

  // }


  //Infinite Logo Scrolling
  const scrollers = document.querySelectorAll(".scroller");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach(scroller => {
      scroller.setAttribute("data-animated", true);
      const scrollerInner = document.querySelector(".scroller-inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      })

    })
  }


  //*Glow cursor
  const cursor = document.querySelector('.glow-cursor');
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  // Add a hover effect to interactive elements 
  const interactiveElements = document.querySelectorAll('.interactive');
  interactiveElements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      cursor.style.width = '100px';
      cursor.style.height = '100px';
      cursor.style.webkitFilter = "blur(120px)";

    });
    element.addEventListener('mouseleave', () => {
      cursor.style.width = '150px';
      cursor.style.height = '150px';
      cursor.style.webkitFilter = "blur(150px)";

    });

  });
  const webContent = document.querySelector('.web-content')
  webContent.addEventListener('mousedown', () => {
    cursor.style.webkitFilter = "blur(120px)";
  });
  webContent.addEventListener('mouseup', () => {
    cursor.style.webkitFilter = "blur(150px)";
  });


  //Project Counter
  setTimeout(function () {
    $(".projects-completed").waypoint(
      function () {
        const counters = document.querySelectorAll(".counter");
        const speed = 3;

        counters.forEach(counter => {
          const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.textContent;

            if (count < target) {
              counter.innerText = Math.ceil(count + speed);
              setTimeout(updateCount, 20);

            } else {
              count.innerText = target;
            }
          }
          updateCount();
        })
      },
      {
        offset: '90%'
      }
    )
  }, 6000);




// adjust navbar for desktop or mobile screen
// Function to check screen size and add/remove class
function checkScreenSize() {
  if ($(window).width() > 992) {
    $('.navbar').addClass('navbar-desktop'); // Add class for small screens
  } else {
    $('.navbar').removeClass('navbar-desktop'); // Remove class for larger screens
  }
}

// Run on page load
checkScreenSize();

// Run on window resize
$(window).resize(function () {
  checkScreenSize();
});











})//document ready

