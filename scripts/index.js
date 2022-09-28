const subProjects = document.querySelectorAll('div.sub-project'),
popUp = document.querySelector('div#pop-up'),
iFrame = popUp.querySelector('iframe');

let canBeClosed = false;

subProjects.forEach(subProject => {
    subProject.addEventListener('click', (_e) => {
        iFrame.setAttribute('src', `https://player.vimeo.com/video/${subProject.getAttribute('reference')}`)
        popUp.classList.add('visible')
        document.querySelector('html').style.overflow = 'hidden'
    });

    subProject.classList.add('reveal')
    subProject.classList.add('fade-bottom')
});

document.body.addEventListener('click', (event) => {
    if (popUp.classList.contains('visible') && !(iFrame.contains(event.target)) && canBeClosed) {
        popUp.classList.remove('visible')
        canBeClosed = false;
        document.querySelector('html').style.overflow = 'visible'
        iFrame.setAttribute('src', 'minimized')
    } else if(popUp.classList.contains('visible') && !(iFrame.contains(event.target))){
        canBeClosed = true;
    }
});

/*
    Appends smooth scroll behaviour to the animations, from below code executed; all a tags that aims an identity on the page, becomes smooth.
*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
});

function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var readMoreText = document.getElementById("readMore");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      moreText.style.display = "inline";
      readMoreText.style.display = "none";
    }
  }