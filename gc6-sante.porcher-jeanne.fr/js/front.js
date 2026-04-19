'use strict';

function Cig(){
    document.getElementById("Cig").style.display = "block";
    document.getElementById("CE").style.display = "none";

    $(document.getElementById("idCE")).removeClass("active");
    $(document.getElementById("idCig")).addClass("active");
}

function Ce(){
    document.getElementById("CE").style.display = "block";
    document.getElementById("Cig").style.display = "none";

    $(document.getElementById("idCig")).removeClass("active");
    $(document.getElementById("idCE")).addClass("active");

}

function fadeInTimelineItems() {
  const timelineItems = document.querySelectorAll('.timeline.fade-in-up-on-scroll');
  timelineItems.forEach((item, index) => {
      setTimeout(() => {
          item.style.display = 'block';
          item.classList.add('fade-in-up');
      }, index * 500); // Adjust the delay as needed
  });
}

window.addEventListener('load', fadeInTimelineItems);