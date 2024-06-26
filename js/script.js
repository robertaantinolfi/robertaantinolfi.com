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
