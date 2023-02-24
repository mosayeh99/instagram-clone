// Play & Pause reel video on click
document.addEventListener('click', (e) => {
  e.stopPropagation();
  if (e.target.classList.contains('reel-video-src'))
  {
    if (!e.target.paused) {
      e.target.pause();
    }else {
      e.target.play();
    }
    e.target.nextElementSibling.classList.toggle('active');
  }

  if (e.target.classList.contains('reel-info'))
  {
    if (!e.target.previousElementSibling.firstElementChild.paused) {
      e.target.previousElementSibling.firstElementChild.pause();
    }else {
      e.target.previousElementSibling.firstElementChild.play();
    }
    e.target.previousElementSibling.children[1].classList.toggle('active');
  }
});

//
function playVideoOnScroll() {
  $('.reel-video-src').each(function () {
    if ($(this).is(":in-viewport(100)")) {
      $(this)[0].play();
    } else {
      $(this)[0].pause();
    }
    $(this).next().removeClass('active');
  })
}

