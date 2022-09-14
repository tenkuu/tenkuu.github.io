(function() {
  'use strict';

  var body, information, submit_button;

  function addCounterToView(number) {
    var counter = document.createElement('div');
    counter.className = 'counter';
    counter.textContent = number + 1;
    body.appendChild(counter);
  }

  function addImageToView(url) {
    var image = document.createElement('img');
    image.src = url;
    body.appendChild(image);
  }

  function processImagesForReading(url, pages) {
    for (var page = 1; page <= pages; page++) {
      var file = url + page + "/896.webp";
      addImageToView(file);
      addCounterToView(page);
    }
  }

  function updateReaderInfo(count) {
    information.textContent = `${count} pages loaded`;
  }

  function removeAnyCurrentImages() {
    while (body.children.length > 1) {
      body.removeChild(body.lastChild);
    }
  }

  function URLSetup() {
    submit_button = document.getElementById('submit');
    submit_button.onclick = function() {
      var url = "https://ksk" + "-h7" + "glm2" + ".xyz/t/" + document.getElementById('image_url').value + "/";
      var pages = document.getElementById('pages').value;
      removeAnyCurrentImages();
      processImagesForReading(url, pages);
      updateReaderInfo(pages);
    };
  }

  window.onload = function() {
    body = document.body;
    information = document.getElementById('reader-info');
    URLSetup();
  };
})();
