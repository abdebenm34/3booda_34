function slowScroll(e){
  e.preventDefault();

  const target = document.getElementById("AboutMe");
  const start = window.pageYOffset;
  const end = target.offsetTop;
  const duration = 300;

  let startTime = null;

  function animation(currentTime){
    if(!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, start + (end - start) * progress);

    if(timeElapsed < duration){
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}


