$(document).ready(function () {


  //Wait for 5s for opening theme to finish playing

  $("#spinner").hide();
  //*Loading Animation
  setTimeout(function () {
    $("#spinner").fadeIn();
    $(".web-content").hide();
    $(".glow-cursor").fadeOut();
    $("body").css("overflow", "hidden");
  }, 5000);



  //Add a delay of 2000 milliseconds (2 seconds)
  setTimeout(function () {
    $(".web-content").show();
    $("#spinner").fadeOut()
    $(".glow-cursor").fadeIn();
    $("body").css("overflow", "auto");
  }, 9000);



  //Navbar retract and expand
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      $("#navbar").fadeOut();

    } else {
      $("#navbar").fadeIn();
    }
  }


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


  // //Animation on scroll
  // $(".head1").waypoint(
  //   function() {
  //   //  $(".head1").addClass("animate__animated animate__fadeOutUp")
  //   $(".head1").hide();
  //   },
  //   // {
  //   //   offset: '10%'
  //   // }
  // )


  //Navbar retract and expand
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".navbar").style.top = "0";
    }
    else {
      document.querySelector(".navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
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
      cursor.style.width = '120px';
      cursor.style.height = '120px';
    });
    element.addEventListener('mouseleave', () => {
      cursor.style.width = '150px';
      cursor.style.height = '150px';
    });
  });


  //Project Counter
  setTimeout(function () {
    $(".projects-completed").waypoint(
      function () {
        const counters = document.querySelectorAll(".counter");
        const speed = 1;

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


















  //Toasts
  document.addEventListener('DOMContentLoaded', function () {
    const toastLiveExample = document.getElementById('liveToast');

    if (toastLiveExample) {
      const toastBootstrap = new bootstrap.Toast(toastLiveExample);
      toastBootstrap.show();
    }
  });

})//document ready

