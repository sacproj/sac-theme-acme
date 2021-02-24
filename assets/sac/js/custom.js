import * as params from '@params';

// Display or hide #brand div regarding 'data-brand' attribute value
function hideBrand() {
  var brand = document.getElementById("brand");
  brand.style.display = "none";
}

function showHideBrand(section) {
  if (section !== undefined) {
    var show = section.getAttribute("data-brand");
    var brand = document.getElementById("brand");
    if (brand !== null) {
      if (show === "false") {
        brand.style.display = "none";
      } else {
        brand.style.display = "block";
        if (params.theme.mode.light !== undefined) {
          if (section.classList.contains("has-dark-background")) {
            brand.classList.add("has-dark-background");
          } else {
            brand.classList.remove("has-dark-background");
          }
        }
        if (params.theme.mode.dark !== undefined) {
          if (section.classList.contains("has-light-background")) {
            brand.classList.add("has-light-background");
          } else {
            brand.classList.remove("has-light-background");
          }
        }
      }
    }
  }
}

Reveal.on('ready', function (event) {
  if ((Reveal.isOverview() || Reveal.isSpeakerNotes()) === true) {
    hideBrand();
  } else {
    showHideBrand(event.currentSlide);
  }
});

Reveal.on('slidechanged', function (event) {
  if ((Reveal.isOverview() || Reveal.isSpeakerNotes()) === true) {
    hideBrand();
  } else {
    showHideBrand(event.currentSlide);
  }
});

Reveal.on('overviewshown', function(event) {
  hideBrand();
});

Reveal.on('overviewhidden', function(event) {
  showHideBrand(event.currentSlide);
});
