$("#view-work").on("click", function() {
  const images = $("#images").position().top;

  $("html, body").animate(
    {
      scrollTop: images
    },
    1000
  );
});

if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
    .register('./sw_cached_pages.js')
    .then(reg => console.log("Registered"))
    .catch(err => console.log(err))
  })
}


const targets = document.querySelectorAll('img');

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        
        const img = entry.target;
        const src = img.getAttribute('data-lazy');
        img.src = src;
        
        observer.disconnect();

      }
    });
  });
  io.observe(target);
}

targets.forEach(lazyLoad);
