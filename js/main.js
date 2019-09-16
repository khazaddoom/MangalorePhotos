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
    .register('../sw_cached_pages.js')
    .then(reg => console.log("Registered"))
    .catch(err => console.log(err))
  })
}
