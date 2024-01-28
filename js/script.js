// filter categories
function filterSelection(category, element) {
  var projects = document.querySelectorAll('.project');
  var filterButtons = document.querySelectorAll('.filterbtn');

  projects.forEach(project => {
    if (category === 'all' || (project.classList.contains('filterDiv') && project.classList.contains(category))) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });

  filterButtons.forEach(btn => {
    btn.classList.remove('active');
  });

  if (element) {
    element.classList.add('active');
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const cursor = document.getElementById("cursor");

  document.addEventListener("mousemove", function(e) {
    // Update cursor position
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });

  const hoverElements = document.querySelectorAll("a, button");

  hoverElements.forEach(function(element) {
    element.addEventListener("mouseenter", function() {
      // Increase cursor size on image hover
      cursor.style.width = "40px";
      cursor.style.height = "40px";
    });

    element.addEventListener("mouseleave", function() {
      // Reset cursor size when leaving image
      cursor.style.width = "10px";
      cursor.style.height = "10px";
    });
  });
});

// loading
window.addEventListener('load', function () {
  setTimeout(function () {
    document.querySelector('.loader').classList.add('hide');
    document.querySelectorAll('body > *:not(.preloader)').forEach(element => {
      element.style.opacity = 1; // Override opacity to show content
    });
  }, 600); // Change this time according to your actual loading time
});

window.addEventListener('load', function () {
  setTimeout(function () {
    var loader = document.querySelector('.loader');
    loader.classList.add('hide');

    // Trigger switch appearance after loader is hidden
    setTimeout(function () {
      loader.style.display = 'none'; // Hide loader after transition
      document.querySelector('.switch').classList.add('show');
    }, 200); // Same duration as loader transition
  }, 600);
});

// EXPAND INFO
// holy swiss typography
$(document).ready(function () {
  $('#holy_link').click(function () {
    $(this).toggleClass('active');
    $('.expand_holy').toggleClass('open');
    $('#holy_info').toggleClass('open');
    $(this).text(function (i, text) {
      return text === "Info +" ? "Info -" : "Info +";
    })
  });
});

// grafica italiana
$(document).ready(function () {
  $('#sottsass_link').click(function () {
    $(this).toggleClass('active');
    $('.expand_sottsass').toggleClass('open');
    $('#sottsass_info').toggleClass('open');
    $(this).text(function (i, text) {
      return text === "Info +" ? "Info -" : "Info +";
    })
  });
});

// OUT!!!
$(document).ready(function () {
  $('#out_link').click(function () {
    $(this).toggleClass('active');
    $('.expand_out').toggleClass('open');
    $('#out_info').toggleClass('open');
    $(this).text(function (i, text) {
      return text === "Info +" ? "Info -" : "Info +";
    })
  });
});

// sherlock
$(document).ready(function () {
  $('#sherlock_link').click(function () {
    $(this).toggleClass('active');
    $('.expand_sherlock').toggleClass('open');
    $('#sherlock_info').toggleClass('open');
    $(this).text(function (i, text) {
      return text === "Info +" ? "Info -" : "Info +";
    })
  });
});

// aradia
$(document).ready(function () {
  $('#aradia_link').click(function () {
    $(this).toggleClass('active');
    $('.expand_aradia').toggleClass('open');
    $('#aradia_info').toggleClass('open');
    $(this).text(function (i, text) {
      return text === "Info +" ? "Info -" : "Info +";
    })
  });
});

// game thesaurus
$(document).ready(function () {
  $('#game_link').click(function () {
    $(this).toggleClass('active');
    $('.expand_game').toggleClass('open');
    $('#game_info').toggleClass('open');
    $(this).text(function (i, text) {
      return text === "Info +" ? "Info -" : "Info +";
    })
  });
});

// 4030: the user as designer
$(document).ready(function () {
  $('#user_link').click(function () {
    $(this).toggleClass('active');
    $('.expand_user').toggleClass('open');
    $('#user_info').toggleClass('open');
    $(this).text(function (i, text) {
      return text === "Info +" ? "Info -" : "Info +";
    })
  });
});

// PRMC
$(document).ready(function () {
  $('#prmc_link').click(function () {
    $(this).toggleClass('active');
    $('.expand_prmc').toggleClass('open');
    $('#prmc_info').toggleClass('open');
    $(this).text(function (i, text) {
      return text === "Info +" ? "Info -" : "Info +";
    })
  });
});

// the duel
$(document).ready(function () {
  $('#duel_link').click(function () {
    $(this).toggleClass('active');
    $('.expand_duel').toggleClass('open');
    $('#duel_info').toggleClass('open');
    $(this).text(function (i, text) {
      return text === "Info +" ? "Info -" : "Info +";
    })
  });
});

// a weekend in zurich
$(document).ready(function () {
  $('#guide_link').click(function () {
    $(this).toggleClass('active');
    $('.expand_guide').toggleClass('open');
    $('#guide_info').toggleClass('open');
    $(this).text(function (i, text) {
      return text === "Info +" ? "Info -" : "Info +";
    })
  });
});

// Google tag (gtag.js)
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-8SNG96QC8J');