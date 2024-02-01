
$(document).ready(function () {


  
  //*Loading Animation
  $("#spinner").show();
  $(".web-content").hide();
  $(".glow-cursor").fadeOut()
  //Add a delay of 2000 milliseconds (2 seconds)
  setTimeout(function () {
    $(".web-content").show();
    $("#spinner").hide()
    $(".glow-cursor").fadeIn();

  }, 4000);

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

