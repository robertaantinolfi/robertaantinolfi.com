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

// Simulate loading completion
window.addEventListener('load', function() {
  setTimeout(function() {
    document.querySelector('.loader').classList.add('hide');
    document.querySelectorAll('body > *:not(.preloader)').forEach(element => {
      element.style.opacity = 1; // Override opacity to show content
    });
  }, 800); // Change this time according to your actual loading time
});

// sup categories
document.addEventListener("DOMContentLoaded", function() {
  const projects = document.querySelectorAll(".project");

  // count projects for each category
  const categoryCounts = {
    all: projects.length,
    editorial: 0,
    research: 0,
    website: 0,
    data: 0,
    digital: 0,
    identity: 0,
  };

  projects.forEach(project => {
    const categories = project.classList;
    categories.forEach(category => {
      if (categoryCounts.hasOwnProperty(category)) {
        categoryCounts[category]++;
      }
    });
  });

  // update the counts in the HTML without parentheses
  document.getElementById("allCount").textContent = categoryCounts.all;
  document.getElementById("editorialCount").textContent = categoryCounts.editorial;
  document.getElementById("researchCount").textContent = categoryCounts.research;
  document.getElementById("websiteCount").textContent = categoryCounts.website;
  document.getElementById("dataCount").textContent = categoryCounts.data;
  document.getElementById("digitalCount").textContent = categoryCounts.digital;
  document.getElementById("identityCount").textContent = categoryCounts.identity;
});

// JavaScript function to show tooltip
function showTooltip(event, text) {
  var tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = text;
  tooltip.style.top = event.clientY - 85 + "px";
  tooltip.style.left = event.clientX + 10 + "px";
  tooltip.style.visibility = "visible";
  tooltip.style.opacity = "1";
}

// Hide tooltip when mouse moves out
document.addEventListener("mouseout", function(event) {
  var tooltip = document.getElementById("tooltip");
  tooltip.style.visibility = "hidden";
  tooltip.style.opacity = "0";
});

// EXPAND INFO
// holy swiss typography
$(document).ready(function() {
  $('#holy_link').click(function() {
    $(this).toggleClass('active');
    $('.expand_holy').toggleClass('open');
    $('#holy_info').toggleClass('open'); 
    $(this).text(function(i, text){
      return text === "+ Info" ? "– Info" : "+ Info";
    })
  });
});

// grafica italiana
$(document).ready(function() {
  $('#sottsass_link').click(function() {
    $(this).toggleClass('active');
    $('.expand_sottsass').toggleClass('open');
    $('#sottsass_info').toggleClass('open'); 
    $(this).text(function(i, text){
      return text === "+ Info" ? "– Info" : "+ Info";
    })
  });
});

// OUT!!!
$(document).ready(function() {
  $('#out_link').click(function() {
    $(this).toggleClass('active');
    $('.expand_out').toggleClass('open');
    $('#out_info').toggleClass('open'); 
    $(this).text(function(i, text){
      return text === "+ Info" ? "– Info" : "+ Info";
    })
  });
});

// sherlock
$(document).ready(function() {
  $('#sherlock_link').click(function() {
    $(this).toggleClass('active');
    $('.expand_sherlock').toggleClass('open');
    $('#sherlock_info').toggleClass('open'); 
    $(this).text(function(i, text){
      return text === "+ Info" ? "– Info" : "+ Info";
    })
  });
});

// aradia
$(document).ready(function() {
  $('#aradia_link').click(function() {
    $(this).toggleClass('active');
    $('.expand_aradia').toggleClass('open');
    $('#aradia_info').toggleClass('open'); 
    $(this).text(function(i, text){
      return text === "+ Info" ? "– Info" : "+ Info";
    })
  });
});

// game thesaurus
$(document).ready(function() {
  $('#game_link').click(function() {
    $(this).toggleClass('active');
    $('.expand_game').toggleClass('open');
    $('#game_info').toggleClass('open'); 
    $(this).text(function(i, text){
      return text === "+ Info" ? "– Info" : "+ Info";
    })
  });
});

// 4030: the user as designer
$(document).ready(function() {
  $('#user_link').click(function() {
    $(this).toggleClass('active');
    $('.expand_user').toggleClass('open');
    $('#user_info').toggleClass('open'); 
    $(this).text(function(i, text){
      return text === "+ Info" ? "– Info" : "+ Info";
    })
  });
});

// the duel
$(document).ready(function() {
  $('#duel_link').click(function() {
    $(this).toggleClass('active');
    $('.expand_duel').toggleClass('open');
    $('#duel_info').toggleClass('open'); 
    $(this).text(function(i, text){
      return text === "+ Info" ? "– Info" : "+ Info";
    })
  });
});

// a weekend in zurich
$(document).ready(function() {
  $('#guide_link').click(function() {
    $(this).toggleClass('active');
    $('.expand_guide').toggleClass('open');
    $('#guide_info').toggleClass('open'); 
    $(this).text(function(i, text){
      return text === "+ Info" ? "– Info" : "+ Info";
    })
  });
});

// Google tag (gtag.js)
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-8SNG96QC8J');